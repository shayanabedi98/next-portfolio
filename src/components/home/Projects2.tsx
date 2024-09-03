import ProjectCarousel from "./ProjectCarousel";

export default function Projects2() {
  return (
    <div className="hidden mt-64 lg:flex flex-col justify-center">
      <h2 className="self-center text-3xl font-semibold sm:text-4xl">
        My <span className="text-secondary-color">Projects</span>
      </h2>
      <div className="mt-content flex items-center justify-center">
        <ProjectCarousel />
      </div>
    </div>
  );
}
