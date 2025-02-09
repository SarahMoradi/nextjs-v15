import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  if (!params.slug) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog Post</h1>
      <p className="text-xl text-gray-600 mt-4">Slug: {params.slug}</p>
    </div>
  );
}
