import { ContactCTA } from "../../components";
import { AboutHl, BlogHl, HomeHl, ProjectHl, SkillHl} from "./index";

const Home = () => {
  return (
    <main>
      <HomeHl />
      <AboutHl />
      <SkillHl />
      <ProjectHl />
      <BlogHl />
      <ContactCTA />
    </main>
  );
};

export { Home };
