export const Title = ({ name, id }) => {
  return (
    <h2 id={id} className="text-4xl font-bold border-b border-zinc-400 pb-4">
      {name}
    </h2>
  );
};
