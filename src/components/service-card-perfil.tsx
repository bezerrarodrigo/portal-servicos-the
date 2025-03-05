import { BuildingIcon, House, User } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ServiceCardPerfilProps } from '@/lib/types'

export function ServiceCardPerfil({
  title,
  subtitle,
  servicosImovel,
  servicosEmpresa,
  servicosCidadao,
}: ServiceCardPerfilProps) {
  return (
    <Card className="rounded-xs">
      <CardHeader className="border-b pb-2 border-blue-900">
        <CardTitle className="text-blue-900">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className="flex gap-2 font-light">
                <House />
                Imóvel - Consulte a situação cadastral e fiscal do seu imóvel.
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 space-y-1">
                {servicosImovel?.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-500 hover:underline"
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <span className="flex gap-2 font-light">
                <BuildingIcon size={32} />
                Empresas e Autônomos - Consulte a situação cadastral e fiscal da
                sua empresa.
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 space-y-1">
                {servicosEmpresa?.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-500 hover:underline"
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <span className="flex gap-2 font-light">
                <User size={36} />
                Cidadão - Consulte sua situação cadastral e relacionamentos com
                imóveis e empresas.
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 space-y-1">
                {servicosCidadao?.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-500 hover:underline"
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
