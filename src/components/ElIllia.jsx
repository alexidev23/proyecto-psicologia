import IlliaIcono from "../assets/img/icons/logoillia.png"
import { useState } from "react"
import { IlliaCursos } from "./IlliaCursos.jsx"
import { InfoContactoIllia } from "./infoContactoIllia.jsx"
import { RedesSociales } from "./RedesSociales.jsx"
import { MapPin, Globe, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function ElIllia () {
  const [activeInfo, setActiveInfo] = useState('cursos')

  const redesSociales = [
    {
      id: 1,
      img: 'facebook-icon.svg',
      name: 'El illia',
      url: 'https://www.facebook.com/elilliaok/',
      color: '#14532d'
    },
    {
      id: 2,
      img: 'instagram_dark-icon.svg',
      name: 'elilliaok',
      url: 'https://www.instagram.com/elilliaok/?hl=es-la',
      color: '#14532d'
    },
    {
      id: 3,
      img: 'gmail-icon.svg',
      name: 'elillia@cba.gov.ar',
      url: 'mailto:elillia@cba.gov.ar',
      color: '#14532d'
    }
  ]

  const infoContacto = [
    {
      id: 1,
      icon: <MapPin />,
      title: 'Avenida General Paz 539',
      url: 'https://maps.app.goo.gl/2bsGLCNpnMWxk5zb6'
    },
    {
      id: 2,
      icon: <Globe />,
      title: 'https://elillia.cba.gov.ar/Portal/',
      url: 'https://elillia.cba.gov.ar/Portal/'
    },
    {
      id: 3,
      icon: <Phone />,
      title: '0810 122 2252 (Marcar la opción 4)',
      url: 'tel:+5408101222252'
    },
    {
      id: 4,
      icon: <FaWhatsapp size={30} />,
      title: '3518082187',
      url: 'tel:+543518082187'
    }
  ]

  const infoContent = {
    cursos: <IlliaCursos />,
    infoContacto: <InfoContactoIllia contactos={infoContacto} />,
    redesSociales: <RedesSociales redes={redesSociales} />
  }
  return (
    <section className="relative">
      <div className="h-[800px] lg:h-[450px] w-full bg-elIllia bg-no-repeat bg-cover bg-center absolute top-0 -z-10"></div>
      <div className="h-[800px] lg:h-[450px] bg-elIllia-color flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="mx-10 bg-white px-10 py-6 rounded-3xl">
          <img src={IlliaIcono} alt="Icono de CEPRAM" height={180} width={180} />
        </div>
        <div className="lg:w-[650px] text-white">
          <h2 className="text-2xl lg:text-4xl uppercase text-center mb-8 font-bold px-4 lg:px-0">El Illia - espacio recreativo y cultural</h2>
          <p className="font-medium text-lg px-5 lg:px-0">
            Espacio socio recreativo y cultural, dependiente de la Caja de Jubilaciones, Pensiones y Retiros de la Provincia de Córdoba y el Ministerio de Economía y Gestión Pública, en donde se brindan actividades dedicadas al adulto mayor. 
          </p>
          <p className="font-medium text-lg px-5 lg:px-0">
            Es un sitio que brinda un ambiente de contención para el desarrollo del adulto mayor, a través de actividades recreativas y culturales de carácter gratuito, desde una visión contextualizada;  promoviendo el envejecimiento y la vejez digna y activa. Cuenta con el programa saber mayor, destinado a personas que deseen comenzar o finalizar sus estudios primarios
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={() => setActiveInfo('cursos')}
          className={`w-full py-4 text-white text-lg lg:text-xl font-medium uppercase ${activeInfo === 'cursos' ? 'bg-green-900' : 'bg-darkGreen'} hover:bg-green-700 transition-colors`}
        >
          Cursos
        </button>
        <button
          onClick={() => setActiveInfo('infoContacto')}
          className={`w-full py-4 text-white text-lg lg:text-xl font-medium uppercase ${activeInfo === 'infoContacto' ? 'bg-green-900' : 'bg-darkGreen'} hover:bg-green-700 transition-colors`}
        >
          Info de contacto
        </button>
        <button
          onClick={() => setActiveInfo('redesSociales')}
          className={`w-full py-4 text-white text-lg lg:text-xl font-medium uppercase ${activeInfo === 'redesSociales' ? 'bg-green-900' : 'bg-darkGreen'} hover:bg-green-700 transition-colors`}
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