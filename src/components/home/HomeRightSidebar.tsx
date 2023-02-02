import Image from "next/image";
import Link from "next/link";
import Logo from "public/next.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import themes from "@/data/themes.json";
import { useTheme } from "next-themes";
import { homeRoutes } from "@/data/routes";

export default function HomeRightSidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="drawer-side shadow-lg">
      <label htmlFor="home-right-sidebar-drawer" className="drawer-overlay"></label>
      <div className="w-80 bg-base-200 text-base-content space-y-8 h-full py-3">
        {/* Search */}
        <div className="form-control px-4">
          <div className="input-group">
            <span>
              <MagnifyingGlassIcon className="w-5" />
            </span>
            <input type="text" placeholder="Search" className="input w-full" />
          </div>
        </div>

        {/* Menu */}
        <ul className="menu p-2 gap-2">
          {homeRoutes.map((route) => (
            <li key={route.path} className="hover-bordered">
              <a href={route.path}>
                 {route.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Change Theme */}
        <div className="form-control px-4">
          <select className="select select-bordered w-full" data-choose-theme>
            <option disabled value="">
              Pick a theme
            </option>
            <option value="">Default</option>
            {themes.map((theme) => (
              <option key={theme} onClick={() => setTheme(theme)} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
