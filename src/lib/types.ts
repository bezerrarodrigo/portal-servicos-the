import { ReactNode } from 'react'

export type ServiceCardProps = {
  title: string
  subtitle: string
  icon: ReactNode
  href: string
}

export type MenuItem = {
  text: string
  href: string
}

export type ServiceCardPerfilProps = {
  title: string
  subtitle: string
  servicosImovel: MenuItem[]
  servicosEmpresa: MenuItem[]
  servicosCidadao: MenuItem[]
}

export type ServiceCardTributosProps = {
  title: string
  subtitle: string
  servicosIss: MenuItem[]
  servicosIptu: MenuItem[]
  servicosItbi: MenuItem[]
  servicosTaxas: MenuItem[]
}
