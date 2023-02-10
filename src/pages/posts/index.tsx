import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { pb } from "@/lib/pocketbase";
import { TrashIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Record } from "pocketbase";

export default function Posts() {
  const [posts, setPosts] = useState<Record[]>();

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    pb.collection("posts")
      .getFullList(200, {
        sort: "-created",
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.error("Couldn't fetch posts : ", err.message));
  }

  return (
    <DashboardLayout>
      <Head>
        <title>Posts</title>
      </Head>

      <DashboardHeader title="Posts" />

      <main className="p-6 container mx-auto">
        <div className="card shadow-xl">
          <div className="card-body">
            <Link href="/posts/create" className="btn btn-primary">
              Create
            </Link>
            <button className="btn">Reload</button>
          </div>
        </div>

        <div className="grid mt-6">
          {!posts ? (
            <div className="card shadow-xl">
              <div className="card-body">No Posts</div>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="card shadow-xl">
                <div className="card-body">
                  <pre> {JSON.stringify(post, null, 2)} </pre>
                  <div className="card-actions">
                    <button
                      className="btn btn-square p-3"
                      onClick={() => {
                        pb.collection("posts").delete(post.id);
                        getPosts();
                      }}
                    >
                      <TrashIcon />
                    </button>
                    <Link className="btn btn-info" href={`/posts/${post.id}`}>
                      View Post
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </DashboardLayout>
  );
}
