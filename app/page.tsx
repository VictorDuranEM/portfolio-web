import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="px-16 pt-16 text-center lg:pt-24">
      <section className="flex flex-col items-center gap-5 lg:flex-row-reverse lg:justify-center">
        <h1 className="text-2xl lg:text-3xl lg:text-left">Hi, I'm Victor Duran, 
          <span className="block"> a <span className="underline">FullStack</span> Software Developer</span>
        </h1>
        <Image
          src="/picture.png"
          width="290"
          height="290"
          alt="Picture of Victor"
          className="rounded-full"
        />
      </section>
      <section className="mt-12 flex flex-col items-center gap-4 lg:mt-24">
        <h2 className="text-2xl lg:text-3xl">Technologies</h2>
        <p className="lg:text-xl">These are some of the technologies I work with:</p>
        <div className="text-left lg:flex lg:gap-16 lg:text-xl">
          <ol>
            <li>Java</li>
            <li>Spring Framework</li>
            <li>React</li>
            <li>NextJS</li>
          </ol>
          <ol>
            <li>AWS</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ol>
        </div>
      </section>
      <section className="mt-12 flex flex-col gap-6 lg:mt-24">
        <h2 className="text-2xl lg:text-3xl">Personal Projects</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,300px))] justify-center gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="aspect-square bg-gray-200 flex flex-col justify-center items-center gap-6">
              <Link href="/">GitHub</Link>
              <Link href="/">Live</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
