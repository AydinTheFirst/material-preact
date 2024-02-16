import { render } from "preact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/roboto/700.css";

import "./styles/index.css";
import "./styles/bs.css";

import { App } from "./pages/App.tsx";

render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </Router>
  </>,
  document.getElementById("app")!
);
