import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/register">register</NavLink>
        <NavLink to="login">login</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
