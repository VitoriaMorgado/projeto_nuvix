"use client";

import { Menubar, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@/components/ui/menubar";
import { MenubarMenu } from "@radix-ui/react-menubar";
import Link from "next/link";
import Image from "next/image";
import React from "react"; 
import { CircleUser, Search } from "lucide-react";

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black min-h-screen w-full flex flex-col">
      {/* Navbar */}
      <div className="bg-black min-h-screen w-full flex flex-col">
        {/* //========NAVBAR========// */}
      </div>
      <div className="sticky top-0 z-50 w-full">
        <div className="flex h-[60px] bg-black items-center">
          <Menubar className="w-full border-transparent bg-transparent">
            <MenubarMenu>
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={150}
                  height={100}
                  alt="imagem do mine"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </Link>
              <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8] hidden md:flex">
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
              <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8] hidden md:flex">
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
                <button onClick={() => scrollToSection("plano")}>
                  <MenubarItem>Nuvix Plus</MenubarItem>
                </button>
                <MenubarSeparator />
                <button onClick={() => scrollToSection("plano")}>
                  <MenubarItem>Plano Essencial</MenubarItem>
                </button>
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
                <div className="flex items-center">
                  <CircleUser className="mr-2" />
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
          <div className="flex items-center mr-4">
            <Search className="text-white mr-2" />
            <input
              type="text"
              className="bg-transparent text-white w-24 md:w-auto"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;