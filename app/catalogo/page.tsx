import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUser, Search } from "lucide-react";
import Link from "next/link";
import CataUsa from "./cataloguin";

const CatalogoNovo = () => {
  return (
    <>
      <div className="h-full w-full bg-[#0E304A] p-0 text-3xl font-bold text-white shadow-2xl">
        <div>
          {/* MENUBAR INICIO */}
          <div className="sticky flex h-[60px] bg-black">
            <Menubar className="mt-2 w-full border-transparent bg-transparent">
              <MenubarMenu>
                <Image
                  src="/logo.png"
                  width={150}
                  height={100}
                  alt="imagem do mine"
                />
                <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8]">
                  Destaques
                </MenubarTrigger>
                <MenubarContent>
                  <Link href="/catalogo">
                    <MenubarItem>Catalogo</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href="/catalogo">
                    <MenubarItem>Jogos Em Destaque</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href="/catalogo">
                    <MenubarItem>Novidades</MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8]">
                  Jogos
                </MenubarTrigger>
                <MenubarContent>
                  <Link href="/catalogo">
                    <MenubarItem>Catalogo</MenubarItem>
                    <MenubarSeparator />
                  </Link>
                  <Link href="/catalogo">
                    <MenubarItem>Destaque</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8]">
                  Assinatura
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Nuvix Plus</MenubarItem>

                  <MenubarSeparator />

                  <MenubarItem>Plano Essencial</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="h-[30px] w-[150px] justify-center text-xl font-bold text-[#F6F7F8]">
                  Fale conosco
                </MenubarTrigger>
                <MenubarContent>
                  <Link href="cadastro">
                    <MenubarItem>Sobre Nós</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href="login2">
                    <MenubarItem>Nos Contate</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="h-[30px] w-[110px] text-xl font-bold text-[#F6F7F8]">
                  <div className="flex">
                    <CircleUser className="me-2 mt-0.5" />
                    <p>Conta</p>
                  </div>
                </MenubarTrigger>
                <MenubarContent>
                  <Link href="/cadastro2">
                    <MenubarItem>Cadastre-se</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href="/login2">
                    <MenubarItem>Login</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <div className="flex">
              <Search className="mx-2 mt-4 text-white" />
              <input
                type="text"
                className="bg-transparent text-xl text-white"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        {/* MENUBAR FIM */}
        <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
          <h1 className="py-4 pl-4 text-white">Catálogo de Jogos</h1>
        </div>
        <div>
          <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
            <p className="text-4xl text-white">Ação</p>
          </div>
          <CataUsa />
        </div>
        <div>
          <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
            <p className="text-4xl text-white">Simulação</p>
          </div>
          <CataUsa />
        </div>
        <div>
          <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
            <p className="text-4xl text-white">Terror</p>
          </div>
          <CataUsa />
        </div>
      </div>
    </>
  );
};

export default CatalogoNovo;
