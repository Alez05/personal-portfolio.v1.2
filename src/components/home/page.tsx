import { Hero } from "@components/shared/header"

const Home = () => {
  return (
    <div>
      <Hero title="Alexandru Cercel" subtitle="Front-end Developer" location="London, UK" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
        <button className="bg-sky-500">Contact</button>
        <button className="bg-pink-500">Contact</button>
      </Hero>
    </div>
  )
}


export { Home }
