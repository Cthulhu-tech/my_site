import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "./views/home/home";
import "./style/globalStyle.scss";

export const App = () => {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView/>}/>
    </Routes>
  </BrowserRouter>

}
