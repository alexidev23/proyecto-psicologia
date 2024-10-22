import { Dumbbell, Drama, Languages, ChefHat, Computer, Brain, Cake, Guitar, Camera, HeartPulse, CirclePlus, Library, Plus, Pen, CookingPot, Brush, Mic, Video, NotepadText, Smile, LayoutPanelLeft, Waypoints, Smartphone, Book, Hammer, Monitor, Users, MicVocal, Palette } from "lucide-react";
import { BiMemoryCard } from "react-icons/bi";
import { CgGym, CgMusicSpeaker } from "react-icons/cg";
import { FaChess, FaSwimmer, FaWalking } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { GiInnerSelf, GiMeditation, GiWool } from "react-icons/gi";
import { IoIosMusicalNote } from "react-icons/io";
import { MdOutlineYard, MdSportsGymnastics } from "react-icons/md";
import { TbYoga } from "react-icons/tb";
import BanderaPortugal from '../assets/img/banderas/pt.png'
import BanderaEEUU from '../assets/img/banderas/us.png'
import BanderaItalia from '../assets/img/banderas/it.png'
import BanderaFrancia from '../assets/img/banderas/fr.png'
import { PiShovelBold } from "react-icons/pi";
import { GoHistory } from "react-icons/go";

export function IlliaCursos() {
  const categorias = [
    {
      nombre: "Tecnología",
      icon: Monitor,
      cursos: [
        {
          icon: <Smartphone />,
          name: "Uso de celulares"
        },
        {
          icon: <Computer />,
          name: "Computación"
        },
        {
          icon: <Waypoints />,
          name: "Redes sociales"
        }
      ]
    },
    {
      nombre: "Cocina y Alimentación",
      icon: ChefHat ,
      cursos: [
        {
          icon: <Cake />,
          name:"Pastelería"
        }, 
        {
          icon: <CookingPot />,
          name:"Cocina saludable"
        }
      ]
    },
    {
      nombre: "Estimulación Cognitiva",
      icon: Brain,
      cursos: [
        {
          icon: <BiMemoryCard />,
          name: "Memoria"
        }, 
        {
          icon: <FaChess />,
          name: "Ajedrez"
        }
      ]
    },
    {
      nombre: "Artísticos",
      icon: Palette,
      cursos: [
        {
          icon: <Brush />,
          name:"Pintura"
        }, 
        {
          icon: <LayoutPanelLeft />,
          name:"Decoración"
        }, 
        {
          icon:<GiWool />,
          name:"Tejido"
        }, 
        {
          icon: <Mic />,
          name:"Canto"
        }, 
        {
          icon: <Guitar />,
          name:"Guitarra"
        }
      ]
    },
    {
      nombre: "Teatro y Arte",
      icon: Drama,
      cursos: [
        {
          icon: <Drama />,
          name:"Teatro"
        }, 
        {
          icon: <Book />,
          name:"Lectura"
        }, 
        {
          icon: <NotepadText/>,
          name:"Escritura creativa y terapéutica"
        }, 
        {
          icon: <Camera/>,
          name:"Fotografía"
        }, 
        {
          icon: <FaRadio />,
          name:"Radio"
        }, 
        {
          icon: <Video />,
          name:"Cine"
        }
      ]
    },
    {
      nombre: "Actividad Física",
      icon: Dumbbell,
      cursos: [
        {
          icon:<FaSwimmer />,
          name:"Acuagym"
        }, 
        {
          icon:<CgMusicSpeaker />,
          name:"Danza"
        }, 
        {
          icon:<CgGym />,
          name:"Gimnasia postural"
        }, 
        {
          icon:<MdSportsGymnastics />,
          name:"Pilates"
        }, 
        {
          icon:<TbYoga />,
          name:"Yoga"
        }, 
        {
          icon:<FaWalking />,
          name:"Caminatas"
        }
      ]
    },
    {
      nombre: "Desarrollo Personal",
      icon: Users,
      cursos: [
        {
          icon: <GiMeditation />,
          name: "Meditación"
        }, 
        {
          icon: <Smile />,
          name: "Inteligencia emocional"
        }, 
        {
          icon: <HeartPulse />,
          name: "Vínculos saludables"
        }, 
        {
          icon: <GiInnerSelf />,
          name: "Autoconocimiento"
        }
      ]
    },
    
    {
      nombre: "Danzas y Ritmos, Música, Canto",
      icon: MicVocal,
      cursos: [
        {
          icon: <IoIosMusicalNote />,
          name:"Ritmos latinos"
        }, 
        {
          icon: <CirclePlus />,
          name:"Tango"
        }, 
        {
          icon: <CirclePlus />,
          name:"Folclore"
        }, 
        {
          icon: <CirclePlus />,
          name:"Zumba"
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
    },
    {
      nombre: "Arte, Manualidades y Oficio",
      icon: Hammer,
      cursos: [
        {
          icon: <PiShovelBold />,
          name: "Jardinería"
        }, 
        {
          icon: <MdOutlineYard />,
          name: "Huerta doméstica"
        },
        {
          icon: <Hammer/>,
          name: "Carpintería"
        } 
      ]
    },
    {
      nombre: "Historia, Literatura y Escritura",
      icon: Book,
      cursos: [
        {
          icon: <GoHistory />,
          name: "Historia"
        }, 
        {
          icon: <Library />,
          name: "Literatura"
        }, 
        {
          icon: <Pen />,
          name: "Escritura"
        }]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-medium text-center mb-8">
        La modalidad de los talleres que se ofrecen, se pueden cursar de manera <span className="font-bold">virtual</span> o <span className="font-bold">presencial</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <div key={categoria.nombre} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-darkGreen text-white p-4">
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
        <div className="flex items-center justify-center">
          <a href='https://elillia.cba.gov.ar/Portal/Cursos' target="_blank" rel="noopener noreferrer" className="bg-darkGreen text-white p-4 h-20 rounded-full flex items-center justify-center w-full">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Plus size={30} />
              Más información
            </h2>
          </a>
        </div>
      </div>
    </div>
  )
}