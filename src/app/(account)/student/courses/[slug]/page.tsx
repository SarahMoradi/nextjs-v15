import { notFound } from "next/navigation";

export default function CourseDetails({ params }: { params: { slug: string } }) {
  if (!params.slug) return notFound();

  const {slug} = params

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <h1 className="text-3xl font-bold text-center">Course Details</h1>
      <p className="text-xl text-gray-600 mt-4">Slug: {slug}</p>
    </div>
  );
}
