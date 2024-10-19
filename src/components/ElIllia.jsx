import { useState } from "react"
import { InfoContacto } from "./InfoContacto.jsx"
import { RedesSociales } from "./RedesSociales.jsx"
import { MapPin } from "lucide-react"
import { Globe } from "lucide-react"
import { Phone } from "lucide-react"
import { IlliaCursos } from "./IlliaCursos.jsx"

export function ElIllia () {
  const [activeInfo, setActiveInfo] = useState('cursos')

  const redesSociales = [
    {
      id: 1,
      img: 'facebook-icon.svg',
      name: 'El illia',
      url: 'https://www.facebook.com/elilliaok/'
    },
    {
      id: 2,
      img: 'instagram_dark-icon.svg',
      name: 'elilliaok',
      url: 'https://www.instagram.com/elilliaok/?hl=es-la'
    },
    {
      id: 3,
      img: 'gmail-icon.svg',
      name: 'elillia@cba.gov.ar',
      url: 'mailto:elillia@cba.gov.ar'
    }
  ]

  const infoContacto = [
    {
      id: 1,
      icon: <MapPin />,
      title: 'Avenida General Paz 539'
    },{
      id: 2,
      icon: <Globe />,
      title: 'https://elillia.cba.gov.ar/Portal/'
    },{
      id: 3,
      icon: <Phone />,
      title: '0810 122 2252 Opción 4'
    },{
      id: 4,
      icon: <Phone />,
      title: '3518082187'
    }
  ]

  const infoContent = {
    cursos: <IlliaCursos />,
    infoContacto: <InfoContacto contactos={infoContacto} />,
    redesSociales: <RedesSociales redes={redesSociales} />
  }
  return (
    <section className="relative">
      <div className="h-[450px] w-full bg-cepram bg-no-repeat bg-cover bg-center absolute top-0 -z-10"></div>
      <div className="h-[450px] bg-elIllia-color flex items-center justify-center gap-10">
        <div className="mx-10 bg-white px-10 py-6 rounded-3xl">
          <img src="/logoillia.png" alt="Icono de CEPRAM" height="180" width="180" />
        </div>
        <div className="w-[650px]">
          <h2 className="text-4xl uppercase text-center mb-8 font-bold">El Illia - espacio recreativo y cultural</h2>
          <p className="font-medium text-lg">
            Espacio socio recreativo y cultural, dependiente de la Caja de Jubilaciones, Pensiones y Retiros de la Provincia de Córdoba y el Ministerio de Economía y Gestión Pública, en donde se brindan actividades dedicadas al adulto mayor Es un sitio que brinda un ambiente de contención para el desarrollo del adulto mayor, a través de actividades recreativas y culturales de carácter gratuito, desde una visión contextualizada;  promoviendo el envejecimiento y la vejez digna y activa.
          </p>
          <p className="font-medium text-lg">
            Cuenta con el programa saber mayor, destinado a personas que deseen comenzar o finalizar sus estudios primarios
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={() => setActiveInfo('cursos')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'cursos' ? 'bg-green-900' : 'bg-darkGreen'} hover:bg-green-700 transition-colors`}
        >
          Cursos
        </button>
        <button
          onClick={() => setActiveInfo('infoContacto')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'infoContacto' ? 'bg-green-900' : 'bg-darkGreen'} hover:bg-green-700 transition-colors`}
        >
          Info de contacto
        </button>
        <button
          onClick={() => setActiveInfo('redesSociales')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'redesSociales' ? 'bg-green-900' : 'bg-darkGreen'} hover:bg-green-700 transition-colors`}
        >
          Redes Sociales
        </button>
      </div>
      <div className="w-full px-10 py-6">
        <div className="text-lg">{infoContent[activeInfo]}</div>
      </div>
    </section>
  )
}