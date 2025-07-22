// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { fetchLogin } from "../services/login/get";

// export default function Login() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });

//   const [loginStatus, setLoginStatus] = useState({
//     success: false,
//     message: "",
//     isError: false
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });

//     // Limpar mensagens de status ao alterar os campos
//     if (loginStatus.message) {
//       setLoginStatus({ success: false, message: "", isError: false });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Exemplo de chamada ao fetchLogin, ajuste conforme necessário
//     try {
//       await fetchLogin(formData.email, formData.password);
//       router.push("/jogo");
//     } catch (error) {
//       setLoginStatus({ success: false, message: "Erro ao fazer login.", isError: true });
//     }
//   };

//   // Função para preencher automaticamente com credenciais de demonstração
//   const handleDemoCredentials = () => {
//     setFormData({
//       email: "demo@nuvix.com",
//       password: "demopassword",
//       rememberMe: false,
//     });
//   };

//   return (
//     <div className="flex min-h-screen w-full flex-col bg-black">
//       {/* Navbar */}

//       <div className="flex-grow">
//         {/* Container para conteúdo da página */}
//         <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] min-h-[calc(100vh-64px)]">
//           <div className="container mx-auto flex items-center justify-center px-6 py-16">
//             <div className="flex w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
//               {/* Imagem lateral */}
//               <div className="hidden lg:block lg:w-1/2 relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 to-transparent z-10"></div>
//                 <div className="bg-gradient-to-b from-[#0E304A] to-[#02030a]"></div>
//                 <div className="absolute inset-0 flex flex-col justify-center items-start p-12 z-20">
//                   <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F6F7F8] to-[#198097]">
//                     Nuvix
//                   </h2>
//                   <p className="text-[#F6F7F8] text-xl mb-4">
//                     Acesse sua conta para jogar seus títulos favoritos na nuvem.
//                   </p>
//                   <p className="text-[#F6F7F8]/90 text-lg">
//                     Jogue em qualquer dispositivo, a qualquer hora e em qualquer lugar.
//                   </p>
//                 </div>
//               </div>

//               {/* Formulário de login */}
//               <div className="w-full lg:w-1/2 bg-[#020913] p-8 md:p-12">
//                 <div className="mb-8 text-center">
//                   <h3 className="text-4xl font-bold text-white mb-2">Bem-vindo de volta</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-[#F6F7F8] mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg bg-[#0A1622] border border-[#198097]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
//                     placeholder="Seu email"
//                   />
//                 </div>

//                 <div>
//                   <div className="flex items-center justify-between mb-2">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-[#F6F7F8]"
//                     >
//                       Senha
//                     </label>
//                     <Link
//                       href="/recuperar-senha"
//                       className="text-sm text-[#019EC2] hover:text-[#198097]"
//                     >
//                       Esqueceu a senha?
//                     </Link>
//                   </div>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg bg-[#0A1622] border border-[#198097]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
//                     placeholder="Sua senha"
//                   />
//                 </div>

//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="rememberMe"
//                     name="rememberMe"
//                     checked={formData.rememberMe}
//                     onChange={handleChange}
//                     className="h-4 w-4 rounded border-[#198097] text-[#019EC2] focus:ring-[#019EC2]"
//                   />
//                   <label
//                     htmlFor="rememberMe"
//                     className="ml-2 block text-sm text-[#F6F7F8]"
//                   >
//                     Lembrar de mim
//                   </label>
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full rounded-br-3xl rounded-tl-3xl bg-[#019EC2] py-3 text-lg font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors"
//                   >
//                     Entrar
//                   </button>
//                 </div>
//               </form>

//                       Entrar
//                 <div className="mt-4 text-center">
//                   <button
//                     onClick={handleDemoCredentials}
//                     className="text-xs text-[#019EC2] hover:text-[#198097]"
//                   >
//                     Usar credenciais de demonstração
//                   </button>
//                 </div>

//                     Usar credenciais de demonstração
//                   </button>
//                 </div>

//                 <div className="mt-8 text-center">
//                   <p className="text-[#F6F7F8]">
//                     Não tem uma conta?{" "}
//                     <Link
//                       href="/cadastro"
//                       className="font-medium text-[#019EC2] hover:text-[#198097]"
//                     >
//                       Cadastre-se
//                     </Link>
//                   </p>
//                 </div>

//                 <div className="mt-8">
//                   <div className="flex items-center">
//                     <div className="flex-grow border-t border-gray-600"></div>
//                     <span className="mx-4 text-sm text-gray-400">ou continue com</span>
//                     <div className="flex-grow border-t border-gray-600"></div>
//                   </div>

//                   <div className="mt-6 w-[50%] mx-auto rounded-2xl shadow-lg dark:bg-zinc-900 flex justify-center">
//                     <button className="flex items-center justify-center gap-2 rounded-xl border border-[#198097]/30 bg-[#0A1622] px-4 py-2 transition-all duration-300 hover:bg-[#0E304A]/60 hover:shadow-md">
//                       <svg className="h-5 w-5" viewBox="0 0 24 24">
//                         <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
//                         <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
//                         <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
//                         <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//   );
