import { Fragment } from "react";
import PropTypes from "prop-types";

const App = ({ saludo = "Hello" })=> {
  
  return (
    <Fragment>
      <div>{saludo}</div>
      <p>Aplicación React</p>
    </Fragment>
  );
}

App.propTypes = {
  saludo: PropTypes.string.isRequired
}

export default App;
