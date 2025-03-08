'use client'

import { CommandMenu } from '@/components/command-menu'

export function HeroSearch() {
  return (
    <>
      <div className="flex m-0 bg-blue-700">
        <div className="flex w-full flex-col items-center gap-4 p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Portal de Serviços
          </h1>
          <div className="w-1/2">
            <CommandMenu />
          </div>
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
