import { Rating } from "@/app/_components/rating/rating";
import { API_URL } from "@/configs/global";
import { CourseDetails } from "@/types/course-details.interface";
import { notFound } from "next/navigation";

//it should be defined in side of dynamic route segment for getting static rendring based on slugs

//tip:
//  The generateStaticParams function can be used in combination with dynamic route segments
//  to statically generate routes at build time instead of on-demand at request time.
//  The primary benefit of the generateStaticParams function is its smart retrieval of data.
export async function generateStaticParams() {
  const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
    res.json()
  );

  return (slugs as string[]).map((slug: string) => ({
    slug: slug,
  }));
}

async function getCourseDeatils(slug: string): Promise<CourseDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
}

export default async function CourseDetail({
  params,
}: {
  params: { slug: string };
}) {
  if (!params.slug) return notFound();

  const { slug } = params;
  const course = await getCourseDeatils(slug);

  return (
    <div className="h-96 container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
      <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
          {course.subTitle}
        </h2>

        <div className=" mt-5">Video Player Component</div>
      </div>
      <div className="col-span-10 xl:col-span-3">
        <Rating rate={2} />
      </div>
      <div className="col-span-10 xl:col-span-6 bg-info"></div>
      <div className="col-span-10 xl:col-span-4 bg-warning"></div>
    </div>
  );
}
