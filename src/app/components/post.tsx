"use client";
import React, { FC } from "react";

type Props = {
  id: number;
  title: string;
  content: string;
  authorName: string;
};

export const PostComponent: FC<Props> = ({
  id,
  title,
  content,
  authorName,
}) => {
  const handleDelete = async () => {
    try {
      fetch(`/api/post/${id}`, { method: "DELETE" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-5 border border-gray-400 rounded-lg p-4">
      <div
        className="flex flex-row justify-end cursor-pointer text-red-600"
        onClick={handleDelete}
      >
        x
      </div>
      <h3>{title}</h3>
      <h4>{content}</h4>
      <h5>{authorName}</h5>
    </div>
  );
};
