export const IconLink = ({ icon: Icon, ...props }) => {
  return (
    <a
      className="cursor-pointer text-zinc-400 transition hover:text-white"
      {...props}
    >
      <Icon size={32} />
    </a>
  );
};
