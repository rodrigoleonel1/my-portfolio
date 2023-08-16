import { IconsBox } from "./IconsBox";
import { IoArrowForward } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-primary h-[80px] flex flex-col place-items-center justify-center">
      <IconsBox />
      <a
        href="https://github.com/rodrigoleonel1/my-portfolio"
        target={"_blank"}
        rel={"noreferrer"}
        className="text-zinc-400 h-[70px] flex place-items-center gap-1 hover:text-white"
      >
        Developed by Rodrigo Alarcón
        <IoArrowForward />
      </a>
    </footer>
  );
};
