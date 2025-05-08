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
import CataUsa from "../catalogo/cataloguin";

const Favorito = () => {
  return (
    <>
      <div className="m-0 h-[1100px] w-full flex-col justify-center bg-gradient-to-b from-[#0a2235] to-[#154B74] p-0">
        <div>
          {/* MENUBAR INICIO */}
          <div className="sticky flex h-[60px] bg-black">
            <Menubar className="mt-2 w-full border-transparent bg-transparent">
              <MenubarMenu>
                <Image
                  src="/logo_nuvix.png"
                  width={150}
                  height={100}
                  alt="logo"
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

        <div className="my-5 ml-[60px]">
          <div className="flex">
            <p className="text-4xl text-white">Favoritos</p>
            <div className="ml-3 mt-2 h-[3px] w-[1000px] self-center bg-gradient-to-r from-[#c8d3f5] to-[#0a2235]"></div>
          </div>
        </div>

        <div className="my-3 ml-[60px] flex">
          <p className="text-xl text-white">Ordenar por:</p>
          <select className="ml-2 rounded bg-[#019EC2] p-1 text-center font-bold text-white">
            <option value="a-z">A-Z</option>
            <option value="data">Data de adição</option>
          </select>
        </div>

        <div className="mb-10 h-[900px] w-[1800px] justify-self-center bg-[#000101b4]">
          <CataUsa />
        </div>
      </div>
    </>
  );
};

export default Favorito;
