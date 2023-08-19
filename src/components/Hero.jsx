import { IconsBox } from "./IconsBox";

export const Hero = () => {
  return (
    <section className="flex felx-col flex-col-reverse gap-4 justify-between items-center text-white px-6 mb-6 md:mb-8 md:flex-row xl:gap-10">
      <div className="flex flex-col items-center text-center gap-2 md:text-start md:items-start md:w-[450px] xl:w-auto">
        <h1 className="text-4xl font-bold">Hi, i&apos;m Rodrigo Alarcon 👋</h1>
        <h2 className="text-xl">Full-Stack web developer 👨‍💻</h2>
        <p className="text-zinc-400">
          I have a passion for building web applications and solving problems. I
          currently dedicate myself to studying self-taught and doing projects
          while looking for a job to put all the knowledge I have acquired to
          the test and continue accumulating experience.
        </p>
        <IconsBox />
      </div>
      <div className="bg-[#161617] rounded-full overflow-hidden h-[180px] shadow-md xl:min-w-[220px] xl:h-[220px]">
        <img className="h-full" src="./avatar.png" alt="Rodrigo Alarcón avatar portfolio" />
      </div>
    </section>
  );
};
