import { Dumbbell } from "lucide-react";
import { Drama } from "lucide-react";
import { Languages } from "lucide-react";
import { ChefHat } from "lucide-react";
import { Brain } from "lucide-react";
import { Book } from "lucide-react";
import { Hammer } from "lucide-react";
import { Monitor } from "lucide-react";
import { Users } from "lucide-react";
import { MicVocal } from "lucide-react";
import { Palette } from "lucide-react";

export default function IlliaCursos() {
  const categorias = [
    {
      nombre: "Artísticos",
      icon: Palette,
      cursos: ["Pintura", "Decoración", "Tejido", "Canto", "Guitarra"]
    },
    {
      nombre: "Danzas y Ritmos, Música, Canto",
      icon: MicVocal,
      cursos: ["Ritmos latinos", "Tango", "Folklore", "Zumba"]
    },
    {
      nombre: "Estimulación Cognitiva",
      icon: Brain,
      cursos: ["Memoria", "Ajedrez"]
    },
    {
      nombre: "Actividad Física",
      icon: Dumbbell,
      cursos: ["Acuagym", "Danza", "Gimnasia postural", "Pilates", "Yoga", "Caminatas"]
    },
    {
      nombre: "Desarrollo Personal",
      icon: Users,
      cursos: ["Meditación", "Inteligencia emocional", "Vínculos saludables", "Autoconocimiento"]
    },
    {
      nombre: "Teatro y Arte",
      icon: Drama,
      cursos: ["Teatro", "Lectura", "Escritura creativa y terapéutica", "Fotografía", "Radio", "Cine"]
    },
    {
      nombre: "Tecnología",
      icon: Monitor,
      cursos: ["Uso de celulares", "Computación", "Redes sociales"]
    },
    {
      nombre: "Idiomas",
      icon: Languages,
      cursos: ["Inglés", "Italiano", "Portugués", "Francés"]
    },
    {
      nombre: "Arte, Manualidades y Oficio",
      icon: Hammer,
      cursos: ["Carpintería", "Jardinería", "Huerta doméstica"]
    },
    {
      nombre: "Cocina y Alimentación",
      icon: ChefHat ,
      cursos: ["Pastelería", "Cocina saludable"]
    },
    {
      nombre: "Historia, Literatura y Escritura",
      icon: Book,
      cursos: ["Historia", "Literatura", "Escritura"]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">La modalidad de los talleres que se ofrecen, se pueden cursar de manera virtual o presencial
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <div key={categoria.nombre} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h2 className="text-xl font-semibold flex items-center">
                <categoria.icon className="mr-2 h-6 w-6" />
                {categoria.nombre}
              </h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {categoria.cursos.map((curso) => (
                  <div key={curso} className="bg-gray-100 rounded p-2 text-center text-sm">
                    {curso}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}