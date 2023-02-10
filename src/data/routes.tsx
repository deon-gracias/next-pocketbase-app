import {
  Cog6ToothIcon,
  HomeIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const iconClasses = `h-6 w-6`;

export const homeRoutes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/#about",
    name: "About",
  },
];

export const dashboardRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
  },
  {
    path: "/posts",
    name: "Posts",
    icon: <Cog6ToothIcon className={iconClasses} />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <Cog6ToothIcon className={iconClasses} />,
  },
];
