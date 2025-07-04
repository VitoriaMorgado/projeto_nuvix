import React from "react";

// Componente TermsCheckbox simulado
const TermsCheckbox = () => {
  return (
    <div className="flex items-center justify-center space-x-3 mt-8">
      <input 
        type="checkbox" 
        id="terms-checkbox" 
        className="w-5 h-5 text-[#019EC2] bg-gray-100 border-gray-300 rounded focus:ring-[#019EC2] focus:ring-2"
      />
      <label htmlFor="terms-checkbox" className="text-lg font-medium text-[#F6F7F8]">
        Concordo com os Termos de Uso
      </label>
    </div>
  );
};

const Privacy = () => {
  return (
    <div className="min-h-screen mt-[4%] bg-gradient-to-b from-[#000000] to-[#1E293B]">
      {/* Hero Banner */}
      <div className="mb-8 bg-gradient-to-r from-black/80 via-black/50 to-transparent py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl md:text-6xl lg:text-7xl font-bold text-[#F6F7F8]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
              Termos de Uso
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg lg:text-xl text-[#F6F7F8]/90">
            Condições e diretrizes para uso da plataforma
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
                <strong>Data efetiva: 04 de julho de 2025</strong>
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-[#F6F7F8]/90">
                Ao acessar ou usar nosso serviço de jogos na nuvem, você concorda em estar 
                vinculado a estes Termos de Serviço e a nossa Política de Privacidade.
              </p>

              <p className="text-lg text-[#F6F7F8]/90">
                Se você não concorda com algum dos termos aqui descritos, não utilize nosso serviço.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                1. Aceitação dos Termos
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Ao acessar ou usar nosso serviço de jogos na nuvem, você concorda em estar 
                vinculado a estes Termos de Serviço e a nossa Política de Privacidade. Se você 
                não concorda com algum dos termos aqui descritos, não utilize nosso serviço.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                2. Definições
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                <strong>Serviço:</strong> Refere-se à plataforma de jogos na nuvem que oferece 
                acesso a jogos via streaming.
              </p>
              <p className="text-lg text-[#F6F7F8]/90">
                <strong>Usuário:</strong> Qualquer pessoa que acesse ou utilize o Serviço.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                3. Uso do Serviço
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-semibold text-[#019EC2]/80 mb-2">3.1 Elegibilidade</h4>
                  <p className="text-lg text-[#F6F7F8]/90">
                    Você deve ter pelo menos 13 anos para usar nosso Serviço. Se você tiver menos 
                    de 18 anos deve ter a permissão de um responsável.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#019EC2]/80 mb-2">3.2 Conta</h4>
                  <p className="text-lg text-[#F6F7F8]/90">
                    Para acessar determinadas funcionalidades, você deve criar uma conta. Você é 
                    responsável por manter a confidencialidade da sua senha e por todas as 
                    atividades que ocorrem em sua conta.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#019EC2]/80 mb-2">3.3 Proibições</h4>
                  <p className="text-lg text-[#F6F7F8]/90 mb-2">É proibido usar o Serviço para:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-lg text-[#F6F7F8]/90">
                    <li>Violar qualquer legislação aplicável</li>
                    <li>Realizar atividades fraudulentas ou enganosas</li>
                    <li>Distribuir malware ou qualquer outro software malicioso</li>
                    <li>Interferir na segurança do Serviço ou nos servidores</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                4. Conteúdo
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-semibold text-[#019EC2]/80 mb-2">4.1 Licença de Uso</h4>
                  <p className="text-lg text-[#F6F7F8]/90">
                    Ao utilizar nosso Serviço, você recebe uma licença limitada, não exclusiva e 
                    intransferível para acessar e usar os jogos disponíveis.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#019EC2]/80 mb-2">4.2 Responsabilidade pelo Conteúdo</h4>
                  <p className="text-lg text-[#F6F7F8]/90">
                    Você é responsável por todo o conteúdo que criar, carregar ou compartilhar 
                    através do Serviço. Não nos responsabilizamos por qualquer conteúdo gerado 
                    pelo usuário.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                5. Propriedade Intelectual
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Todo o conteúdo, incluindo, mas não se limitando a, software, gráficos e jogos, 
                é protegido por leis de propriedade intelectual. Você concorda em não reproduzir, 
                modificar ou distribuir qualquer conteúdo sem nossa autorização.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                6. Termos de Pagamento
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-semibold text-[#019EC2]/80 mb-2">6.1 Assinaturas e Pagamentos</h4>
                  <p className="text-lg text-[#F6F7F8]/90">
                    O uso do Serviço pode requerer uma assinatura paga. Você concorda em fornecer 
                    informações de pagamento precisas e atualizadas.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#019EC2]/80 mb-2">6.2 Cancelamento</h4>
                  <p className="text-lg text-[#F6F7F8]/90">
                    Você pode cancelar sua assinatura a qualquer momento. As taxas pagas não são 
                    reembolsáveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                7. Limitação de Responsabilidade
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Na máxima extensão permitida por lei, não nos responsabilizamos por quaisquer 
                danos indiretos, incidentais, especiais ou consequenciais que possam resultar do 
                uso ou da incapacidade de uso do Serviço.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#019EC2]">
                8. Modificações
              </h3>
              <p className="text-lg text-[#F6F7F8]/90">
                Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. 
                Notificaremos os usuários sobre alterações significativas. O uso contínuo do 
                Serviço após tais modificações constitui aceitação dos novos termos.
              </p>
            </div>

            {/* Checkbox de Concordância */}
            <div className="border-t border-[#019EC2]/30 pt-6">
              <TermsCheckbox />
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

export default Privacy;