import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lista from "../useCases/pessoa/Lista";
import Form from "../useCases/pessoa/Form";
import Source from "../useCases/pessoa/Source";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/form-pessoa" element={<Form />} />
        <Route exact path="/" element={<Lista />} />
        <Route exact path="/source" element={<Source />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
