import Rodape from "@/components/ui/rodape";
import TermsCheckbox from "@/components/ui/terms";

const Privacy = () => {
  return (
    <>
      <div className="m-0 flex h-screen w-screen flex-col bg-gradient-to-b from-[#0E304A] to-[#154B74] p-0">
        <div className="bg-[#0E304A] p-6 text-3xl font-bold text-white shadow-2xl">
          Termos de uso
        </div>
        <div className="relative mx-auto mb-6 mt-6 max-w-4xl bg-white p-5 text-xs shadow-md">
          <div className="absolute inset-x-0 top-0 h-1 bg-yellow-200"></div>
          <h1 className="mb-8 ml-5 mt-8 text-2xl">Termos de uso</h1>

          <p className="mb-2 ml-4 mr-4 mt-4">
            1. Aceitação dos Termos Ao acessar ou usar nosso serviço de jogos na
            nuvem, você concorda em estar vinculado a estes Termos de Serviço e
            a nossa Política de Privacidade. Se você não concorda com algum dos
            termos aqui descritos, não utilize nosso serviço.
          </p>

          <p className="mb-2 ml-4 mr-4 mt-4">
            2. Definições Serviço: Refere-se à plataforma de jogos na nuvem que
            oferece acesso a jogos via streaming. Usuário: Qualquer pessoa que
            acesse ou utilize o Serviço.
          </p>

          <ul className="mb-2 ml-5 mr-4 mt-4">
            <p className="mb-2 ml-4 mr-4 mt-4"> 3. Uso do Serviço </p>
            <li>
              3.1 Elegibilidade: Você deve ter pelo menos 13 anos para usar
              nosso Serviço. Se você tiver menos de 18 anos deve ter a permissão
              de um responsável.
            </li>
            <li>
              3.2 Conta: Para acessar determinadas funcionalidades, você deve
              criar uma conta. Você é responsável por manter a confidencialidade
              da sua senha e por todas as atividades que ocorrem em sua conta.
            </li>
            <li>
              3.3 Proibições: É proibido usar o Serviço para: Violar qualquer
              legislação aplicável. Realizar atividades fraudulentas ou
              enganosas. Distribuir malware ou qualquer outro software
              malicioso. Interferir na segurança do Serviço ou nos servidores.
            </li>
          </ul>
          <ul className="mb-2 ml-4 mr-4 mt-4">
            <p className="mb-2 ml-4 mr-4 mt-4">4. Conteúdo:</p>
            <li>
              4.1 Licença de Uso: Ao utilizar nosso Serviço, você recebe uma
              licença limitada, não exclusiva e intransferível para acessar e
              usar os jogos disponíveis.
            </li>
            <li>
              4.2 Responsabilidade pelo Conteúdo: Você é responsável por todo o
              conteúdo que criar, carregar ou compartilhar através do Serviço.
              Não nos responsabilizamos por qualquer conteúdo gerado pelo
              usuário.
            </li>
          </ul>
          <p className="mb-2 ml-4 mr-4 mt-4">
            5. Propriedade Intelectual Todo o conteúdo, incluindo, mas não se
            limitando a, software, gráficos e jogos, é protegido por leis de
            propriedade intelectual. Você concorda em não reproduzir, modificar
            ou distribuir qualquer conteúdo sem nossa autorização.
          </p>
          <ul className="mb-2 ml-4 mr-4 mt-4">
            <p className="mb-2 ml-4 mr-4 mt-4">6. Termos de Pagamento</p>
            <ul>
              6.1 Assinaturas e Pagamentos: O uso do Serviço pode requerer uma
              assinatura paga. Você concorda em fornecer informações de
              pagamento precisas e atualizadas.
            </ul>
            <li>
              6.2 Cancelamento: Você pode cancelar sua assinatura a qualquer
              momento. As taxas pagas não são reembolsáveis.
            </li>
          </ul>
          <p className="mb-2 ml-4 mr-4 mt-4">
            7. Limitação de Responsabilidade Na máxima extensão permitida por
            lei, não nos responsabilizamos por quaisquer danos indiretos,
            incidentais, especiais ou consequenciais que possam resultar do uso
            ou da incapacidade de uso do Serviço.
          </p>
          <p className="mb-2 ml-4 mr-4 mt-4">
            8. Modificações Reservamo-nos o direito de modificar estes Termos de
            Serviço a qualquer momento. Notificaremos os usuários sobre
            alterações significativas. O uso contínuo do Serviço após tais
            modificações constitui aceitação dos novos termos.
          </p>

          <div className="flex justify-center">
            <TermsCheckbox />
          </div>
        </div>
        <div className="mt-9 w-full p-0">
          <Rodape />
        </div>
      </div>
    </>
  );
};

export default Privacy;