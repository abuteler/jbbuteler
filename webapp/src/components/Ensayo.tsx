import "./Ensayo.scss";

interface EnsayoProps {
  ensayo: {
    titulo: string;
    texto: string;
    fecha: string;
  }
}

export default function Ensayo({ ensayo }: EnsayoProps) {
  const { titulo, texto, fecha } = ensayo;
  return (
    <div className="ensayo">
      <h1>{titulo}</h1>
      <h2>Por el Lic. Juan Bautista Buteler.</h2>
      <p className="fecha">{fecha}</p>
      <p>{texto}</p>
    </div>
  );
}
