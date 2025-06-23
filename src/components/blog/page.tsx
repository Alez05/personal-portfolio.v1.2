import { Button, Hero } from "@components/shared"

const Blog = () => {
  return (
    <div className="p-10 text-center text-2xl">
      <Hero title="Blogs" description="Interesting topics, stories, and guides on IT, development, web design, freelancing, and more.">
        <Button>View Blogs</Button>
      </Hero>
    </div>
  )
}

export { Blog }
