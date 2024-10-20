import { Brain, Heart, Palette, Coffee, Dumbbell, Smartphone, Languages, Library, MemoryStick, Speech, Smile, CirclePlus,
  MessageCircle, Theater, Mic, Camera, ScrollText, FileMusic, Video, ChefHat, BicepsFlexed, SmartphoneIcon, Laptop, Drama, Plus} from 'lucide-react'
import { MdMuseum } from 'react-icons/md'
import { FaSwimmer, FaYinYang } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import BanderaPortugal from '../assets/img/banderas/pt.png'
import BanderaEEUU from '../assets/img/banderas/us.png'
import BanderaItalia from '../assets/img/banderas/it.png'
import BanderaFrancia from '../assets/img/banderas/fr.png'

export function CepramCursos() {

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

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-medium text-center mb-8">
        Los talleres que brinda se pueden cursar de manera <span className='font-bold'>presencial</span> o <span className='font-bold'>virtual</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <div key={categoria.nombre} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-cepram-color text-white p-4">
              <h2 className="text-xl font-semibold flex items-center">
                <categoria.icon className="mr-2 h-6 w-6" />
                {categoria.nombre}
              </h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {categoria.cursos.map((curso) => (
                  <div key={curso.name} className="bg-gray-100 rounded p-2 text-center text-sm flex items-center gap-2">
                    {curso.icon}
                    {curso.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className='flex items-center justify-center'>
          <a href='#' target="_blank" rel="noopener noreferrer" className="bg-cepram-color text-white p-4 h-20 rounded-full flex items-center justify-center w-full">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Plus size={30} />
              Mas informacion
            </h2>
          </a>
        </div>
      </div>
    </div>
  )
}