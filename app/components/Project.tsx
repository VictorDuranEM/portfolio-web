import Link from "next/link";

type ProjectProps = {
  githubUrl?: string;
  liveUrl?: string;
  bgColor: string;
};

export default function Project({
  githubUrl = "", 
  liveUrl = "", 
  bgColor 
}: ProjectProps) {
  return (
    <div className={`w-[300px] aspect-square flex flex-col justify-center items-center gap-6 ${bgColor}`}>
      <Link href={githubUrl}>GitHub</Link>
      <Link href={liveUrl}>Live</Link>
    </div>
  );
}