import { Phone } from "lucide-react";
import { Globe } from "lucide-react";
import { MapPin } from "lucide-react";

export function InfoContactoUpami () {
  return (
    <div>
      <h3 className="font-medium">Se puede contactar de dos maneras, tanto a través de PAMI:</h3>
      <div className="px-6">
        <h4 className="font-bold text-2xl mt-4">PAMI:</h4>
        <div className="flex flex-col gap-3">
          <a href="https://maps.app.goo.gl/19THgGU2uAF8kwJn7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 hover:text-blue-600">
            <MapPin />
            <span>General paz 370 (Prestaciones sociales en planta baja)</span>
          </a>
          <div>
            <div className="flex flex-col lg:flex-row gap-4">
              <a href="https://www.pami.org.ar/" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:flex-row gap-2 items-center hover:text-blue-600">
                <Globe />
                Pagina PAMI
              </a>
              <div>
                (Ingresando a la pagina oficial de PAMI, se accede a través de la opción servicios, luego en Actividades y Programas preventivos; por último haciendo click en Cursos Universitarios UPAMI)
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <a href="https://www.pami.org.ar/talleresycursos/cursos-upami" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:flex-row gap-2 items-center hover:text-blue-600 text-center">
                <Globe />
                Pagina UPAMI
              </a>
              <div>
                (ingresando directamente a este link) 
              </div>
            </div>
          </div>
          <a href="tel:+543514131600" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 hover:text-blue-600">
            <Phone />
            <span>3514131600</span>
          </a>
        </div>
      </div>

      <div className="mt-6 px-6">
        <p className="font-medium">
          Como también a través del PROGRAMA PERSONAS MAYORES DE LA SECRETARÍA DE EXTENSIÓN DE LA UNC UNC (proyecto de fortalecimiento institucional, de la secretaría de extensión universitaria de la UNC):
        </p>
        <div className="mt-4">
          <a href="https://maps.app.goo.gl/w6ADCXrJ6Wn3eC5N6" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:flex-row items-center gap-2 hover:text-blue-600">
            <MapPin />
            <span>Pabellón Argentina (Primer piso, a la derecha)</span>
          </a>
          <a href="https://pfi.seu.unc.edu.ar/" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:flex-row items-center gap-2 mt-4 hover:text-blue-600">
            <Globe />
            <span>https://pfi.seu.unc.edu.ar (Ingresar dentro de la sección programa Adultos Mayores)</span>
          </a>
          <a href="tel:+545353786" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 hover:text-blue-600">
            <Phone />
            <span>5353786</span>
          </a>
        </div>
      </div>
    </div>
  )
}