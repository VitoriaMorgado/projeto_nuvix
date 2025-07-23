import Link from "next/link";

        const Senhaver = () => {
           
        return (
            <div className="flex min-h-screen w-full flex-col bg-black">
                <div className="flex-grow">
                    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-[#02030a] to-[#0E304A]">
                        <div className="container mx-auto flex items-center justify-center px-6 py-16">
                            <div className="w-full max-w-md bg-[#020913] p-8 rounded-2xl shadow-2xl text-center">
                                <div className="mb-6">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                                        <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Conta <span className="text-[#019EC2]">Verificada</span>!
                                    </h3>
                                    <Link href={"/login"} className="text-[#019EC2] hover:text-[#198097]">
                                    <p className="text-[#F6F7F8]/80">
                                      Voltar para o <span className="text-[#019EC2]">Login</span>
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
         
        export default Senhaver;
        


    