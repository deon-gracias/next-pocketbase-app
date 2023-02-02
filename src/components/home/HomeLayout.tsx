import { PropsWithChildren } from "react";
import HomeRightSidebar from "./HomeRightSidebar";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="drawer drawer-mobile drawer-end">
      <input
        id="home-right-sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">{children}</div>
      <HomeRightSidebar />
    </div>
  );
}
