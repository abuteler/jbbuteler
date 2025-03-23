import './TituloSeccion.scss';

interface TituloSeccionProps {
  titulo: string;
}
export default function TituloSeccion ({ titulo }: TituloSeccionProps) {

    return (
      <div className="SectionTitleContainer">
        <h3>{titulo}</h3>
      </div>
    );
}

