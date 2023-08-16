import { Title } from "./Title";

export const About = () => {
  return (
    <section className="flex flex-col gap-4 px-6 mb-6 m-auto md:mb-8">
      <Title name="About me" id="About"/>
      <p className="text-zinc-400">
        I was a student at the university, pursuing a degree in Psychology with
        the intention of helping people by understanding the human mind.
        However, during my studies, I discovered that I didn&apos;t enjoy
        learning about it.
      </p>
      <p className="text-zinc-400">
        In my search for something i truly enjoyed learning, I came across
        videos about HTML and CSS. I was fascinated to see how I could create
        web pages with tags and styles, something I had been using my whole
        life. Programming excites me because I can create pages I like,
        understand how the ones I use daily work, and assist others with my
        creations something similar to my initial intention with Psychology, but
        now in the technological field that I&apos;ve always loved.
      </p>
    </section>
  );
};
