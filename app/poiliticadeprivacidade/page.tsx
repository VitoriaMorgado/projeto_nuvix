import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen mt-[4%] bg-gradient-to-b from-[#000000] to-[#1E293B]">
      {/* Hero Banner */}
      <div className="mb-8 bg-gradient-to-r from-black/80 via-black/50 to-transparent py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl md:text-6xl lg:text-7xl font-bold text-[#F6F7F8]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
              Política de Privacidade
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg lg:text-xl text-[#F6F7F8]/90">
            Transparência e proteção dos seus dados pessoais
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="mx-auto max-w-4xl rounded-lg bg-black/30 p-8 border border-[#019EC2]/20">
          {/* Educational Notice */}
          <div className="mb-8 rounded-lg bg-[#019EC2]/10 border border-[#019EC2]/30 p-6">
            <h2 className="mb-4 text-2xl font-bold text-[#019EC2]">
              ⚠️ AVISO EDUCACIONAL
            </h2>
            <p className="text-lg text-[#F6F7F8]/90">
              <strong>Este é um projeto educacional sem fins lucrativos.</strong> 
              Todas as informações, produtos e serviços apresentados neste site são 
              fictícios e destinados exclusivamente para fins de aprendizado e 
              demonstração de tecnologias web.
            </p>
          </div>

          <div className="space-y-6">
            <div className="mb-6">
              <p className="text-lg font-bold text-[#F6F7F8]">
                <strong>Data efetiva: 29 de outubro de 2024</strong>
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-[#F6F7F8]/90">
                A Nuvix valoriza a privacidade de todos os usuários que visitam nossos
                sites, utilizam nossos aplicativos ou acessam nossos serviços.
              </p>

              <p className="text-lg text-[#F6F7F8]/90">
                Esta Política de Privacidade explica como coletamos, armazenamos e
                utilizamos suas informações pessoais, e os direitos que você possui
                sobre seus dados.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                1. Coleta de Informações
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Coletamos informações pessoais quando você se registra em nossos
                serviços, utiliza nossas funcionalidades ou nos contata. Isso pode
                incluir seu nome, e-mail, informações de pagamento, endereço e outros
                dados relevantes.
              </p>
              <p className="text-lg text-[#F6F7F8]/90">
                Também podemos coletar informações sobre suas interações com nossos
                serviços, como endereço IP, tipo de navegador, páginas acessadas e
                horários de acesso.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                2. Uso de Cookies
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua
                experiência, analisando o uso de nossos serviços e apresentando
                publicidade relevante. Você pode ajustar as configurações do seu
                navegador para recusar cookies, mas isso pode afetar a funcionalidade
                dos nossos serviços.
              </p>
              <p className="text-lg text-[#F6F7F8]/90">
                Os cookies nos ajudam a lembrar suas preferências e a personalizar sua
                experiência em nosso site.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                3. Compartilhamento de Dados
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Suas informações podem ser acessadas por terceiros, como fornecedores
                de serviços, para operar e melhorar nossos serviços. Não vendemos suas
                informações pessoais a terceiros.
              </p>
              <p className="text-lg text-[#F6F7F8]/90">
                Podemos compartilhar suas informações com parceiros comerciais para
                oferecer serviços adicionais, mas sempre com seu consentimento.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                4. Seus Direitos
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de
                suas informações pessoais. Se você desejar exercer esses direitos,
                entre em contato conosco.
              </p>
              <p className="text-lg text-[#F6F7F8]/90">
                Também temos o compromisso de notificá-lo em caso de quaisquer
                alterações significativas na forma como suas informações são tratadas.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                5. Segurança
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Implementamos medidas de segurança para proteger suas informações
                pessoais contra acesso não autorizado. No entanto, nenhuma transmissão
                de dados pela internet é completamente segura.
              </p>
              <p className="text-lg text-[#F6F7F8]/90">
                Realizamos revisões periódicas de nossos procedimentos de segurança
                para garantir a proteção de seus dados.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                6. Limitações de Idade
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Nossos serviços não são destinados a crianças menores de 13 anos. Se
                tivermos conhecimento de que coletamos informações de uma criança,
                tomaremos medidas para remover esses dados.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-[#F6F7F8]/90">
                Para mais informações sobre sua privacidade ou para apresentar uma
                reclamação, entre em contato conosco através dos dados fornecidos em
                nossa seção de contato.
              </p>
            </div>

            <div className="mt-12 border-t border-[#019EC2]/30 pt-8 text-right">
              <p className="text-2xl font-bold text-[#019EC2]">NUVIX</p>
              <p className="text-lg text-[#F6F7F8]/70">
                Última atualização: 04 de julho de 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;