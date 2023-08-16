import { Pill } from "./Pill";
import { Title } from "./Title";
import { SKILLS } from "../constants.js";

export const Skills = () => {
  return (
    <section className="flex flex-col gap-4 px-6 mb-6 m-auto md:mb-8">
      <Title name="Skills" id="Skills" />
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SKILLS.map((skill) => (
          <Pill key={skill.name} skill={skill} />
        ))}
      </div>
      <div className="mt-4 text-center text-xl font-semibold md:mt-6">
        ...and many more!
      </div>
    </section>
  );
};
