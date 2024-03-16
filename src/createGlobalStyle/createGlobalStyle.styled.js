import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

@font-face {
  font-family: 'Basis-Grotesque-Pro-Bolt';
  src: url('../fonts/BasisGrotesquePro-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Basis-Grotesque-Pro-Medium';
  src: url('../fonts/BasisGrotesquePro-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Basis-Grotesque-Pro-Regular';
  src: url('../fonts/BasisGrotesquePro-Regular.ttf') format('truetype');
}

ul {
  list-style: none;
}

li {
  text-decoration: none;
}

ul,
h2,
h3,
p{
  margin: 0;
  padding: 0;
}

body {
  
}

.NavLink,
button{
  cursor: pointer;
}

select {
  -webkit-appearance: none;
}

div[id="root"]{

}
`;

export default GlobalStyled;
