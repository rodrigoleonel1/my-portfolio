export const Pill = ({ skill }) => {
  return (
    <div
      key={skill.name}
      className="flex items-center justify-between rounded-xl border px-4 py-2 text-sm font-semibold text-white border-neutral-800 bg-[#161617] hover:bg-[#202021]"
    >
      <img
        className={`${skill?.invert ? "invert" : ""} h-8 w-8 rounded-md`}
        src={skill.src}
        alt={skill.name}
      />
      <span className="font-semibold">{skill.name}</span>
    </div>
  );
};
