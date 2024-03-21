import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

type Props = {
  img: string;
  alt: string;
  name: string;
  description: string;
  github: string;
  href: string;
};

export default function ProjectItems({
  img,
  alt,
  description,
  name,
  href,
  github,
}: Props) {
  return (
    <div className="flex relative bg-black shadow-xl border-secondary-color">
      <div className="w-1/2 border-r-2 border-secondary-color">
        <Image src={img} alt={alt} width={500} height={500} />
      </div>
      <div className="flex flex-col w-1/2 py-2 px-3 gap-5">
        <h3 className="font-semibold text-2xl">{name}</h3>
        <p>{description}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Link target="_blank" href={github}>
          <FaGithub />
        </Link>
        <Link target="_blank" href={href}>
          <IoGlobeOutline />
        </Link>
      </div>
    </div>
  );
}
