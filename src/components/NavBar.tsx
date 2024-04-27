import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export default function NavBar() {
  return (
    <div className="text-[#242D4C] justify-between flex flex-row items-center">
      <div className="w-[250px] p-1 ">
        <AspectRatio ratio={1000 / 250}>
          <Image
            src={"/1.png"}
            fill
            alt="logo do site"
            className="rounded-md object-fill"
          />
        </AspectRatio>
      </div>
      <a className="px-4 font-medium">SOBRE</a>
    </div>
  );
}
