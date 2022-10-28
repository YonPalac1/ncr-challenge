import { useEffect, useState } from "react";

import Header from "./commons/header";
import Home from "./commons/home";
import Button from "./commons/button";
import Current from "./commons/current-total";
import ExitButton from "./commons/exit-button";

import getapi from "./utils/fetchApi";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    getapi(setLoading, setCounts);
  }, [current]);

  return (
    <div className="body">
      <Header />
      <Home title={current ? 'Este es tu saldo actual' : 'Selecciona la cuenta a consultar'}>
        {!current ?
          (!loading ? <h2 className="textPrimary">Cargando...</h2> : <Button counts={counts} setCurrent={setCurrent} />) 
          : 
          <Current current={current} />
        }
        <ExitButton setCurrent={setCurrent} />
      </Home>
    </div>
  );
};
export default App;
