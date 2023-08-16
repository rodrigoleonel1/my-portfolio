import { Title } from "./Title";
import { ALL_PROJECTS } from "../constants.js";
import { Card } from "./Card";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Projects = ({ home, quantity }) => {
  const PROJECTS = ALL_PROJECTS.slice(0, quantity);

  return (
    <section className="m-auto flex flex-col gap-4 text-white px-6">
      <Title name="My projects" id="Projects" />
      <div className="mx-auto grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]">
        {PROJECTS.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            img={project.img}
            tools={project.tools}
            repo={project.repo}
            demo={project.demo}
          />
        ))}
      </div>

      {home ? (
        <Link
          reloadDocument
          to={"/projects"}
          className="bg-[#161617] flex justify-center place-items-center gap-1 px-6 py-2 mb-6 rounded-lg shadow-md mx-auto md:mt-4 md:mb-8"
        >
          More projects
          <IoArrowForward />
        </Link>
      ) : (
        <Link
          reloadDocument
          to={"/"}
          className="bg-[#161617] flex justify-center place-items-center gap-1 px-6 py-2 mb-6 rounded-lg shadow-md mx-auto md:mt-4 md:mb-8"
        >
          Return home
          <IoArrowForward />
        </Link>
      )}
    </section>
  );
};
