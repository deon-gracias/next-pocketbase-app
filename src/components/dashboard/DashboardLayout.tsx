import { pb } from "@/lib/pocketbase";
import { UserState, useUserStore } from "@/store/userStore";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import DashboardLeftSidebar from "./DashboardLeftSidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  useEffect(() => {
    !pb.authStore.isValid ? router.push("/") : null;
  }, []);

  return (
    <div className="drawer drawer-mobile">
      <input
        id="left-sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">{children}</div>
      <DashboardLeftSidebar />
    </div>
  );
}
