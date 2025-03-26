
// Importação de bibliotecas
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUser, Link, Search } from "lucide-react";


{/* //========NAVBAR========// */}
<div className="m-0 h-full w-full flex-col justify-center p-0">
<div>
  <div className="sticky flex h-[60px] bg-black">
  <Menubar className="mt-2 w-full border-transparent bg-transparent">
      <MenubarMenu>
        <Link href="./index">
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
</div>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function scrollToSection(_arg0: string): void {
    throw new Error("Function not implemented.");
}

