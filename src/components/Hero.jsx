import { IconsBox } from "./IconsBox";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-4 justify-center text-white px-6 mb-6 md:mb-8">
      <h1 className="text-4xl font-bold">Hi, i&apos;m Rodrigo Alarcon 👋</h1>
      <h2 className="text-xl">Full-Stack web developer 👨‍💻</h2>
      <p className="text-zinc-400">
        I have a passion for building web applications and solving problems. I
        currently dedicate myself to studying self-taught and doing projects
        while looking for a job to put all the knowledge I have acquired to the
        test and continue accumulating experience.
      </p>
      <IconsBox />
    </section>
  );
};
