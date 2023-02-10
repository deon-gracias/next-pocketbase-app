import { pb } from "@/lib/pocketbase";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ReactQuill from "react-quill";
import { FormEvent, useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    pb.collection("posts")
      .create({
        title: title,
        content: content,
        user: pb.authStore.model?.id,
      })
      .then((posts) => {
        alert("Created post");
        console.log(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <DashboardLayout>
      <DashboardHeader title="Create Post" />
      <form className="container mx-auto mt-6" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">Title</label>
          <input
            className="input input-bordered"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>

        <div className="form-control">
          <ReactQuill theme="snow" value={content} onChange={setContent} />
        </div>

        <div className="form-control">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
}
