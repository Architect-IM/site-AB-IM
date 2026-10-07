import{r as e}from"./rolldown-runtime-Cwge4JMp.js";import{i as t,r as n}from"./framework-PJ6s30SV.js";var r=e(t(),1),i={longEdge:2800,jpegQuality:.84,saturation:.88,warmth:{r:1.035,g:1.005,b:.965}};function a(e){let t=e/255,n=t+.045*(1-t)*(1-t),r=n-.03*n*n*n;return Math.min(1,Math.max(0,(r-.5)*1.05+.5))}function o(e,t,n){let r=a(e)*i.warmth.r,o=a(t)*i.warmth.g,s=a(n)*i.warmth.b,c=.2126*r+.7152*o+.0722*s,l=i.saturation;r=c+(r-c)*l,o=c+(o-c)*l,s=c+(s-c)*l;let u=e=>Math.min(255,Math.max(0,Math.round(e*255)));return[u(r),u(o),u(s)]}function s(e){for(let t=0;t<e.length;t+=4){let[n,r,i]=o(e[t],e[t+1],e[t+2]);e[t]=n,e[t+1]=r,e[t+2]=i}}function c(e,t){let n=Math.max(e,t);if(n<=i.longEdge)return{width:e,height:t};let r=i.longEdge/n;return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(t*r))}}var l=n();function u(e){let t=e.lastIndexOf(`.`);return`${t>0?e.slice(0,t):e}-site.jpg`}async function d(e){let t=await createImageBitmap(e,{imageOrientation:`from-image`}),n=c(t.width,t.height),r=document.createElement(`canvas`);r.width=n.width,r.height=n.height;let a=r.getContext(`2d`,{willReadFrequently:!0});if(!a)throw Error(`Не удалось подготовить изображение.`);a.drawImage(t,0,0,n.width,n.height),t.close();let o=a.getImageData(0,0,n.width,n.height);s(o.data),a.putImageData(o,0,0);let l=await new Promise((e,t)=>{r.toBlob(n=>n?e(n):t(Error(`Не удалось сохранить JPEG.`)),`image/jpeg`,i.jpegQuality)});return{name:u(e.name),beforeUrl:URL.createObjectURL(e),afterUrl:URL.createObjectURL(l),width:n.width,height:n.height}}function f(){let[e,t]=(0,r.useState)([]),[n,i]=(0,r.useState)(!1),[a,o]=(0,r.useState)(``);async function s(e){let n=[...e].filter(e=>e.type.startsWith(`image/`));if(!n.length){o(`Нужен файл JPEG, PNG или WebP. Снимки HEIC с телефона сначала сохраните как JPEG.`);return}i(!0),o(``);try{let e=await Promise.all(n.map(d));t(t=>[...e,...t])}catch{o(`Этот файл не удалось прочитать. Сохраните его как JPEG и загрузите снова.`)}finally{i(!1)}}return(0,l.jsxs)(`section`,{className:`section photo-grade`,children:[(0,l.jsxs)(`label`,{className:`photo-drop`,children:[(0,l.jsx)(`input`,{type:`file`,accept:`image/jpeg,image/png,image/webp`,multiple:!0,onChange:e=>{e.target.files&&s(e.target.files),e.target.value=``}}),(0,l.jsx)(`span`,{children:n?`Обрабатываю…`:`Положить фотографии сюда`}),(0,l.jsx)(`small`,{children:`JPEG, PNG или WebP. Несколько файлов сразу.`})]}),a?(0,l.jsx)(`p`,{className:`photo-grade-error`,children:a}):null,(0,l.jsx)(`div`,{className:`photo-grade-list`,children:e.map(e=>(0,l.jsxs)(`article`,{children:[(0,l.jsxs)(`figure`,{children:[(0,l.jsx)(`img`,{src:e.beforeUrl,alt:``}),(0,l.jsx)(`figcaption`,{children:`Как сдали`})]}),(0,l.jsxs)(`figure`,{children:[(0,l.jsx)(`img`,{src:e.afterUrl,alt:``}),(0,l.jsxs)(`figcaption`,{children:[`Для сайта · `,e.width,`×`,e.height]})]}),(0,l.jsx)(`a`,{href:e.afterUrl,download:e.name,children:`Скачать`})]},e.afterUrl))}),(0,l.jsx)(`style`,{children:`
        .photo-grade { padding-top: 0; }
        .photo-drop {
          display: grid;
          gap: 8px;
          align-content: center;
          min-height: 180px;
          padding: 28px;
          border: 1px dashed var(--line);
          cursor: pointer;
        }
        .photo-drop input { display: none; }
        .photo-drop small { color: var(--muted); }
        .photo-grade-error { color: #8a3b32; }
        .photo-grade-list { display: grid; gap: 28px; margin-top: 36px; }
        .photo-grade-list article {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 18px;
          align-items: end;
        }
        .photo-grade-list figure { margin: 0; }
        .photo-grade-list img { aspect-ratio: 3 / 2; object-fit: cover; background: var(--paper-deep); }
        .photo-grade-list figcaption { margin-top: 8px; color: var(--muted); font-size: 13px; }
        .photo-grade-list a { padding-bottom: 28px; border-bottom: 1px solid var(--ink); }
        @media (max-width: 800px) {
          .photo-grade-list article { grid-template-columns: 1fr; }
          .photo-grade-list a { padding-bottom: 0; }
        }
      `})]})}export{f as PhotoGrade};