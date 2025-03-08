import React from 'react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Input
        onFocus={() => setOpen(true)}
        className="bg-white"
        placeholder="Busque aqui pelos serviços mais usados..."
      />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digita para filtrar..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Tributos">
            <CommandItem>
              <a
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CNDIPTU"
                target="_blank"
              >
                Certidão Negativa de IPTU
              </a>
            </CommandItem>
            <CommandItem>
              <a
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CPCENIPTU"
                target="_blank"
              >
                Certidão Positiva com Efeito de Negativa IPTU
              </a>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Guias e Taxas">
            <CommandItem>
              <a
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCNDA"
                target="_blank"
              >
                Certidão Conjunta Negativa e da Dívida Ativa
              </a>
            </CommandItem>
            <CommandItem>
              <a
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA"
                target="_blank"
              >
                Emissão de Guia ISS/Taxas
              </a>
            </CommandItem>
            <CommandItem>
              <a
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL"
                target="_blank"
              >
                Emissão de Guia IPTU/COSIP/TCRD
              </a>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
