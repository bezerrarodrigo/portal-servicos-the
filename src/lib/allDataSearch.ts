const allServices = [
  {
    id: 1,
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA",
  },
  {
    id: 2,
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS Autônomo",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EMITIRGUIAISSAUTONOMO",
  },
  {
    id: 3,
    text: "Nota Fiscal de Serviços",
    href: "https://www.issdigitalthe.com.br/NotaFiscal/",
  },
  {
    id: 4,
    text: "Nota Fiscal de Serviços Avulsa",
    href: "https://www.issdigitalthe.com.br/nfsa/",
  },
  {
    id: 5,
    text: "Emitir Cartão de Inscrição de Empresa/Autônomo",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=CADECO",
  },
  {
    id: 6,
    text: "Certidão Conjunta Negativa de Débitos Municipais e da Dívida Ativa do Município",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCNDA",
  },
  {
    id: 7,
    text: "Certidão Conjunta Positiva com Efeito de Negativa de Débitos Municipais e da Dívida Ativa do Município",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCPENDA",
  },
  {
    id: 8,
    text: "Reemitir Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO",
  },
  {
    id: 9,
    text: "Validar Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO",
  },
  {
    id: 10,
    text: "Certidão de Baixa",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=MOB_CB",
  },
  {
    id: 11,
    text: "Certidão de Estimativa",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=MOB_CE",
  },
  {
    id: 12,
    text: "Consultar Alvará de Funcionamento",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=CONSULTAR_ALVARA_FUNCIONAMENTO",
  },
  {
    id: 13,
    text: "Declaração de Inexistência de Cadastro Mercantil",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_DICM",
  },
  {
    id: 14,
    text: "Portal de Parcelamento e Negociação",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/inicial/",
  },
  {
    id: 15,
    text: "Legislação",
    href: "http://legis.teresina.pi.gov.br/",
  },
  {
    id: 16,
    text: "Notificação de Instrução Normativa",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=RELNOTIFICACAOESTIMATIVA",
  },
  {
    id: 17,
    text: "Certidão Negativa de Débitos de IPTU",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CNDIPTU",
  },
  {
    id: 18,
    text: "Certidão Positiva com Efeitos de Negativa IPTU",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CPCENIPTU",
  },
  {
    id: 19,
    text: "Emitir Guia IPTU/TCRD-Taxa de Lixo/COSIP -\nTaxa de Iluminação Pública",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL",
  },
  {
    id: 20,
    text: "Emitir Memória de Cálculo do Imóvel",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMOVEL",
  },
  {
    id: 21,
    text: "Declaração de Inexistência de Imóvel",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_DII",
  },
  {
    id: 22,
    text: "Reemitir Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO",
  },
  {
    id: 23,
    text: "Validar Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO",
  },
  {
    id: 24,
    text: "Portal do IPTU",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/iptu/",
  },
  {
    id: 25,
    text: "Portal de Negociação",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/inicial/",
  },
  {
    id: 26,
    text: "Legislação",
    href: "http://legis.teresina.pi.gov.br/",
  },
  {
    id: 27,
    text: "Emitir Guia ITBI-e",
    href: "https://novoitbie.teresina.pi.gov.br/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf",
  },
  {
    id: 28,
    text: "Consultar ITBI-e Legado (sistema anterior)",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=CONSULTARITBI",
  },
  {
    id: 29,
    text: "Consultar Certidão Negativa ITBI-e Legado (sistema anterior)",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CITBI",
  },
  {
    id: 30,
    text: "Emitir Guia SIAT",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EMITIRITBI",
  },
  {
    id: 31,
    text: "Sistema ITBI-e",
    href: "https://novoitbie.teresina.pi.gov.br/itbi/paginas/portal/index.html",
  },
  {
    id: 32,
    text: "Certidão Negativa de Transferência Imobiliária",
    href: "https://novoitbie.teresina.pi.gov.br/itbi/paginas/certidao/certidaoPortalData.jsf?faces-redirect=true",
  },
  {
    id: 33,
    text: "Reemitir Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO",
  },
  {
    id: 34,
    text: "Validar Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO",
  },
  {
    id: 35,
    text: "Legislação",
    href: "http://legis.teresina.pi.gov.br/",
  },
  {
    id: 36,
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA",
  },
  {
    id: 37,
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS Autonômo",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EMITIRGUIAISSAUTONOMO",
  },
  {
    id: 38,
    text: "Emitir Cartão de Inscrição de Empresa/Autônomo",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=CADECO",
  },
  {
    id: 39,
    text: "Certidão Conjunta Negativa de Débitos\nMunicipais e da Dívida Ativa do Município",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCNDA",
  },
  {
    id: 40,
    text: "Certidão Conjunta Positiva com Efeito de Negativa de Débitos Municipais e da Dívida Ativa do Município",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCPENDA",
  },
  {
    id: 41,
    text: "Reemitir Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO",
  },
  {
    id: 42,
    text: "Consultar Alvará de Funcionamento",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=CONSULTAR_ALVARA_FUNCIONAMENTO",
  },
  {
    id: 43,
    text: "Declaração de Inexistência de Cadastro Mercantil",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_DICM",
  },
  {
    id: 44,
    text: "Portal de Parcelamento e Negociação",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/inicial/",
  },
  {
    id: 45,
    text: "Sistema de Licenciamento - SLIC",
    href: "http://slic.semf.teresina.pi.gov.br/",
  },
  {
    id: 46,
    text: "Legislação",
    href: "http://legis.teresina.pi.gov.br/",
  },
  {
    id: 47,
    text: "Certidão Negativa de Débitos de IPTU",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CNDIPTU",
  },
  {
    id: 48,
    text: "Certidão Positiva com Efeitos de Negativa IPTU",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CPCENIPTU",
  },
  {
    id: 49,
    text: "Emitir Guia IPTU/TCRD-Taxa de Lixo/COSIP -\nTaxa de Iluminação Pública",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL",
  },
  {
    id: 50,
    text: "Emitir Memória de Cálculo do Imóvel",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMOVEL",
  },
  {
    id: 51,
    text: "Emitir Guia ITBI-e",
    href: "https://novoitbie.teresina.pi.gov.br/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf",
  },
  {
    id: 52,
    text: "Emitir Guia SIAT",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EMITIRITBI",
  },
  {
    id: 53,
    text: "Sistema ITBI-e",
    href: "https://novoitbie.teresina.pi.gov.br/itbi/paginas/portal/index.html",
  },
  {
    id: 54,
    text: "Declaração de Inexistência de Imóvel",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_DII",
  },
  {
    id: 55,
    text: "Reemitir Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO",
  },
  {
    id: 56,
    text: "Validar Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO",
  },
  {
    id: 57,
    text: "Portal do IPTU",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/iptu/",
  },
  {
    id: 58,
    text: "Portal de Negociação",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/inicial/",
  },
  {
    id: 59,
    text: "Sistema Coleta de Lixo",
    href: "http://coletalixo.semf.teresina.pi.gov.br/",
  },
  {
    id: 60,
    text: "Sistema de Coleta de Poda",
    href: "http://coletapoda.semf.teresina.pi.gov.br/",
  },
  {
    id: 61,
    text: "Certidão de Número",
    href: "http://certidaonum.semf.teresina.pi.gov.br/",
  },
  {
    id: 62,
    text: "Construa Fácil",
    href: "http://construafacil.semf.teresina.pi.gov.br/",
  },
  {
    id: 63,
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA",
  },
  {
    id: 64,
    text: "Emitir Guia ISS/TLFF/TLA/TRIFS Autonômo",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EMITIRGUIAISSAUTONOMO",
  },
  {
    id: 65,
    text: "Nota Fiscal de Serviços",
    href: "https://www.issdigitalthe.com.br/NotaFiscal/",
  },
  {
    id: 66,
    text: "Nota Fiscal de Serviços Avulsa",
    href: "https://www.issdigitalthe.com.br/nfsa/",
  },
  {
    id: 67,
    text: "Emitir Cartão de Inscrição de Empresa/Autônomo",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=CADECO",
  },
  {
    id: 68,
    text: "Certidão Conjunta Positiva com Efeito de Negativa de Débitos Municipais e da Dívida Ativa do Município",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCNDA",
  },
  {
    id: 69,
    text: "Reemitir Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO",
  },
  {
    id: 70,
    text: "Validar Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO",
  },
  {
    id: 71,
    text: "Certidão de Baixa",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=MOB_CB",
  },
  {
    id: 72,
    text: "Certidão de Estimativa",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=MOB_CE",
  },
  {
    id: 73,
    text: "Consultar Alvará de Funcionamento",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=CONSULTAR_ALVARA_FUNCIONAMENTO",
  },
  {
    id: 74,
    text: "Declaração de Inexistência de Cadastro Mercantil",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_DICM",
  },
  {
    id: 75,
    text: "Portal de Parcelamento e Negociação",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/inicial/",
  },
  {
    id: 76,
    text: "Legislação",
    href: "http://legis.teresina.pi.gov.br/",
  },
  {
    id: 77,
    text: "Certidão Negativa de Débitos de IPTU",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CNDIPTU",
  },
  {
    id: 78,
    text: "Certidão Positiva com Efeitos de Negativa IPTU",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CPCENIPTU",
  },
  {
    id: 79,
    text: "Emitir Guia IPTU/TCRD-Taxa de Lixo/COSIP -\nTaxa de Iluminação Pública",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL",
  },
  {
    id: 80,
    text: "Emitir Memória de Cálculo do Imóvel",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMOVEL",
  },
  {
    id: 81,
    text: "Emitir Guia ITBI-e",
    href: "https://novoitbie.teresina.pi.gov.br/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf",
  },
  {
    id: 82,
    text: "Emitir Guia SIAT",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EMITIRITBI",
  },
  {
    id: 83,
    text: "Sistema ITBI-e",
    href: "https://novoitbie.teresina.pi.gov.br/itbi/paginas/portal/index.html",
  },
  {
    id: 84,
    text: "Declaração de Inexistência de Imóvel",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_DII",
  },
  {
    id: 85,
    text: "Reemitir Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO",
  },
  {
    id: 86,
    text: "Validar Certidão/Declaração",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO",
  },
  {
    id: 87,
    text: "Portal do IPTU",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/iptu/",
  },
  {
    id: 88,
    text: "Portal de Negociação",
    href: "https://portal.teresina.pi.gov.br/portal-web/paginas/inicial/",
  },
  {
    id: 89,
    text: "Sistema Coleta de Lixo",
    href: "http://coletalixo.semf.teresina.pi.gov.br/",
  },
  {
    id: 90,
    text: "Sistema de Coleta de Poda",
    href: "http://coletapoda.semf.teresina.pi.gov.br/",
  },
  {
    id: 91,
    text: "Certidão de Número",
    href: "http://certidaonum.semf.teresina.pi.gov.br/",
  },
  {
    id: 92,
    text: "Construa Fácil",
    href: "http://construafacil.semf.teresina.pi.gov.br/",
  },
  {
    id: 93,
    text: "Cadastro como Tomador da Nota",
    href: "https://www.issdigitalthe.com.br/NotaFiscal/",
  },
  {
    id: 94,
    text: "Certidão Conjunta Negativa de Débitos Municipais e da Dívida Ativa do Município",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCNDA",
  },
  {
    id: 95,
    text: "Certidão Conjunta Positiva com Efeito de Negativa de Débitos Municipais e da Dívida Ativa do Município",
    href: "https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCPENDA",
  },
];

const uniqueServices = Array.from(
  new Map(allServices.map((service) => [service.text, service])).values()
);

export const filteredServices = uniqueServices;
