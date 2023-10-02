import { IoLogoGithub, IoLink } from "react-icons/io5";
import { IconLink } from "./IconLink";

export const Card = ({ img, title, description, tools, repo, demo }) => {
  return (
    <>
      <div className="mt-[28%] bg-[#161617] flex flex-col place-items-center gap-6 rounded-lg p-6 shadow-md sm:mt-6 sm:flex-row">
        <div className="relative -mt-[35%] w-full shrink-0 overflow-hidden rounded-xl shadow-2xl before:absolute before:inset-0 before:bg-black/5 sm:-mt-0 sm:w-1/2 md:-ml-[35%] md:w-8/12">
          <img
            className="object-cover h-48 lg:h-56"
            width={544}
            height={300}
            src={img}
            alt={title}
          />
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-sm text-zinc-400">{description}</p>
          <div className="flex flex-wrap items-center gap-1">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-[#111010] px-2 py-1 text-xs text-zinc-400"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-auto flex w-fit items-center gap-4">
            <IconLink
              href={repo}
              target={"_blank"}
              rel={"noreferrer"}
              icon={IoLogoGithub}
            />
            {demo && (
              <IconLink
                href={demo}
                target={"_blank"}
                rel={"noreferrer"}
                icon={IoLink}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
