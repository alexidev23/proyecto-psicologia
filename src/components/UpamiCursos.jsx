import { Smartphone, Book, Users, Flower2, Music, Utensils, Palette, Brain, Music2, Dumbbell, ServerCog, Notebook, Guitar, Monitor, Salad, Speech, Plus, CirclePlus} from 'lucide-react'
import { FaAppleAlt, FaBookReader, FaChess, FaMusic, FaReadme } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GiBrain, GiGymBag, GiMeditation, GiWool } from 'react-icons/gi'
import { GrYoga } from 'react-icons/gr'
import { IoMusicalNotesOutline } from 'react-icons/io5'
import { MdDesignServices, MdOutlinePsychology, MdOutlineYard } from 'react-icons/md'
import { PiCookingPotFill } from 'react-icons/pi'
import { TbAbc } from 'react-icons/tb'


export function UpamiCursos() {

  const categorias = [
    {
      nombre: "Jardinería",
      icon: Flower2,
      cursos: [
        {
          icon: <MdOutlineYard />,
          name:"Huerta"
        }
      ]
    },
    {
      nombre: "Música y canto",
      icon: Music,
      cursos: [
        {
          icon: <FaPeopleGroup />,
          name: "Coro"
        }
      ]
    },
    {
      nombre: "Juegos de mesa",
      icon: CirclePlus,
      cursos: [
        {
          icon: <FaChess />,
          name:"Ajedrez"
        }
      ]
    },
    {
      nombre: "Danza",
      icon: Music2,
      cursos: [
        {
          icon: <Guitar />,
          name: "Folklore"
        }, 
        {
          icon: <IoMusicalNotesOutline />,
          name: "Tango"
        }
      ]
    },
    {
      nombre: "Tecnología",
      icon: Smartphone,
      cursos: [
        {
          icon: <ServerCog />,
          name: "Uso de tecnología"
        }, 
          {
          icon: <Monitor />,
          name: "Computación"
        }
      ]
    },
    {
      nombre: "Narrativa",
      icon: Book,
      cursos: [
        {
          icon: <TbAbc />,
          name: "Alfabetización"
        }, 
        {
          icon: <FaBookReader />,
          name: "Literatura"
        }, 
        {
          icon:<Notebook />,
          name:"Escritura"
        }, 
        {
          icon: <FaReadme />,
          name: "Lectura y narración"
        }
      ]
    },    
    {
      nombre: "Gastronomía",
      icon: Utensils,
      cursos: [
        {
          icon:<PiCookingPotFill />,
          name:"Arte culinario"
        }, 
        {
          icon: <FaAppleAlt />,
          name:"Nutrición"
        }, 
        {
          icon: <Salad />,
          name: "Alimentación salludable"
        }
      ]
    },
    {
      nombre: "Teatro y arte",
      icon: Palette,
      cursos: [
        {
          icon: <GiWool />,
          name: "Tejido"
        }, 
        {
          icon: <Palette />,
          name: "Pintura"
        }, 
        {
          icon: <MdDesignServices />,
          name: "Artesanías"
        }, 
        {
          icon: <MdDesignServices />,
          name: "Manualidades"
        }
      ]
    },
    {
      nombre: "Memoria",
      icon: Brain,
      cursos: [
        {
          icon: <GiBrain />,
          name: "Estimulación cognitiva"
        }, 
        {
          icon: <MdOutlinePsychology />,
          name: "Psicología"
        }, 
        {
          icon: <Speech />,
          name: "Reflexión"
        }
      ]
    },
    {
      nombre: "Otros",
      icon: Users,
      cursos: [
        {name: "Servicios y prestaciones de PAMI"}, 
        {name: "Derechos de las personas mayores"}, 
        {name: "Ciudadanía"}, 
        {name: "Fortalecimiento de las organizaciones de las personas mayores"}]
    },
    {
      nombre: "Gimnasia",
      icon: Dumbbell,
      cursos: [
        {
          icon: <Dumbbell />, 
          name:"Actividad física"
        }, 
        {
          icon: <GiGymBag />,
          name: "Gimnasia"
        }, 
        {
          icon: <FaMusic />,
          name: "Zumba"
        }, 
        {
          icon: <GrYoga />,
          name: "Yoga"
        }, 
        {
          icon: <GiMeditation />,
          name: "Relajación"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-medium text-center mb-8">
        La modalidad de los talleres que se brindan es <span className='font-bold'>presencial</span>, en todos los casos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <div key={categoria.nombre} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-darkBlue text-white p-4">
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
          <a href='#' target="_blank" rel="noopener noreferrer" className="bg-darkBlue text-white p-4 h-20 rounded-full flex items-center justify-center w-full">
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