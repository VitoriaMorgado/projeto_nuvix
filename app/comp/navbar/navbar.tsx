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

const NavBarp = () => {
  return (
    <>
      {/* MENUBAR INICIO */}
      <div className="sticky flex h-[60px] bg-black">
        <Menubar className="mt-2 w-full border-transparent bg-transparent">
          <MenubarMenu>
            <Link href="/.">
              <Image
                src="/logo_nuvix.png"
                width={150}
                height={100}
                alt="imagem do mine"
              />
            </Link>
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
            <MenubarTrigger className="h-[30px] w-[150px] justify-center text-xl font-bold text-[#F6F7F8]">
              Fale conosco
            </MenubarTrigger>
            <MenubarContent>
              <Link href="saibamais">
                <MenubarItem>Sobre Nós</MenubarItem>
              </Link>
              <MenubarSeparator />
              <Link href="/">
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
              <Link href="/cadastro">
                <MenubarItem>Cadastre-se</MenubarItem>
              </Link>
              <MenubarSeparator />
              <Link href="/login">
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
      {/* MENUBAR FIM */}
    </>
  );
};

export default NavBarp;
