import Link from "next/link";

type Props = {
  route: string;
  content: string;
};

export default function NavbarItem({ route, content }: Props) {
  return (
    <Link
      className="text-secondary-color font-bold border-[4px] border-solid border-secondary-color opacity-90 px-4 py-1 rounded-lg hover:bg-secondary-color hover:text-primary-color transition ease-in-out duration-300"
      href={route}
    >
      {content}
    </Link>
  );
}
