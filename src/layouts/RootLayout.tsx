import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default RootLayout;
