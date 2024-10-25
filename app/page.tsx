"use client";

import Image from "next/image";
import banner from "@/public/banner8.jpg";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="flex-column h-screen w-screen justify-center bg-gradient-to-b from-blue-900 to-blue-950">
        {/* BANNER COMEÇO */}

        <div className="">
          <div>
            {/* FUNDO BANNER COMEÇO */}
            <Image
              className="absolute"
              src={banner}
              width={1920}
              height={500}
              alt="banner"
            />

            {/* FUNDO BANNER FIM */}

            {/* MENU COMEÇO */}

            <div className="sticky flex">
              <Menubar className="border-transparent bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-sky-100">
                    File
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-sky-100">
                    File
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-sky-100">
                    File
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-sky-100">
                    File
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <div className="flex">
                <Search className="m-2 text-white" />
                <input
                  type="text"
                  className="border-transparent bg-transparent text-white"
                  placeholder="Search"
                />
              </div>

              {/* MENU FIM */}
            </div>

            {/* ESCRITAS DO BANNER COMEÇO */}

            <div className="fixed h-[900px] w-screen justify-items-center">
              <div className="h-[800px] w-[1700px] content-center">
                <div>
                  <p className="m-4 mx-4 text-3xl text-sky-100">
                    O melhor serviço de jogos na nuvem
                  </p>
                  <h1 className="m-4 text-7xl font-bold text-sky-100">
                    Cloud Game
                  </h1>
                  <p className="m-4 mx-4 w-[500px] text-justify text-xl text-sky-100">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam, temporibus. Eos doloribus nisi, atque alias blanditiis
                    recusandae delectus magni aut beatae. Doloribus, quo ad nisi
                    soluta error esse beatae placeat!
                  </p>
                  <div className="mx-[140px]">
                    <button className="h-[55px] w-[230px] rounded-full bg-blue-700 text-3xl text-sky-100">
                      Jogue agora
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ESCRITAS DO BANNER FINAL */}

            {/* BANNER FINAL */}
          </div>
        </div>

        <div className="h-[900px] w-screen justify-items-center bg-slate-400">
          <div className="sticky bg-white">
            <h1>Explorar por categorias</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
