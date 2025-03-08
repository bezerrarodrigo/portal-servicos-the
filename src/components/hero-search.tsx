import { Input } from '@/components/ui/input'

export function HeroSearch() {
  return (
    <>
      <div className="flex m-0 bg-blue-700">
        <div className="flex w-full flex-col items-center gap-4 p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Portal de Serviços
          </h1>
          <Input
            className="max-w-[600px] rounded-sm border-none bg-white"
            placeholder="Busca rápida"
          />
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-center font-semibold text-white">
              Serviços mais acessados
            </h2>
            <ul className="flex flex-col">
              <a className="hover:underline" href="#">
                Certidão Negativa de IPTU
              </a>
              <a className="hover:underline" href="#">
                Certidão Positiva com Efeito de Negativa IPTU
              </a>
              <a className="hover:underline" href="#">
                Certidão Conjunta Negativa e da Dívida Ativa
              </a>
              <a className="hover:underline" href="#">
                Emissão de guia ISS/Taxas
              </a>
              <a className="hover:underline" href="#">
                Emissão de Guia IPTU/COSIP/TCRD
              </a>
            </ul>
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
