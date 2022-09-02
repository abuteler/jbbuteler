import "./Ensayo.scss";

export default function Ensayo({ ensayo }) {
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
