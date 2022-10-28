import React, { useEffect, useState } from "react";

const Current = ({ current }) => {
  const [type, setType] = useState("");

  useEffect(() => {
    if (current.moneda === "u$s") setType("Dolares");
    if (current.moneda === "$") setType("Pesos");
  }, [current]);

  return (
    <div className="textSecondary">
      <p>Saldo de la cuenta: {current.saldo}</p>
      <p>
        Tipo de cuenta:{" "}
        {current.tipo_letras === "CC" || current.tipo_letras === "Cc" ? "Cuenta corriente" 
        : 
        "Caja de ahorro"} {"en"} {type}
      </p>
      <p>Numero de la cuenta: {current.n}</p>
    </div>
  );
};

export default Current;
