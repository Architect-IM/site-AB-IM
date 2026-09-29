import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bureau/proekty")({
  component: () => <Outlet />,
});
