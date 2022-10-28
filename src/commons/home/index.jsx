import React from "react";

const Home = ({ children, title }) => {
  return (
    <div>
      <p className="textSecondary">Consulta de Saldo</p>
      <h2 className="textPrimary">{title}</h2>
      {children}
    </div>
  );
};

export default Home;
