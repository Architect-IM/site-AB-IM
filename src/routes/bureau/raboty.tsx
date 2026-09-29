import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bureau/raboty")({
  component: () => <Outlet />,
});
