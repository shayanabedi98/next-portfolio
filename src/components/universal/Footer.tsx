import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const year = new Date().getFullYear()

  return (
    <div className="flex flex-col items-center text-center mx-auto justify-center gap-4 text-xs text py-16 border-t-[1px] border-secondary-color">
      {/* <Link href="/">home</Link>
            <Link href="/resume">resume</Link>
            <Link href="/contact">contact</Link> */}

      <Image src="/assets/logo.png" alt="" width={30} height={30} />

      <p>
        Copyright © {year} <span className="text-secondary-color">Shayan Abedi</span>,{" "}
        <Link
          href="https://pantheras.ca"
          target="_blank"
          className="font-semibold"
        >
          Pantheras Digital Marketing
        </Link>
      </p>
    </div>
  );
}
