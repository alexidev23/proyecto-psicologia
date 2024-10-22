import Envejecimiento from '../assets/img/envejecimientoActivo.png'

export function Header () {
  return (
    <header className="sm:h-auto lg:h-screen w-full bg-header bg-no-repeat bg-cover bg-center">
    <div className="bg-header-color h-full flex flex-col items-center py-20 lg:py-0 lg:justify-center">
      <div className="w-[310px] md:w-[520px] lg:w-[650px] my-4 lg:my-10 rounded-xl py-2 md:py-4 px-5 flex items-center justify-between bg-white text-center">
        <img 
          src={Envejecimiento}
          alt="Icono de la web"
          className="h-24"
        />
        <h1 className="text-lg md:text-4xl font-bold">Espacios de envejecimiento activo</h1>
      </div>

      <div className="w-full md:w-[540px] lg:w-[650px] mx-auto font-medium text-lg md:text-2xl md:mt-10 lg:mt-0 lg:text-xl text-texto px-4 lg:px-6">
        <p className="mb-2">
          La finalidad de esta página está destinada a brindar información general sobre talleres y capacitaciones para las personas mayores que se dictan en diferentes instituciones en la ciudad de Córdoba capital.
        </p>
        <p className="mb-2">
          El objetivo es promover el bienestar psicológico y social de los adultos mayores, a través del fortalecimiento de lazos comunitarios con solidaridad y comprensión mutua, mejoras de sus condiciones de ciudadanía, de su calidad de vida e inclusión.
        </p>
        <p>
          A continuación podrá ver distintos talleres de algunas instituciones donde aprenderá nuevas habilidades y participará de un espacio de recreación y socialización.
        </p>
      </div>
    </div>
  </header>
  )
}