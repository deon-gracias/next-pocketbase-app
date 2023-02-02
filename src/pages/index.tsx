import DoughnutChart from "@/components/charts/DoughnutChart";
import HomeHeader from "@/components/home/HomeHeader";
import HomeLayout from "@/components/home/HomeLayout";
import { pb } from "@/lib/pocketbase";
import { UserState, useUserStore } from "@/store/userStore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const user = useUserStore((state: UserState) => state.user);

  useEffect(() => {
    pb.authStore.isValid ? router.push("/dashboard") : null;
  }, []);

  return (
    <HomeLayout>
      <HomeHeader />
      <Head>
        <title>Home</title>
      </Head>
      <main></main>
    </HomeLayout>
  );
}
