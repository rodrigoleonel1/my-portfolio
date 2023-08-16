import { toast } from "sonner";

export const IconClipboard = ({ icon: Icon, text, ...props }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(text.contact);
    toast.success(
      `${text.type}: ${text.contact} has been copied to your clipboard.`
    );
  };

  return (
    <div
      className="cursor-pointer text-zinc-400 transition hover:text-white"
      {...props}
    >
      <Icon onClick={handleClick} size={32} />
    </div>
  );
};
