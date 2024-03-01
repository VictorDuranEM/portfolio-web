import Link from "next/link";

export default function Project({ githubUrl, liveUrl }: { githubUrl: string, liveUrl: string }) {
  return (
    <div className="aspect-square bg-gray-200 flex flex-col justify-center items-center gap-6">
      <Link href={githubUrl}>GitHub</Link>
      <Link href={liveUrl}>Live</Link>
    </div>
  );
}