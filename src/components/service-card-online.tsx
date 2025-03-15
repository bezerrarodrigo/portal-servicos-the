import {
  BrickWall,
  FileBadgeIcon,
  FileDigitIcon,
  Globe,
  House,
  HousePlus,
  Landmark,
  Mail,
  MonitorCheck,
  MonitorUpIcon,
  NotepadText,
  NotepadTextDashedIcon,
  Trees,
  Truck,
} from 'lucide-react'

import { ServiceCard } from '@/components/service-card'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ServiceCardProps } from '@/lib/types'

const onlineItems = [
  {
    title: 'DTE',
    subtitle: 'Domicílio Tributário Eletrônico',
    icon: <Mail />,
    href: 'https://dte.teresina.pi.gov.br/dec/paginas/portal/#/',
  },
  {
    title: 'NFS-e',
    subtitle: 'Nota Fiscal Eletrônico de Serviços',
    icon: <NotepadText />,
    href: 'https://www.issdigitalthe.com.br/NotaFiscal/',
  },
  {
    title: 'NFS-e Avulsa',
    subtitle: 'Nota Fiscal Eletrônico Avulsa',
    icon: <NotepadTextDashedIcon />,
    href: 'https://www.issdigitalthe.com.br/nfsa/',
  },
  {
    title: 'DES-IF',
    subtitle: 'Declaração Eletrônica de Serviços',
    icon: <Landmark />,
    href: 'https://desif.issdigitalthe.com.br/desif-web/paginas/portal/index.html#/',
  },
  {
    title: 'ITBI-e',
    subtitle: 'Transferências e cessões de imóveis',
    icon: <HousePlus />,
    href: 'https://novoitbie.teresina.pi.gov.br/itbi/paginas/portal/index.html',
  },
  {
    title: 'Piauí Digital',
    subtitle:
      'Consulta Prévia, Constituição,\n' + 'Alteração, Baixa e Licenças',
    icon: <Globe />,
    href: 'https://autenticacao.piauidigital.pi.gov.br/',
  },
  {
    title: 'Certidão de Número',
    subtitle: 'Solicitar certidão de número para imóvel',
    icon: <FileDigitIcon />,
    href: 'http://certidaonum.semf.teresina.pi.gov.br/',
  },
  {
    title: 'Portal IPTU',
    subtitle: 'Emissão de guia e memória de\n' + 'cálculo',
    icon: <House />,
    href: 'https://portal.teresina.pi.gov.br/portal-web/paginas/iptu/',
  },
  {
    title: 'Coleta de Lixo',
    subtitle: 'Solicitar coleta de lixo extra domiciliar',
    icon: <Truck />,
    href: 'http://coletalixo.semf.teresina.pi.gov.br/',
  },
  {
    title: 'SLIC - Sistema de Licenciamento',
    subtitle:
      'Solicitar renovação de alvará, certidão\n' +
      'de acessibilidade e licenças',
    icon: <FileBadgeIcon />,
    href: 'http://slic.semf.teresina.pi.gov.br/',
  },
  {
    title: 'Construa Fácil',
    subtitle: 'Solicitar licença para obras',
    icon: <BrickWall />,
    href: 'http://construafacil.semf.teresina.pi.gov.br/',
  },
  {
    title: 'Coleta de Poda',
    subtitle: 'Solicitar coleta',
    icon: <Trees />,
    href: 'http://coletapoda.semf.teresina.pi.gov.br/',
  },
  {
    title: 'SEI - Acesso usuário externo',
    subtitle: 'Iniciar ou consultar processos',
    icon: <MonitorUpIcon />,
    href:
      'https://sei.pmt.pi.gov.br/sei/controlador_externo.php?acao=usuario\n' +
      '_externo_logar&acao_origem=usuario_externo_gerar_senha&id_org\n' +
      'ao_acesso_externo=0',
  },
  {
    title: 'SEI - Solicitar acesso',
    subtitle: 'Solicitar Acesso ao SEI',
    icon: <MonitorCheck />,
    href: 'https://sei.pmt.pi.gov.br/sei/controlador_externo.php?acao=usuario_externo_avisar_cadastro&id_orgao_acesso_externo=0',
  },
]

export function ServiceCardOnline({ title, subtitle }: ServiceCardProps) {
  return (
    <Card className="rounded-xs">
      <CardHeader className="border-b pb-2 border-blue-500">
        <CardTitle className="text-blue-500">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        {onlineItems.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </CardContent>
    </Card>
  )
}
