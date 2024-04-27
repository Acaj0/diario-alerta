"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
export default function Home() {
  return (
    <div className="mx-96">
      <div className="border mt-1 rounded-sm">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col border rounded-sm mt-1 h-[650px] items-center pt-10">
        <h1 className="font-medium text-2xl text-[#242D4C]">
          O Diário Alerta Mantém Você Informado!
        </h1>
        <div className="flex flex-row mx-96 items-center text-[#242D4C]">
          <div className="flex">
            <h3 className="text-center">
              Fique Tranquilo e Sempre Receba Notificações no E-Mail sobre Citações de seu CPF ou CNPJ no Diário Oficial da União
            </h3>
          </div>
          <div className="w-[450px]">
            <AspectRatio ratio={16 / 12}>
              <Image
                src={"/email.png"}
                fill
                alt="pessoa"
                className="rounded-md object-fill"
              />
            </AspectRatio>
          </div>
        </div>
        <a className="rounded-lg p-2 bg-[#FFBD59]">Monitore Agora!</a>
      </div>
    </div>
  );
}
