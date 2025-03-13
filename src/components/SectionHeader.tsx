export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase md:text-lg font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-2xl md:text-4xl font-semibold text-center mt-4 mb-6 text-white">
        {title}
      </h2>
      <p className="text-center md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </>
  );
};
