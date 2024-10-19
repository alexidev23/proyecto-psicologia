import { useState } from 'react'
import { Smartphone, Book, Users, Flower2, Music, Utensils, Palette, Brain, Music2, Dumbbell } from 'lucide-react'
import { CirclePlus } from 'lucide-react'
import { X } from 'lucide-react'


export default function UpamiCursos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

  const categorias = [
    {
      nombre: "Tecnología",
      icon: Smartphone,
      cursos: ["Uso de tecnología", "Computación"]
    },
    {
      nombre: "Narrativa",
      icon: Book,
      cursos: ["Alfabetización", "Literatura", "Escritura", "Lectura y narración"]
    },
    {
      nombre: "Otros",
      icon: Users,
      cursos: ["Servicios y prestaciones de PAMI", "Derechos de las personas mayores", "Ciudadanía", "Fortalecimiento de las organizaciones de las personas mayores"]
    },
    {
      nombre: "Jardinería",
      icon: Flower2,
      cursos: ["Huerta"]
    },
    {
      nombre: "Música y canto",
      icon: Music,
      cursos: ["Coro"]
    },
    {
      nombre: "Gastronomía",
      icon: Utensils,
      cursos: ["Arte culinario", "Nutrición", "Alimentación saludable"]
    },
    {
      nombre: "Teatro y arte",
      icon: Palette,
      cursos: ["Tejido", "Pintura", "Artesanías", "Manualidades"]
    },
    {
      nombre: "Juegos de mesa",
      icon: CirclePlus,
      cursos: ["Ajedrez"]
    },
    {
      nombre: "Memoria",
      icon: Brain,
      cursos: ["Estimulación cognitiva", "Psicología", "Reflexión"]
    },
    {
      nombre: "Danza",
      icon: Music2,
      cursos: ["Folklore", "Tango"]
    },
    {
      nombre: "Gimnasia",
      icon: Dumbbell,
      cursos: ["Actividad física", "Gimnasia", "Zumba", "Yoga", "Relajación"]
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
      <h4 className="text-3xl font-bold text-center mb-8">La modalidad de los talleres que se brindan es presencial, en todos los casos:</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categorias.map((categoria) => (
          <button
            key={categoria.nombre}
            onClick={() => handleCategoriaClick(categoria)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${
              categoriaSeleccionada?.nombre === categoria.nombre
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
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
                <li key={curso} className="mb-2">{curso}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}