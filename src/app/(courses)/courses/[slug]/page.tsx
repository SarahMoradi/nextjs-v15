import { API_URL } from "@/configs/global";
import { CourseDetails } from "@/types/course-details.interface";
import { notFound } from "next/navigation";


//it should be defined in side of dynamic route segment for getting static rendring based on slugs

//tip:
//  The generateStaticParams function can be used in combination with dynamic route segments
//  to statically generate routes at build time instead of on-demand at request time.
//  The primary benefit of the generateStaticParams function is its smart retrieval of data.
export async function generateStaticParams(){
  const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) => res.json());

  return (slugs as string[]).map((slug: string) => ({
    slug: slug
  }))
}

async function getCourseDeatils(slug: string): Promise<CourseDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
}

export default async function CourseDetail({
  params,
}: { params: { slug: string }}) {
  if (!params.slug) return notFound();

  const { slug } = params;
  const courseData = await getCourseDeatils(slug);

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <h1 className="text-3xl font-bold text-center">Course Details</h1>
      <p className="text-xl text-gray-600 mt-4">Slug: {slug}</p>
      <span>{courseData.title}</span>
    </div>
  );
}
