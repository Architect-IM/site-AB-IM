import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bureau/stadii")({
  component: () => <Outlet />,
});
