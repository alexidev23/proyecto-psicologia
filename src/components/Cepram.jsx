import CepramIcono from "../assets/img/icons/cepram-icono.svg"
import { useState } from "react"
import { CepramCursos } from "./CepramCursos.jsx"
import { InfoContacto } from "./InfoContacto.jsx"
import { RedesSociales } from "./RedesSociales.jsx"
import { MapPin, Phone, Globe } from "lucide-react"

export function Cepram () {
  const [activeInfo, setActiveInfo] = useState('cursos')

  const redesSociales = [
    {
      id: 1,
      img: 'facebook-icon.svg',
      name: 'CEPRAM',
      url: 'https://www.facebook.com/cepram',
      color: '#3b0764'
    },
    {
      id: 2,
      img: 'instagram_dark-icon.svg',
      name: 'cepramcba',
      url: 'https://www.instagram.com/cepramcba/',
      color: '#3b0764'
    },
    {
      id: 3,
      img: 'gmail-icon.svg',
      name: 'cepramcordoba@gmail.com',
      url: 'mailto:cepramcordoba@gmail.com',
      color: '#3b0764'
    }
  ]

  const infoContacto = [
    {
      id: 1,
      icon: <MapPin />,
      title: 'David Luque 430 Barrio General Paz',
      url: 'https://maps.app.goo.gl/dpk9D6atd48iHYTq6'
    }, 
    {
      id: 2,
      icon: <Globe />,
      title: 'https://cepram.org.ar',
      url: 'https://cepram.org.ar/'
    },
    {
      id: 3,
      icon: <Phone />,
      title: '351-8183 922',
      url: 'tel:+543518183922'
    }
  ]

  const infoContent = {
    cursos: <CepramCursos />,
    infoContacto: <InfoContacto contactos={infoContacto} />,
    redesSociales: <RedesSociales redes={redesSociales} />
  }

  return (
    <section className="relative">
      <div className="h-[500px] lg:h-[350px] w-full bg-cepram bg-no-repeat bg-cepram-size bg-bottom absolute top-0 -z-10"></div>
      <div className="h-[500px] lg:h-[350px] bg-cepram-color flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="mx-10">
          <img src={CepramIcono} alt="Icono de CEPRAM" height={220} width={220} className="h-36" />
        </div>
        <div className="lg:w-[650px] text-white">
          <h2 className="text-2xl lg:text-4xl uppercase text-center mb-8 font-bold">Centro de promoción del adulto mayor</h2>
          <p className="font-medium text-lg px-6 lg:px-0">
            Espacio socio recreativo y cultural, dependiente de la caja de jubilaciones, pensiones y retiros de la provincia de Córdoba. Es un sitio que ofrece distintos programas y actividades que abarcan desde el bienestar psicológico hasta el desarrollo social.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={() => setActiveInfo('cursos')}
          className={`w-full py-4 text-white text-lg lg:text-xl font-medium uppercase ${activeInfo === 'cursos' ? 'bg-purple-600' : 'bg-cepram-color'} hover:bg-purple-400 transition-colors`}
        >
          Cursos
        </button>
        <button
          onClick={() => setActiveInfo('infoContacto')}
          className={`w-full py-4 text-white text-lg lg:text-xl font-medium uppercase ${activeInfo === 'infoContacto' ? 'bg-purple-600' : 'bg-cepram-color'} hover:bg-purple-400 transition-colors`}
        >
          Info de contacto
        </button>
        <button
          onClick={() => setActiveInfo('redesSociales')}
          className={`w-full py-4 text-white text-lg lg:text-xl font-medium uppercase ${activeInfo === 'redesSociales' ? 'bg-purple-600' : 'bg-cepram-color'} hover:bg-purple-400 transition-colors`}
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