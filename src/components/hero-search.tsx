'use client'

import { useState } from 'react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'

export function HeroSearch() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex m-0 bg-blue-700">
        <div className="flex w-full flex-col items-center gap-4 p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Portal de Serviços
          </h1>
          <Input
            className="bg-white w-full md:w-1/2"
            placeholder="Busca rápida por serviço..."
            onFocus={() => setOpen(true)}
          />
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Digite um comando ou pesquise..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Sugestões">
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
                    Emissão de guia ISS/Taxas
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
      </div>
      <div className="flex h-14 items-center justify-center bg-blue-300">
        <h3 className="font-bold text-blue-900 lg:text-lg text-sm">
          <a
            href="https://portal.teresina.pi.gov.br/portal-web/paginas/inicial/"
            target="_blank"
          >
            Acesse o Portal de Parcelamento e Negociação
          </a>
        </h3>
      </div>
    </>
  )
}
