import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Scalable",
  "Secure",
  "Robust",
  "Efficient",
  "Maintainable",
  "Modular",
  "Reliable",
  "Optimized",
  "Flexible",
  "Testable",
  "Documented",
];

export const TapeSection = () => {
  return (
    <div className="py-14 lg:py-20 overflow-x-clip relative">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 transform -skew-y-3 -mx-1 relative">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-bold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};