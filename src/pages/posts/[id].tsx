import HomeHeader from "@/components/home/HomeHeader";
import { pb } from "@/lib/pocketbase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
  const [post, setPost] = useState({});

  const router = useRouter();

  const id = router.query.id as string;

  useEffect(() => {
    getPost();
  }, []);

  function getPost() {
    pb.collection("posts")
      .getOne(id)
      .then((data) => {
        console.log("Post : ", data);
        setPost(data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <main>
      <pre>{JSON.stringify(post, null, 2)}</pre>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </main>
  );
}
