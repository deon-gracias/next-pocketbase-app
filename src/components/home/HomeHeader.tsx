import { homeRoutes } from "@/data/routes";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <div className="navbar flex justify-between bg-base-200 shadow-md px-5 lg:px-10">
      {/* Start */}
      <div className="flex items-center navbar-start">
        <h1 className="text-2xl">Logo</h1>
      </div>

      {/* Center */}
      <div className="navbar-center"></div>

      {/* End */}
      <div className="navbar-end flex gap-2">
        {/* Menu Items */}
        <ul className="menu menu-horizontal md:flex hidden">
          {homeRoutes.map((route) => (
            <li key={route.path}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
        <Link href={"/login"} className="btn btn-primary normal-case">Login</Link>
        {/* Drawer icon */}
        <label
          htmlFor="home-right-sidebar-drawer"
          className="btn btn-square btn-ghost drawer-button md:hidden"
        >
          <Bars3Icon className="h-7 w-7" />
        </label>
      </div>
    </div>
  );
}
