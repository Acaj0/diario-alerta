"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
export default function Home() {
  return (
    <div className="xl:mx-96">
      <div className="border mt-1 rounded-sm ">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col border rounded-sm mt-1 md:h-[650px] items-center pt-10">
        <h1 className="font-medium text-2xl text-center dark:text-white text-[#242D4C]">
          O Diário Alerta Mantém Você Informado!
        </h1>
        <div className="flex flex-row mx-10 md:mx-44 lg:mx-96 items-center  dark:text-white text-[#242D4C] p-1">
          <div className="flex">
            <h3 className="text-center">
              Fique Tranquilo e Sempre Receba Notificações no E-Mail sobre
              Citações de seu CPF ou CNPJ no Diário Oficial da União
            </h3>
          </div> 
          <div className="w-fit lg:w-[450px]">
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
          <form className="flex flex-col gap-2 my-5">
          <input
          name="Nome"
          type="text"
          id="nome"
          required
          placeholder="Nome"
          className="w-42 border rounded-sm p-2"
          />
          <input
          name="CPF/CNPJ"
          type="text"
          id="cpf"
          required
          placeholder="CPF/CNPJ"
          className="w-42 border rounded-sm p-2"
          />
          <input
          name="Email"
          type="text"
          id="email"
          required
          placeholder="Email"
          className="w-42 border rounded-sm p-2"
          />
          <button className="border p-1 dark:text-black bg-[#FFBD59] hover:text-white hover:bg-[#0E7201]">
            <span>Enviar dados</span>
          </button>
          </form>
      </div>
    </div>
  );
}
