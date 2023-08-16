import { IconLink } from "./IconLink";
import { IconClipboard } from "./IconClipboard";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export const IconsBox = () => {
  return (
    <nav className="flex gap-2">
      <IconLink
        href="https://github.com/rodrigoleonel1"
        target={"_blank"}
        rel={"noreferrer"}
        icon={IoLogoGithub}
      />
      <IconLink
        href="https://www.linkedin.com/in/rodrigoalarc%C3%B3n/"
        target={"_blank"}
        rel={"noreferrer"}
        icon={IoLogoLinkedin}
      />
      <IconClipboard
        text={{ contact: "rodricsxd@gmail.com", type: "Email" }}
        icon={IoMail}
      />
    </nav>
  );
};
