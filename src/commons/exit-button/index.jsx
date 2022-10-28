import React from "react";

import "./styles.css";

const ExitButton = ({ setCurrent }) => {
  return <button className="bg-green" onClick={() => setCurrent(null)}>Salir</button>;
};

export default ExitButton;
