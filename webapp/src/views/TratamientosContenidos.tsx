import TituloSeccion from '../components/TituloSeccion';

import pedir_ayuda from '../assets/tratamientos/pedir_ayuda.jpg';
import adicciones from '../assets/tratamientos/adicciones.jpg';
import ansiedad from '../assets/tratamientos/ansiedad.jpg';
import ataques_panico from '../assets/tratamientos/ataques_panico.jpg';
import fobias from '../assets/tratamientos/fobias.jpg';
import duelos from '../assets/tratamientos/duelos.jpg';
import orientacion_padres from '../assets/tratamientos/orientacion_padres.jpg';
import problemas_pareja from '../assets/tratamientos/problemas_pareja.jpg';
import busqueda_sentido from '../assets/tratamientos/busqueda_sentido.jpg';

import './TratamientosContenidos.scss';

export default function TratamientosContenidos () {
  return (
    <div id="ContainerTratamientos">
      <TituloSeccion titulo="Tratamimentos" />
      <div className="TipoTratamiento">
        <h3>Pedir ayuda es el primer paso.</h3>
        <img src={pedir_ayuda} alt="Pedir ayuda." />
        <p>
          Terapia On Line y Presencial.
        </p>
        <p>
          Asi como no debe nadie automedicarse, tampoco se debe auto-diagnosticar. A veces hay tendencias a maximizar ciertas circunstancias y otras veces a minimizar otras. En búsqueda del ideal, se debe consultar a un profesional. Nadie tiene todas las respuestas para sus propias preguntas. La relación que se crea con un terapeuta, es un principio en la búsqueda de las mismas.
        </p>
      </div>
      <div className="TipoTratamiento">
        <h3>Adicciones.</h3>
        <img src={adicciones} alt="Adicciones." />
        <p>
          Las adicciones tienen comunes denominadores en los que padecen éste problema. Yo prefiero llamarlo problema, ya que todo problema, tiene solución. Si no, no sería problema. Sería algo con el mismo pronóstico negativo. La solución requiere de mucho esfuerzo, por parte del que padece alguna adicción, como los que que conviven con esa persona o mantienen un vínculo estrecho.
        </p>
      </div>
      <div className="TipoTratamiento">
        <h3>Ansiedad.</h3>
        <img src={ansiedad} alt="Ansiedad." />
        <p>
          Dentro de las reacciones emocionales normales necesarias para la supervivencia de los individuos y de nuestra especie tenemos la ansiedad. Aunque, las reacciones de ansiedad pueden alcanzar niveles excesivamente altos o pueden ser poco adaptativas en determinadas situaciones. En esos casos la reacción deja de ser normal y se manifiesta con mucho displacer, al punto que a esa persona le es necesario solicitar ayuda.
        </p>
      </div>
      <div className="TipoTratamiento">
        <h3>Ataques de Panico.</h3>
        <img src={ataques_panico} alt="Ataques de Panico." />
        <p>
          Un ataque de pánico es la aparición súbita de miedo intenso o de malestar intenso que alcanza su máxima expresión en minutos. Pero esa situación requiere de mayor análisis para un diagnóstico correcto.
        </p>
      </div>
      <div className="TipoTratamiento">
        <h3>Fobias.</h3>
        <img src={fobias} alt="Fobias." />
        <p>
          En las fobias específicas se da un miedo intenso y persistente que es excesivo o irracional y es desencadenado por la presencia o anticipación de objetos o situaciones específicos: animales, lugares cerrados, alturas, oscuridad, tormentas, vuelos, etc.
        </p>
      </div>
      <div className="TipoTratamiento">
        <h3>Duelos.</h3>
        <img src={duelos} alt="Duelos." />
        <p>
          El dolor que provoca la pérdida de un ser querido, a veces resulta muy dificil de sobrellevar. Es el caso por caso y puede durar meses, hasta años. Acompañar a las personas que están pasando por un duelo, a veces requiere de ayuda profesional.
        </p>
      </div>
      <div className="TipoTratamiento">
        <h3>Orientacion a padres.</h3>
        <img src={orientacion_padres} alt="Orientacion a padres." />
        <p>
          Nadie nace sabiendo ser mamá o papá. Es como se dice, un título que se otorga con el nacimiento de la hija o del hijo, pero sin ninguna experiencia. Despierta emociones y frustraciones difíciles de elaborar y hay quienes inteligentemente buscan asesoramiento profesional, para que sus hijas o hijos no sufran las consecuencias de sus errores.
        </p>
      </div>
      <div className="TipoTratamiento">
        <h3>Problemas de pareja.</h3>
        <img src={problemas_pareja} alt="Problemas de pareja." />
        <p>
          Uno de los más comunes motivos de consulta, los problemas de pareja. Llega el día, que cansados de recibir sugerencias diversas y hasta opuestas, de familiares y amistades, hay personas que deciden solicitar asesoramiento profesional. Lo bien que hacen.
        </p>
      </div>
      <div className="TipoTratamiento">
        <h3>Busqueda de sentido a la vida.</h3>
        <img src={busqueda_sentido} alt="Busqueda de sentido a la vida." />
        <p>
          Entre ¿de dónde venimos? y ¿a dónde vamos? está la propia existencia. Para algunos, llega un momento de sus vidas, que eso también está encerrado entre signos de preguntas. ¿Qué es lo que quiero? ¿A dónde quiero ir? ¿A dónde quiero llegar? ¿Con quién quiero ir? ¿Con quien no? etc. Y no encontrar ninguna respuesta o ir cambiando todo el tiempo las mismas, traen sufrimiento. Cuando uno toma conciencia de que es así, lo mejor que puede hacer, es solicitar ayuda.
        </p>
      </div>
    </div>
  )
}