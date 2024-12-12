import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
import ElahiyaImg from "@/public/images/elahiya.png";

import { LogoProps } from "./LogoProps";

export function Logo({ size = "small" }: LogoProps) {
  return (
    <div className="flex flex-col p-4">
      <Image
        className="mx-auto rounded-full"
        src={LogoImg}
        alt="logo"
        width={128}
        height={128}
        priority
      />
      {size === "medium" && (
        <Image
          className="mx-auto my-4"
          src={ElahiyaImg}
          alt="logo"
          width={350}
          height={171}
          priority
        />
      )}
    </div>
  );
}
