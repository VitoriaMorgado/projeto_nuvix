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
<<<<<<< HEAD
       {/* Navbar Inicio */}
          <div>
            <div className="sticky flex h-[60px] bg-black">
              <Menubar className="mt-2 w-full border-transparent bg-transparent">
                <MenubarMenu>
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      width={150}
                      height={100}
                      alt="Logo Nuvix"
                      className="hover:opacity-90 transition-opacity"
                    />
                  </Link>

                  <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8] hover:text-[#019EC2] transition-colors">
                    Destaques
                  </MenubarTrigger>
                  <MenubarContent className="bg-gray-900 border-black/20">
                    <Link href="/catalogo">
                      <MenubarItem className="hover:-[#0E304A]  text-[#F6F7F8]">Catalogo</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                    <Link href="/catalogo">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Jogos Em Destaque</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                    <Link href="/catalogo">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Novidades</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8] hover:text-[#019EC2] transition-colors">
                    Jogos
                  </MenubarTrigger>
                  <MenubarContent className="bg-[#02030a] border border-[#019EC2]/20">
                    <Link href="/catalogo">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Catalogo</MenubarItem>
                      <MenubarSeparator className="bg-[#019EC2]/30" />
                    </Link>
                    <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Destaque</MenubarItem>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8] hover:text-[#019EC2] transition-colors">
                    Assinatura
                  </MenubarTrigger>
                  <MenubarContent className="bg-[#02030a] border border-[#019EC2]/20">
                    <Link href="/planos">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Nuvix Plus</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                    <Link href="/planos">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Pacote Essencial</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[110px] text-xl font-bold text-[#F6F7F8] hover:text-[#019EC2] transition-colors">
                    <div className="flex">
                      <CircleUser className="me-2 mt-0.5 text-[#019EC2]" />
                      <p>Conta</p>
                    </div>
                  </MenubarTrigger>
                  <MenubarContent className="bg-[#02030a] border border-[#019EC2]/20">
                    <Link href="/cadastro2">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Cadastre-se</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                    <Link href="/login2">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Login</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <div className="flex bg-[#0E304A]/40 rounded-l-full px-3 mr-2 my-2">
                <Search className="mx-2 mt-4 text-[#019EC2]" />
                <input
                  type="text"
                  className="bg-transparent text-xl text-[#F6F7F8] placeholder-[#F6F7F8]/70 focus:outline-none"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          {/* Navbar Fim */}
=======
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
>>>>>>> b12b1d0fdc21658cc2b2935be9fa32f7449b5217
    </>
  );
};

export default NavBarp;
