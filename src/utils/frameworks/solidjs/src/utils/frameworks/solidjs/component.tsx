export const MyComponentTemplate = `
import { Component } from "solid-js";

const MyComponent: Component = () => {
  return <div>Hello SolidJS</div>;
};

export default MyComponent;
`;

export const ButtonTemplate = `
import { Component } from "solid-js";

type ButtonProps = {
  label: string;
};

const Button: Component<ButtonProps> = (props) => {
  return <button>{props.label}</button>;
};

export default Button;
`;

export const CardTemplate = `
import { Component } from "solid-js";

const Card: Component = (props) => {
  return <div>{props.children}</div>;
};

export default Card;
`;

export const NavbarTemplate = `
import { Component } from "solid-js";

const Navbar: Component = () => {
  return <nav>Navbar</nav>;
};

export default Navbar;
`;
