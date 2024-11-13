import React from "react";
import Rodape from "@/components/ui/rodape";

const PrivacyPolicy = () => {
  return (
    <div className="m-0 flex h-screen w-screen flex-col bg-gradient-to-b from-[#0E304A] to-[#154B74] p-0">
      <div className="bg-[#0E304A] p-6 text-3xl font-bold text-white shadow-2xl">
        Politica de Privacidade
      </div>
      <div className="relative mx-auto mb-6 mt-6 max-w-4xl bg-white p-5 text-xs shadow-md">
        <div className="absolute inset-x-0 top-0 h-1 bg-yellow-200"></div>
        <h1 className="mb-8 ml-5 mt-8 text-2xl">Politica de Privacidade</h1>

        <p className="mb-5 text-start text-lg font-bold">
          <strong>Data efetiva: 29 de outubro de 2024</strong>
        </p>

        <p className="text-lg">
          A Nuvix valoriza a privacidade de todos os usuários que visitam nossos
          sites, utilizam nossos aplicativos ou acessam nossos serviços.
        </p>

        <p className="text-lg">
          Esta Política de Privacidade explica como coletamos, armazenamos e
          utilizamos suas informações pessoais, e os direitos que você possui
          sobre seus dados.
        </p>

        <p className="text-lg">
          <strong>1. Coleta de Informações</strong>
        </p>
        <p className="text-lg">
          Coletamos informações pessoais quando você se registra em nossos
          serviços, utiliza nossas funcionalidades ou nos contata. Isso pode
          incluir seu nome, e-mail, informações de pagamento, endereço e outros
          dados relevantes.
        </p>
        <p className="text-lg">
          Também podemos coletar informações sobre suas interações com nossos
          serviços, como endereço IP, tipo de navegador, páginas acessadas e
          horários de acesso.
        </p>

        <p className="text-lg">
          <strong>2. Uso de Cookies</strong>
        </p>
        <p className="text-lg">
          Utilizamos cookies e tecnologias semelhantes para melhorar sua
          experiência, analisando o uso de nossos serviços e apresentando
          publicidade relevante. Você pode ajustar as configurações do seu
          navegador para recusar cookies, mas isso pode afetar a funcionalidade
          dos nossos serviços.
        </p>
        <p className="text-lg">
          Os cookies nos ajudam a lembrar suas preferências e a personalizar sua
          experiência em nosso site.
        </p>

        <p className="text-lg">
          <strong>3. Compartilhamento de Dados</strong>
        </p>
        <p className="text-lg">
          Suas informações podem ser acessadas por terceiros, como fornecedores
          de serviços, para operar e melhorar nossos serviços. Não vendemos suas
          informações pessoais a terceiros.
        </p>
        <p className="text-lg">
          Podemos compartilhar suas informações com parceiros comerciais para
          oferecer serviços adicionais, mas sempre com seu consentimento.
        </p>

        <p className="text-lg">
          <strong>4. Seus Direitos</strong>
        </p>
        <p className="text-lg">
          Você tem o direito de acessar, corrigir ou solicitar a exclusão de
          suas informações pessoais. Se você desejar exercer esses direitos,
          entre em contato conosco.
        </p>
        <p className="text-lg">
          Também temos o compromisso de notificá-lo em caso de quaisquer
          alterações significativas na forma como suas informações são tratadas.
        </p>

        <p className="text-lg">
          <strong>5. Segurança</strong>
        </p>
        <p className="text-lg">
          Implementamos medidas de segurança para proteger suas informações
          pessoais contra acesso não autorizado. No entanto, nenhuma transmissão
          de dados pela internet é completamente segura.
        </p>
        <p className="text-lg">
          Realizamos revisões periódicas de nossos procedimentos de segurança
          para garantir a proteção de seus dados.
        </p>

        <p className="text-lg">
          <strong>6. Limitações de Idade</strong>
        </p>
        <p className="text-lg">
          Nossos serviços não são destinados a crianças menores de 13 anos. Se
          tivermos conhecimento de que coletamos informações de uma criança,
          tomaremos medidas para remover esses dados.
        </p>

        <p className="text-lg">
          Para mais informações sobre sua privacidade ou para apresentar uma
          reclamação, entre em contato conosco através dos dados fornecidos em
          nossa seção de contato.
        </p>

        <p className="mt-10 text-right text-xl">NUVIX</p>
        <p className="text-right text-xl">
          Última atualização: 29 de outubro de 2024
        </p>
      </div>

      <footer className="mt-9 w-full p-0">
        <Rodape />
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
