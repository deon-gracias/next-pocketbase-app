import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";

export default function DashboardHeader({ title }: { title: string }) {
  return (
    <div className="navbar flex justify-between bg-base-200 shadow-md">
      <div className="flex items-center">
        {/* Drawer icon */}
        <label
          htmlFor="left-sidebar-drawer"
          className="btn btn-square btn-ghost drawer-button lg:hidden"
        >
          <Bars3Icon className="h-7 w-7" />
        </label>

        <h1 className="text-2xl font-semibold ml-4">{title}</h1>
      </div>

      <div className="order-last">
        {/* Notification */}
        <button className="btn btn-ghost ml-4 btn-circle">
          <div className="indicator">
            <BellIcon className="h-6 w-6" />
            <span className="indicator-item badge badge-secondary badge-sm">
              1
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
