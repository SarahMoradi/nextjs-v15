import {CourseSummary} from '@/types/course-summary.interface'
import {HomeHeroSection} from './_components/home-hero-section/home-hero-section'
import { CourseCardList } from './(courses)/_components/course-card-list'
// import {Colors} from './_components/colors/colors'

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const response = await fetch(`https://api.classbon.com/api/courses/newest/${count}`, {
    next: {
      revalidate: 24 * 60 * 60,  //based on seconds will be revalidated
    },
  })
  return response.json()
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4)
  console.log(newestCourses[0].title)
  return (
    <>
      <HomeHeroSection />
      <CourseCardList courses={newestCourses} />
      {newestCourses.map((post) => {
        return <p key={post.title}>{post.title}</p>
      })}
    </>
  )
}
