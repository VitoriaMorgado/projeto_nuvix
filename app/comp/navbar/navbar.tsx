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
    </>
    );
}
 
export default NavBarp;