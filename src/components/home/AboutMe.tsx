"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="my-64 flex flex-col justify-center">
      <h2 className="self-center text-3xl font-semibold sm:text-4xl">
        About <span className="text-secondary-color">Me</span>
      </h2>
      <div className="mt-content flex flex-col-reverse xl:flex-row xl:items-center">
        <div className="flex flex-col items-start justify-center xl:w-1/2">
          <p className="mx-auto mt-content max-w-[600px] text-lg">
            My journey into the realm of software development began at an
            unexpected crossroad. I studied Business Administration at George
            Brown College in Toronto before deciding to step into the field of
            computer science. I was first introduced to Python on YouTube, after
            my father asked me if I knew what it took to create a website for
            his business. After my initial exposure to code, I learned about
            JavaScript and its capabilities. I spent over a year studying the
            language, along with the many frameworks and libraries in its
            ecosystem. I&apos;ve achieved this goal through many tutorials,
            courses, and projects.
          </p>
          <p className="mx-auto mt-content max-w-[600px] text-lg">
            After countless months of head-scratching and keyboard smashing, I
            finally got to build a website for my father&apos;s business in
            Next.js, along with starting my own digital marketing agency with a
            couple of friends. My passion for creativity and building has
            brought me far as I continue to learn new technologies in this
            constantly improving industry.
          </p>
        </div>
        <div className="flex justify-center xl:w-1/2 xl:justify-end">
          <Image
            className="rounded-xl object-cover object-left md:h-[600px] md:w-[600px]"
            src="/assets/code-screen.jpg"
            alt="Shayan Abedi selfie"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}
