import { useState } from 'react'
import { Brain, Heart, Palette, Coffee, Dumbbell, Smartphone, Languages, Library, MemoryStick, Speech, Smile, CirclePlus,
  MessageCircle, Theater, Mic, Camera, ScrollText, FileMusic, Video, ChefHat, BicepsFlexed, SmartphoneIcon, Laptop } from 'lucide-react'
import { MdMuseum } from 'react-icons/md'
import { FaSwimmer, FaYinYang } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import BanderaPortugal from '../assets/img/banderas/pt.png'
import BanderaEEUU from '../assets/img/banderas/us.png'
import BanderaItalia from '../assets/img/banderas/it.png'
import BanderaFrancia from '../assets/img/banderas/fr.png'
import { Drama } from 'lucide-react'
import { X } from 'lucide-react'

export function CepramCursos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

  const categorias = [
    {
      nombre: "Cognición",
      icon: Brain,
      cursos: [
        {
          icon: <Drama />,
          name:"Gimnasia cerebral"
        },
        {
          icon: <Brain />,
          name: "Entrenamiento cognitivo"
        },
        {
          icon: <Library />,
          name: "Intelectual"
        },
        {
          icon: <MemoryStick />,
          name: "De la memoria"
        }
      ]
    },
    {
      nombre: "Bienestar psicológico",
      icon: Heart,
      cursos: [
        {
          icon: <Speech />,
          name: "Psicología"
        },
        {
          icon: <Smile />, 
          name: "Emociones"
        },
        {
          icon: <CirclePlus />, 
          name: "Miedos y temores"
        },
        {
          icon: <MessageCircle />, 
          name: "Prejuicios y mitos"
        }
        , 
      ]
    },
    {
      nombre: "Expresión artística",
      icon: Palette,
      cursos: [
        {
          icon: <Theater />, 
          name:"Teatro"
        },
        {
          icon: <Mic />, 
          name: "Canto"
        },
        {
          icon: <Camera />, 
          name: "Fotografía"
        },
        {
          icon: <ScrollText />, 
          name: "Escritura"
        },
        {
          icon: <FileMusic />, 
          name:"Coro"
        },
        {
          icon: <CirclePlus />, 
          name: "Tango y folclore"
        },
        {
          icon: <Video />, 
          name:"Cine y películas"
        }
      ]
    },
    {
      nombre: "Cultura y buen vivir",
      icon: Coffee,
      cursos: [
        {
          icon: <ChefHat />,
          name: "Gastronomía"
        },
        {
          icon: <MdMuseum />,
          name: "Museos"
        }
      ]
    },
    {
      nombre: "Bienestar físico",
      icon: Dumbbell,
      cursos: [
        {
          icon: <BicepsFlexed />,
          name: "Gimnasia funcional"
        },
        {
          icon: <FaSwimmer />,
          name: "Natación"
        },
        {
          icon: <GiMeditation />,
          name: "Yoga y meditación"
        },
        {
          icon: <FaYinYang />,
          name: "Tai chi"
        }
      ]
    },
    {
      nombre: "Tecnología",
      icon: Smartphone,
      cursos: [
        {
          icon: <Laptop />,
          name: "Computación"
        },
        {
          icon: <SmartphoneIcon />,
          name: "Celulares y redes sociales"
        }
      ]
    },
    {
      nombre: "Idiomas",
      icon: Languages,
      cursos: [
        {
          icon: <img src={BanderaPortugal} alt='Bandera de Portugal' height={20} width={20}/>,
          name: "Portugués", 
        },
        {
          icon: <img src={BanderaItalia} alt='Bandera de Italia' height={20} width={20} />,
          name: "Italiano", 
        },
        {
          icon: <img src={BanderaEEUU} alt='Bandera de Estados Unidos' height={20} width={20} />,
          name: "Inglés", 
        }, 
        {
          icon: <img src={BanderaFrancia} alt='Bandera de Francia' height={20} width={20} />,
          name: "Francés"
        }        
      ]
    }
  ]

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria)
  }

  const cerrarPanel = () => {
    setCategoriaSeleccionada(null)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categorias.map((categoria) => (
          <button
            key={categoria.nombre}
            onClick={() => handleCategoriaClick(categoria)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${
              categoriaSeleccionada?.nombre === categoria.nombre
                ? 'bg-cepram-color text-white'
                : 'bg-gray-100 hover:bg-purple-200'
            }`}
          >
            <categoria.icon className="w-12 h-12 mb-2" />
            <span className="text-center text-sm">{categoria.nombre}</span>
          </button>
        ))}
      </div>
      {categoriaSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={cerrarPanel}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar panel"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <categoriaSeleccionada.icon className="w-6 h-6 mr-2" />
              {categoriaSeleccionada.nombre}
            </h2>
            <ul className="list-disc list-inside">
              {categoriaSeleccionada.cursos.map((curso) => (
                <li key={curso.name} className="mb-2 list-none flex gap-2 items-center">
                  {curso.icon}
                  {curso.name}
                  </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}