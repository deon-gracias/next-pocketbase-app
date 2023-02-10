import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { pb } from "@/lib/pocketbase";
import Head from "next/head";
import { Record } from "pocketbase";
import { FormEvent, useEffect, useState } from "react";

export default function Profile() {
  const [avatarImage, setAvatarImage] = useState<File>();
  const [user, setUser] = useState<Record>();

  useEffect(() => {
    pb.collection("users")
      .getOne(pb.authStore.model!.id)
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <DashboardLayout>
      <Head>
        <title>Profile</title>
      </Head>

      <DashboardHeader title="Profile" />

      <main className="p-6">
        <div className="card shadow-xl">
          <div className="card-body">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src={user ? pb.getFileUrl(user, user.avatar) : undefined}
                  alt="Avatar Image"
                />
              </div>
            </div>
            <div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-sm"
                onChange={(e) => {
                  if (e.currentTarget.files)
                    setAvatarImage(e.currentTarget.files[0]);
                }}
              />
            </div>
            <button
              className="btn max-w-sm"
              onClick={() => {
                const formData = new FormData();
                if (!avatarImage || !pb.authStore.model) {
                  alert("Select an image");
                  return;
                }

                formData.append("avatar", avatarImage);
                pb.collection("users")
                  .update(pb.authStore.model?.id, formData)
                  .then((value) => {
                    setUser(value);
                    console.log("Updated : ", value);
                  });
              }}
            >
              Update Avatar
            </button>
            <div>Username : {pb?.authStore.model?.username}</div>
            <div>Email : {pb?.authStore.model?.email}</div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
