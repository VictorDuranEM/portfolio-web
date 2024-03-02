import Image from "next/image";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="px-16 py-16 text-center lg:py-24">
      <section className="flex flex-col items-center gap-5 lg:flex-row-reverse lg:justify-center lg:gap-10">
        <h1 className="text-2xl lg:text-3xl lg:text-left">{"Hi, I'm Victor Duran, "}
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
            <li>Figma</li>
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
            <Project key={index} githubUrl={""} liveUrl={""}></Project>
          ))}
        </div>
      </section>
    </main>
  );
}
