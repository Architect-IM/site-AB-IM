const {test} = require('node:test');
const assert = require('node:assert/strict');
const deploy = require('./deploy-review.cjs');

function fixture({status='succeed', stale=false, reject=false} = {}) {
  const calls=[]; const outputs={}; let reads=0;
  const expected={key:'pr-3',sha:'a'.repeat(40),run:'123'};
  const args={
    context:{repo:{owner:'example',repo:'site'}},
    env:{GITHUB_SHA:'b'.repeat(40),PAGES_BUILD_SHA:'c'.repeat(40),PAGES_ARTIFACT_ID:'42'}, expected,
    core:{getIDToken:async()=> 'test-token',setSecret:()=>{},setOutput:(key,value)=>outputs[key]=value},
    github:{request:async(route,params)=>{
      calls.push({route,params});
      if(route.startsWith('POST')) {
        if(reject) throw {status:403,request:{body:'test-token'}};
        return {data:{id:params.pages_build_version,page_url:'https://example.github.io/site/'}};
      }
      return {data:{status:reads++ === 0 && status==='succeed' ? 'deployment_queued' : status}};
    }},
    fetchPage:async()=>({ok:true,json:async()=>stale?{...expected,run:'122'}:expected}),
    sleep:async()=>{}
  };
  return {args,calls,outputs};
}

test('deploys the snapshot commit and confirms the served revision before returning a link',async()=>{
  const {args,calls,outputs}=fixture(); await deploy(args);
  assert.equal(calls[0].params.pages_build_version,'c'.repeat(40));
  assert.equal(calls[0].params.artifact_id,42);
  assert.equal(outputs.page_url,'https://example.github.io/site/');
});
test('a stale served copy cannot produce a successful preview link',async()=>{
  const {args,outputs}=fixture({stale:true});
  await assert.rejects(deploy(args),/expected review is not available/); assert.deepEqual(outputs,{});
});
test('failed and stalled deployments cannot produce a preview link',async()=>{
  for(const status of ['failed','deployment_queued']) {
    const {args,outputs}=fixture({status}); await assert.rejects(deploy(args)); assert.deepEqual(outputs,{});
  }
});
test('request failures do not expose the OIDC token',async()=>{
  const {args}=fixture({reject:true});
  await assert.rejects(deploy(args),error=>error.message.includes('403')&&!error.message.includes('test-token'));
});
