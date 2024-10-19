import { useState } from "react"
import { CepramCursos } from "./CepramCursos.jsx"
import { InfoContacto } from "./infoContacto.jsx"
import { RedesSociales } from "./RedesSociales.jsx"
import { MapPin } from "lucide-react"
import { Phone } from "lucide-react"
import { Globe } from "lucide-react"

export function Cepram () {
  const [activeInfo, setActiveInfo] = useState('cursos')

  const redesSociales = [
    {
      id: 1,
      img: 'facebook-icon.svg',
      name: 'CEPRAM',
      url: 'https://www.facebook.com/cepram'
    },
    {
      id: 2,
      img: 'instagram_dark-icon.svg',
      name: 'cepramcba',
      url: 'https://www.instagram.com/cepramcba/'
    },
    {
      id: 3,
      img: 'gmail-icon.svg',
      name: 'cepramcordoba@gmail.com',
      url: 'mailto:cepramcordoba@gmail.com'
    }
  ]

  const infoContacto = [
    {
      id: 1,
      icon: <MapPin />,
      title: 'David Luque 430 Barrio General Paz'
    }, 
    {
      id: 2,
      icon: <Globe />,
      title: 'http://cepram.org.ar'
    },
    {
      id: 3,
      icon: <Phone />,
      title: '351-8183 922'
    }
  ]

  const infoContent = {
    cursos: <CepramCursos/>,
    infoContacto: <InfoContacto InfoContacto={infoContacto} />,
    redesSociales: <RedesSociales redes={redesSociales} />
  }

  return (
    <section className="relative">
      <div className="h-[350px] w-full bg-cepram bg-no-repeat bg-cover bg-center absolute top-0 -z-10"></div>
      <div className="h-[350px] bg-cepram-color flex items-center justify-center gap-10">
        <div className="mx-10">
          <img src="/cepram-icono.png" alt="Icono de CEPRAM" height="180" width="180" />
        </div>
        <div className="w-[650px]">
          <h2 className="text-4xl uppercase text-center mb-8 font-bold">Centro de promoción del adulto mayor</h2>
          <p className="font-medium text-lg">
            Espacio socio recreativo y cultural, dependiente de la caja de jubilaciones, pensiones y retiros de la provincia de córdoba
          </p>
          <p className="font-medium text-lg">
            Los talleres que brinda se pueden cursar de manera presencial o virtual
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={() => setActiveInfo('cursos')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'cursos' ? 'bg-purple-600' : 'bg-cepram-color'} hover:bg-purple-400 transition-colors`}
        >
          Cursos
        </button>
        <button
          onClick={() => setActiveInfo('infoContacto')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'infoContacto' ? 'bg-purple-600' : 'bg-cepram-color'} hover:bg-purple-400 transition-colors`}
        >
          Info de contacto
        </button>
        <button
          onClick={() => setActiveInfo('redesSociales')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'redesSociales' ? 'bg-purple-600' : 'bg-cepram-color'} hover:bg-purple-400 transition-colors`}
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