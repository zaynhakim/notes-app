import { Outlet } from "react-router-dom";
import TopNav from "./topnav";

export default function Layout() {
  return (
    <div className="page-wrapper">
      <TopNav />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
