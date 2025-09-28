import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";


export const generateStaticParams = async () => {
    return [
        {
            blogId: "5",
        }
    ]
}




const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const {blogId} = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const blog = await res.json();



  return (
    <div>
      <div className="py-30 px-4 max-w-7xl mx-auto">
            <BlogDetailsCard blog={blog}/>
        </div>;
    </div>
  );
};

export default BlogDetailsPage;
