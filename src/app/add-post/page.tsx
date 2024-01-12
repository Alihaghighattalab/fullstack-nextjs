"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPost() {
  const { refresh } = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event?.preventDefault();
    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      refresh();
    } catch (error) {
      alert.call(error);
    }
    setTitle("");
    setContent("");
  };
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col gap-5 mt-10 border border-gray-200 p-4 w-full max-w-[500px]">
        <h1 className="text-lg font-semibold w-full flex justify-center">
          Add Post
        </h1>
        <form className="flex flex-col gap-2.5" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              placeholder="Title ..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="content">Content</label>
            <input
              id="content"
              placeholder="Content ..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
