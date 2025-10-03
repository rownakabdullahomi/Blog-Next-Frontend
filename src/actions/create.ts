"use server";

import { authOptions } from "@/helpers/authOptions";
import { getUserSession } from "@/helpers/getUserSession";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  const session = await getServerSession(authOptions);
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
    authorId: session?.user?.id,
    isFeatured: Boolean(blogInfo.isFeatured),
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,{
    method: "POST",
    headers:{
        "content-type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();
  if(result?.id){
    revalidateTag("BLOGS")
    redirect("/");
  }
  return result;
};
