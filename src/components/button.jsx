export default function Button({ text, img, onClick, fit = false }) {
  return (
    <button
      className={`cursor-pointer shadow-md hover:text-black hover:dark:text-white dark:shadow-white/20 hover:dark:bg-[#131934] hover:shadow-lg hover:bg-[#ace1f6] duration-250 transition-all border text-[20px] justify-center text-center flex items-center gap-2 h-20 px-7 rounded-[50px] ${
        fit ? "w-fit" : "min-w-48"
      }`}
      onClick={onClick}
    >
      {img}
      {text}
    </button>
  );
}
