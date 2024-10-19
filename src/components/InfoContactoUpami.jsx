import { Phone } from "lucide-react";
import { Globe } from "lucide-react";
import { MapPin } from "lucide-react";

export function InfoContactoUpami () {
  return (
    <div>
      <h3>se puede contactar de dos maneras, tanto a través de PAMI:</h3>
        
      <div>
        <h4>PAMI</h4>
        <div className="flex">
          <div className="flex">
            <MapPin />
            <span>General paz 370, prestaciones sociales en planta baja</span>
          </div>
          <div className="flex">
            <Globe />
            <div>
              <span>
                https://www.pami.org.ar/ (ingresando a la pagina oficial de PAMI, se accede a través de la opción servicios, luego en          Actividades y Programas preventivos; por último haciendo click en Cursos Universitarios UPAMI)
              </span>
              <span>
                https://www.pami.org.ar/talleresycursos/cursos-upami (ingresando directamente a este link)
              </span>
            </div>
          </div>
          <div className="flex">
            <Phone />
            <span>3514131600</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p>
          Como también a través del PROGRAMA PERSONAS MAYORES DE LA SECRETARÍA DE EXTENSIÓN DE LA UNC UNC (proyecto de fortalecimiento institucional, de la secretaría de extensión universitaria de la UNC)
        </p>
        <div className="flex mt-6">
          <div className="flex">
            <MapPin />
            <span>Pabellón Argentina, primer piso, Ala derecha</span>
          </div>
          <div className="flex">
            <Globe />
            <span>https://pfi.seu.unc.edu.ar (ingresar dentro de la sección programa Adultos Mayores)</span>
          </div>
          <div className="flex">
            <Phone />
            <span>5353786</span>
          </div>
        </div>
      </div>
    </div>
  )
}