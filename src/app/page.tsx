import { Header } from "@/components/header";
import { HeroSearch } from "@/components/hero-search";
import { ServiceCardTributos } from "@/components/service-card-tributo";
import { ServiceCardPerfil } from "@/components/service-card-perfil";
import { ServiceCardOnline } from "@/components/service-card-online";
import Image from "next/image";
import imgLogo from "@/assets/logoPrefeitura.png";

const issItems = [
  { text: "Emitir Guia ISS/TLFF/TLA/TRIFS", href: "#" },
  {
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS Autônomo",
    href: "#",
  },
  {
    text: "Nota Fiscal de Serviços (link aplicação)",
    href: "#",
  },
  {
    text: "Nota Fiscal de Serviços Avulsa (link aplicação)",
    href: "#",
  },
  {
    text: "Emitir Cartão de Inscrição de Empresa/Autônomo",
    href: "#",
  },
  {
    text: "Certidão Conjunta Negativa de Débitos Municipais e da Dívida Ativa do Município",
    href: "#",
  },
  {
    text: "Certidão Conjunta Positiva de Débitos Municipais e da Dívida Ativa do Município",
    href: "#",
  },
  { text: "Reemitir Certidão/Declaração", href: "#" },
  { text: "Validar Certidão/Declaração", href: "#" },
  { text: "Certidão de Baixa", href: "#" },
  { text: "Certidão de Estimativa", href: "#" },
  { text: "Consultar Alvará de Funcionamento", href: "#" },
  {
    text: "Declaração de Inexistência de Cadastro Mercantil",
    href: "#",
  },
  {
    text: "Portal de Parcelamento e Negociação (link)",
    href: "#",
  },
  { text: "Legislação (link SEMF Legis)", href: "#" },
  {
    text: "Notificação de Instrução Normativa",
    href: "#",
  },
];

const iptuItems = [
  { text: "Certidão Negativa de Débitos de IPTU", href: "#" },
  {
    text: "Certidão Positiva com Efeitos de Negativa IPTU",
    href: "#",
  },
  {
    text:
      "Emitir Guia IPTU/TCRD-Taxa de Lixo/COSIP -\n" +
      "Taxa de Iluminação Pública",
    href: "#",
  },
  {
    text: "Emitir Memória de Cálculo do Imóvel",
    href: "#",
  },
  {
    text: "Declaração de Inexistência de Imóvel",
    href: "#",
  },
  {
    text: "Reemitir Certidão/Declaração",
    href: "#",
  },
  {
    text: "Validar Certidão/Declaração",
    href: "#",
  },
  { text: "Portal do IPTU", href: "#" },
  { text: "Portal de Negociação", href: "#" },
];

const itbiItems = [
  { text: "Emitir Guia ITBI-e", href: "#" },
  {
    text: "Emitir Guia SIAT",
    href: "#",
  },
  {
    text: "Sistema ITBI-e",
    href: "#",
  },
  {
    text: "Certidão Negativa de Transferência Imobiliária",
    href: "#",
  },
  {
    text: "Reemitir Certidão/Declaração",
    href: "#",
  },
  {
    text: "Validar Certidão/Declaração",
    href: "#",
  },
];

const taxaItems = [
  { text: "Emitir Guia ISS/TLFF/TLA/TRIFS", href: "#" },
  {
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS Autonômo",
    href: "#",
  },
  {
    text: "Emitir Cartão de Inscrição de Empresa/Autônomo",
    href: "#",
  },
  {
    text:
      "Certidão Conjunta Negativa de Débitos\n" +
      "Municipais e da Dívida Ativa do Município",
    href: "#",
  },
  {
    text:
      "Certidão Conjunta Positiva de Débitos\n" +
      "Municipais e da Dívida Ativa do Município",
    href: "#",
  },
  {
    text: "Reemitir Certidão/Declaração",
    href: "#",
  },
  {
    text: "Consultar Alvará de Funcionamento",
    href: "#",
  },
  {
    text: "Declaração de Inexistência de Cadastro Mercantil",
    href: "#",
  },
  {
    text: "Portal de Parcelamento e Negociação",
    href: "#",
  },
  {
    text: "Sistema de Licenciamento - SLIC",
    href: "#",
  },
];

const imovelItens = [
  { text: "Certidão Negativa de Débitos de IPTU", href: "#" },
  {
    text: "Certidão Positiva com Efeitos de Negativa IPTU",
    href: "#",
  },
  {
    text:
      "Emitir Guia IPTU/TCRD-Taxa de Lixo/COSIP -\n" +
      "Taxa de Iluminação Pública",
    href: "#",
  },
  {
    text: "Emitir Memória de Cálculo do Imóvel",
    href: "#",
  },
  {
    text: "Emitir Guia ITBI-e",
    href: "#",
  },
  {
    text: "Emitir Guia SIAT",
    href: "#",
  },
  {
    text: "Sistema ITBI-e",
    href: "#",
  },
  {
    text: "Declaração de Inexistência de Imóvel",
    href: "#",
  },
  {
    text: "Reemitir Certidão/Declaração",
    href: "#",
  },
  {
    text: "Validar Certidão/Declaração",
    href: "#",
  },
  {
    text: "Portal do IPTU",
    href: "#",
  },
  {
    text: "Portal de Negociação",
    href: "#",
  },
  {
    text: "Sistema Coleta de Lixo",
    href: "#",
  },
  {
    text: "Sistema de Coleta de Poda",
    href: "#",
  },
  {
    text: "Certidão de Número",
    href: "#",
  },
  {
    text: "Declaração de Rua",
    href: "#",
  },
  {
    text: "Construa Fácil",
    href: "#",
  },
];

const empresaItens = [
  { text: "Emitir Guia ISS/TLFF/TLA/TRIFS", href: "#" },
  {
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS Autonômo",
    href: "#",
  },
  {
    text: "Nota Fiscal de Serviços",
    href: "#",
  },
  {
    text: "Nota Fiscal de Serviços Avulsa",
    href: "#",
  },
  {
    text: "Emitir Cartão de Inscrição de Empresa/Autônomo",
    href: "#",
  },
  {
    text:
      "Certidão Conjunta Negativa de Débitos\n" +
      "Municipais e da Dívida Ativa do Município",
    href: "#",
  },
  {
    text:
      "Certidão Conjunta Negativa de Débitos\n" +
      "Municipais e da Dívida Ativa do Município",
    href: "#",
  },
  {
    text: "Reemitir Certidão/Declaração",
    href: "#",
  },
  {
    text: "Reemitir Certidão/Declaração",
    href: "#",
  },
  {
    text: "Validar Certidão/Declaração",
    href: "#",
  },
  {
    text: "Certidão de Baixa",
    href: "#",
  },
  {
    text: "Certidão de Estimativa",
    href: "#",
  },
  {
    text: "Consultar Alvará de Funcionamento",
    href: "#",
  },
  {
    text: "Declaração de Inexistência de Cadastro Mercantil",
    href: "#",
  },
  {
    text: "Portal de Parcelamento e Negociação",
    href: "#",
  },
  {
    text: "Notificação de Instrução Normativa",
    href: "#",
  },
  {
    text: "Sistema de Licenciamento - SLIC",
    href: "#",
  },
  {
    text: "Piauí Digital",
    href: "#",
  },
  {
    text: "DESIF",
    href: "#",
  },
  {
    text: "Sistema de Poda",
    href: "#",
  },
  {
    text: "Sistema Coleta de Lixo",
    href: "#",
  },
  {
    text: "Domicílio Tributário Eletrônico",
    href: "#",
  },
];

const cidadaoItems = [
  { text: "Certidão Negativa de Débitos de IPTU", href: "#" },
  {
    text: "Certidão Positiva com Efeitos de Negativa IPTU",
    href: "#",
  },
  {
    text:
      "Emitir Guia IPTU/TCRD-Taxa de Lixo/COSIP -\n" +
      "Taxa de Iluminação Pública",
    href: "#",
  },
  {
    text: "Emitir Memória de Cálculo do Imóvel",
    href: "#",
  },
  {
    text: "Emitir Guia ITBI-e",
    href: "#",
  },
  {
    text: "Emitir Guia SIAT",
    href: "#",
  },
  {
    text: "Sistema ITBI-e",
    href: "#",
  },
  {
    text: "Declaração de Inexistência de Imóvel",
    href: "#",
  },
  {
    text: "Declaração de Inexistência de Cadastro Mercantil",
    href: "#",
  },
  {
    text: "Reemitir Certidão/Declaração",
    href: "#",
  },
  {
    text: "Validar Certidão/Declaração",
    href: "#",
  },
  {
    text: "Portal do IPTU",
    href: "#",
  },
  {
    text: "Portal de Negociação",
    href: "#",
  },
  {
    text: "Sistema Coleta de Lixo",
    href: "#",
  },
  {
    text: "Sistema de Coleta de Poda",
    href: "#",
  },
  {
    text: "Certidão de Número",
    href: "#",
  },
  {
    text: "Declaração de Rua",
    href: "#",
  },
  {
    text: "Construa Fácil",
    href: "#",
  },
  {
    text: "Cadastro como Tomador da Nota",
    href: "#",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col antialiased">
        <div className="flex flex-1 flex-col space-y-6 py-10">
          <div className="flex w-full items-center justify-center px-4">
            <Image src={imgLogo} alt="Logo Prefeitura" height={100} />
          </div>
          <HeroSearch />
          <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3">
            <ServiceCardTributos
              title="Serviços por Tributo"
              subtitle="Encontre o serviço ou a informação
             selecionando o tributo relacionado."
              servicosIss={issItems}
              servicosIptu={iptuItems}
              servicosItbi={itbiItems}
              servicosTaxas={taxaItems}
            />
            <ServiceCardPerfil
              title="Serviços por Perfil"
              subtitle="Encontre o serviço ou a informação
             selecionando o perfil desejado."
              servicosImovel={imovelItens}
              servicosEmpresa={empresaItens}
              servicosCidadao={cidadaoItems}
            />
            <ServiceCardOnline
              title="Aplicações Online"
              subtitle="Selecione a aplicação ou serviço online
desejado para acesso específico."
            />
          </div>
        </div>
      </main>
    </>
  );
}
