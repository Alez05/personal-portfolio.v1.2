import timelineData from "../../../content/myjourney.json";
import { JourneyClient } from "./[client-journey]/client-journey";

const JourneySection = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-[#F1EFEC]">
      <h2 className="text-3xl font-bold text-[#123458] mb-10 text-center">My Journey</h2>
      <JourneyClient timelineData={timelineData} />
    </section>
  );
};

export { JourneySection };
