import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex">
        <div className="flex flex-col items-center w-1/2">
          <h2 className="text-4xl font-semibold">About Me</h2>
          <p className="mt-div w-[80%]">
            My journey into the realm of software development began at an
            unexpected crossroad. I studied Business Administration at George
            Brown College in Toronto before deciding to step into the field of
            computer science. I was first introduced to Python on YouTube, after
            my father asked me if I knew what it took to create a website for
            his business. After my initial exposure to code, I learned about
            JavaScript and its capabilities. I spent over a year studying the
            language, along with the many frameworks and libraries in its
            ecosystem. I&apos;ve achieved this goal through many tutorials,
            courses, and projects. After countless months of head-scratching and
            keyboard smashing, I finally got to build a website for my father's
            business in Next.js, along with starting my own digital marketing
            agency with a couple of friends. My passion for creativity and
            building has brought me far as I continue to learn new technologies
            in this constantly improving industry.
          </p>
        </div>
        <div className="flex justify-center w-1/2">
          <Image
            src="/assets/toronto.jpg"
            alt=""
            width={800}
            height={400}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
