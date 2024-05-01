'use client'
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ModeToggle } from "@/providers/mode-toggle";
export default function NavBar() {
  return (
    <div className="text-[#242D4C] justify-between flex flex-row items-center">
      <div className="w-[250px] p-1 ">
        <AspectRatio ratio={1000 / 250}>
          <Image
            src={"/1.png"}
            fill
            alt="logo do site"
            className="rounded-md object-fill dark:hidden light-visible"
          />
          <Image
            src={"/2.png"}
            fill
            alt="logo do site"
            className="rounded-md object-fill invisible dark:visible"
          />
        </AspectRatio>
      </div>
      <div className="flex items-center gap-5  dark:text-white p-1">
      <a>SOBRE</a>
      <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
