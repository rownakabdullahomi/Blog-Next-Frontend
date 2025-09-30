import { NextResponse } from "next/server";

export const blogs = [
  {
    id: 6,
    title: "Mastering Prisma Migrations",
    content:
      "A complete guide to handling schema changes in Prisma using migrations.",
    thumbnail: "https://picsum.photos/seed/prisma-migrations/600/400",
    isFeatured: false,
    tags: ["Prisma", "Database", "Migrations"],
    views: 6,
    authorId: 1,
    createdAt: "2025-09-28T14:10:13.295Z",
    updatedAt: "2025-09-29T06:06:58.604Z",
    author: {
      id: 1,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-28T12:56:11.971Z",
      updatedAt: "2025-09-28T12:56:11.971Z",
    },
  },
  {
    id: 5,
    title: "How to Deploy Next.js App on Vercel",
    content:
      "In this guide, you will learn how to deploy your Next.js project to Vercel in just a few steps.",
    thumbnail: "https://picsum.photos/seed/vercel1/600/400",
    isFeatured: false,
    tags: ["Next.js", "Deployment", "Vercel"],
    views: 166,
    authorId: 3,
    createdAt: "2025-09-28T14:08:41.252Z",
    updatedAt: "2025-09-29T13:53:36.403Z",
    author: {
      id: 3,
      name: "Admin User",
      email: "admin@example.com",
      password: "adminPass!23",
      role: "ADMIN",
      phone: "+8801812345678",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
      status: "ACTIVE",
      isVerified: true,
      createdAt: "2025-09-28T12:56:45.005Z",
      updatedAt: "2025-09-28T12:56:45.005Z",
    },
  },
  {
    id: 4,
    title: "10 Tips for Writing Clean TypeScript Code",
    content:
      "Clean code improves readability and maintainability. In this article, I share 10 tips for TypeScript developers.",
    thumbnail: "https://picsum.photos/seed/typescript1/600/400",
    isFeatured: true,
    tags: ["TypeScript", "Best Practices", "Coding"],
    views: 7,
    authorId: 2,
    createdAt: "2025-09-28T12:58:01.397Z",
    updatedAt: "2025-09-29T06:12:01.797Z",
    author: {
      id: 2,
      name: "Rownak Abdullah",
      email: "rownak@example.com",
      password: "secret123",
      role: "USER",
      phone: "+8801712345678",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-28T12:56:19.935Z",
      updatedAt: "2025-09-28T12:56:19.935Z",
    },
  },
  {
    id: 3,
    title: "Getting Started with Prisma and Next.js",
    content:
      "This post explains how to set up Prisma with Next.js for full-stack development.",
    thumbnail: "https://picsum.photos/seed/prisma1/600/400",
    isFeatured: false,
    tags: ["Prisma", "Next.js", "Fullstack"],
    views: 2,
    authorId: 1,
    createdAt: "2025-09-28T12:57:32.484Z",
    updatedAt: "2025-09-29T06:12:01.846Z",
    author: {
      id: 1,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-28T12:56:11.971Z",
      updatedAt: "2025-09-28T12:56:11.971Z",
    },
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    content:
      "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    views: 2,
    authorId: 1,
    createdAt: "2025-09-28T12:57:14.954Z",
    updatedAt: "2025-09-29T06:12:01.862Z",
    author: {
      id: 1,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-28T12:56:11.971Z",
      updatedAt: "2025-09-28T12:56:11.971Z",
    },
  },
];

export const GET = async () => {
  return Response.json(blogs);
};

export const POST = async (request: Request) => {
  const blog = await request.json();
  const newBlog = {
    ...blog,
    id: blogs.length + 3,
  };
  blogs.push(newBlog);

  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: {
      "content-type": "application/json",
    },
  });
};
