import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useUserStore } from "@/store/userStore";
import Head from "next/head";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardHeader title={"Dashboard"} />
    </DashboardLayout>
  );
}
