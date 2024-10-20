export function Header () {
  return (
    <header className="h-screen w-full bg-header bg-no-repeat bg-cover bg-center">
    <div className="bg-header-color h-full flex flex-col items-center justify-center">
      <div className="w-[650px] my-10 rounded-xl py-4 px-5 flex items-center justify-between bg-white text-center">
        <img 
          src="/iconoPage.svg"
          alt="Icono de la web"
          height={120}
          width={120}
        />
        <h1 className="text-4xl font-bold">Espacios de envejecimiento activo</h1>
      </div>

      <div className="w-[650px] mx-auto font-medium text-xl text-texto px-6">
        <p className="mb-2">
          La finalidad de esta pagina esta destinada a brindar información general sobre talleres y capacitaciones para las personas mayores que se dictan en diferentes instituciones en la ciudad de Cordoba capital.
        </p>
        <p className="mb-2">
          El objetivo es promover el bienestar psicológico y social de los adultos mayores, a través del fortalecimiento de lazos comunitarios con solidaridad y comprensión mutua; mejoras de sus condiciones de ciudadanía, de su calidad de vida e inclusión.
        </p>
        <p>
          A continuación podrá ver distintos talleres de algunas instituciones donde aprenderá nuevas habilidades y participara de un espacio de recreación y socialización.
        </p>
      </div>
    </div>
  </header>
  )
}