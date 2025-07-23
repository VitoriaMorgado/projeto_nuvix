
import React from 'react';

interface FormTypes {
    email: string;
    isLoading: boolean;
    onsubmit: (event: React.FormEvent) => void;
    emailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({email, onsubmit, emailChange, isLoading}: FormTypes) => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-black">
            <div className="flex-grow">
                <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-[#02030a] to-[#0E304A]">
                    <div className="container mx-auto flex items-center justify-center px-6 py-16">
                        <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
                            {/* Imagem lateral */}
                            <div className="relative hidden lg:block lg:w-1/2">
                                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000]/80 to-transparent"></div>
                                <div className="bg-gradient-to-b from-[#0E304A] to-[#02030a]"></div>
                                <div className="absolute inset-0 z-20 flex flex-col items-start justify-center p-12">
                                    <h2 className="mb-6 bg-gradient-to-r from-[#F6F7F8] to-[#198097] bg-clip-text text-5xl font-bold text-transparent">
                                        Nuvix
                                    </h2>
                                    <p className="mb-4 text-xl text-[#F6F7F8]">
                                        Informe seu e-mail para recuperar sua senha.
                                    </p>
                                    <p className="text-lg text-[#F6F7F8]/90">
                                        Enviaremos instruções para o e-mail cadastrado.
                                    </p>
                                </div>
                            </div>
                            {/* Formulário de recuperação de senha */}
                            <div className="w-full bg-[#020913] p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
                                <div className="mb-8 text-center">
                                    <h3 className="mb-2 text-4xl font-bold text-white">
                                        Recuperar <span className="text-[#019EC2]">Senha</span>
                                    </h3>
                                  
                                    <form className="space-y-6 mt-2" onSubmit={onsubmit}>
                                        <div>
                                            <label className=" flex items-center justify-between text-sm font-medium text-[#F6F7F8] mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full rounded-lg border border-[#198097]/30 bg-[#0A1622] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
                                                onChange={emailChange}
                                                value={email}
                                                placeholder="Seu email"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="submit"
                                                src='/recuperar_senha'
                                                className="w-full rounded-br-3xl rounded-tl-3xl bg-[#019EC2] py-3 text-lg font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097] cursor-pointer"
                                                value={isLoading ? 'Enviando...' : 'Enviar'}
                                                disabled={isLoading}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-8 text-center">
                                    <p className="text-[#F6F7F8]">
                                        Lembrou sua senha?{' '}
                                        <a
                                            href="/login"
                                            className="font-medium text-[#019EC2] hover:text-[#198097]"
                                        >
                                            Entrar
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
