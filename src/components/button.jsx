import { Link } from "wouter";

export default function Button({
  text,
  img,
  onClick,
  fit = false,
  isLink = false,
  href,
}) {
  return (
    <>
      {isLink ? (
        <Link
          href={href}
          className={`cursor-pointer shadow-md hover:text-black hover:dark:text-white dark:shadow-white/20 hover:dark:bg-[#131934] hover:shadow-lg hover:bg-[#ace1f6] duration-250 transition-all border min-[900px]:text-[20px] text-[14px] justify-center text-center flex items-center gap-2 min-[900px]:h-20 h-15 px-3 min-[900px]:px-7 rounded-[50px] ${
            fit ? " min-[900px]:min-w-48" : "min-[900px]:min-w-48"
          }`}
        >
          {img}
          {text}
        </Link>
      ) : (
        <button
          className={`cursor-pointer shadow-md hover:text-black hover:dark:text-white dark:shadow-white/20 hover:dark:bg-[#131934] hover:shadow-lg hover:bg-[#ace1f6] duration-250 transition-all border min-[900px]:text-[20px] text-[14px] justify-center text-center flex items-center gap-2 min-[900px]:h-20 h-15 px-3 min-[900px]:px-7 rounded-[50px] ${
            fit ? " min-[900px]:min-w-48" : "min-[900px]:min-w-48"
          }`}
          onClick={onClick}
        >
          {img}
          {text}
        </button>
      )}
    </>
  );
}
