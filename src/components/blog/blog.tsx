import { ContactCTA } from "@components/shared"
import { HeroBl } from "./hero-bl"
import { BlogSection } from "./blog-section"

const Blog = () => {
  return (
    <div className="p-10 text-center text-2xl">
      <HeroBl />
      <BlogSection />
      <ContactCTA />
    </div>
  )
}

export { Blog }
