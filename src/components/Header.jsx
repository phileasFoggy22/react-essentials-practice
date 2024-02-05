import image from "../assets/investment-calculator-logo.png";
export default function Header({ name }) {
  return (
    <header id="header">
      <img src={image} type="image/png" />
      <h1>{name}</h1>
    </header>
  );
}
