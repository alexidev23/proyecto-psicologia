import UpamiIcono from '../assets/img/icons/Icono-pami.svg'
import { useState } from "react"
import { RedesSociales } from "./RedesSociales.jsx"
import { InfoContactoUpami } from "./InfoContactoUpami.jsx"
import { UpamiCursos } from "./UpamiCursos.jsx"

export function Upami () {
  const [activeInfo, setActiveInfo] = useState('cursos')

  const redesSociales = [
    // {
    //   id: 1,
    //   img: 'facebook-icon.svg',
    //   name: 'PAMI',
    //   url: 'https://www.facebook.com/pami.org.ar/',
    //   color: 'blue-700'
    // },
    // {
    //   id: 2,
    //   img: 'instagram_dark-icon.svg',
    //   name: 'pami.org.ar',
    //   url: 'https://www.instagram.com/pami.org.ar?igsh=dDZ1bW44MHB6NXFh',
    //   color: 'blue-700'
    // },
    // {
    //   id: 3,
    //   img: 'gmail-icon.svg',
    //   name: 'consultaspami@pami.org.ar',
    //   url: 'mailto:consultaspami@pami.org.ar',
    //   color: 'blue-700'
    // },
    {
      id: 4,
      img: 'facebook-icon.svg',
      name: 'Secretaría de Extensión - UNC',
      url: 'https://www.facebook.com/unc.extension/',
      color: '#1d4ed8'
    },
    {
      id: 5,
      img: 'instagram_dark-icon.svg',
      name: 'unc.extension',
      url: 'https://www.instagram.com/unc.extension?igsh=cWE1MGVnNmxibWxl',
      color: '#1d4ed8'
    },
    {
      id: 6,
      img: 'gmail-icon.svg',
      name: 'personasmayores@extension.unc.edu.ar',
      url: 'mailto:personasmayores@extension.unc.edu.ar',
      color: '#1d4ed8'
    }
  ]

  const infoContent = {
    cursos: <UpamiCursos />,
    infoContacto: <InfoContactoUpami />,
    redesSociales: <RedesSociales redes={redesSociales}/>
  }
  return (
    <section className="relative">
      <div className="h-[350px] w-full bg-upami bg-no-repeat bg-cover bg-center absolute top-0 -z-10"></div>
      <div className="h-[350px] bg-upami-color flex items-center justify-center gap-10">
        <div className="mx-10 flex items-center gap-4">
          <img src={UpamiIcono} alt="Icono de CEPRAM" height={100} width={100} />
          <h1 className="text-5xl font-bold text-white">UPAMI</h1>
        </div>
        <div className="w-[650px] text-white">
          <h2 className="text-4xl uppercase text-center mb-8 font-bold">UPAMI - Talleres y cursos para adultos mayores</h2>
          <p className="font-medium text-lg">
            Programa que presenta diferentes talleres y cursos universitarios que se llevan a cabo por el convenio existente entre PAMI (Programa de Asistencia Médica Integral) y la UNC (Universidad Nacional de Córdoba). Las inscripciones se hacen de manera virtual a través de la plataforma de inscripciones de extensión, los cursos están dirigidos tanto hacia afiliados como no afiliados a PAMI, son gratuitos y no requieren de estudios previos
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={() => setActiveInfo('cursos')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'cursos' ? 'bg-blue-700' : 'bg-darkBlue'} hover:bg-blue-400 transition-colors`}
        >
          Cursos
        </button>
        <button
          onClick={() => setActiveInfo('infoContacto')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'infoContacto' ? 'bg-blue-700' : 'bg-darkBlue'} hover:bg-blue-400 transition-colors`}
        >
          Info de contacto
        </button>
        <button
          onClick={() => setActiveInfo('redesSociales')}
          className={`w-full py-4 text-white text-xl font-medium uppercase ${activeInfo === 'redesSociales' ? 'bg-blue-700' : 'bg-darkBlue'} hover:bg-blue-400 transition-colors`}
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