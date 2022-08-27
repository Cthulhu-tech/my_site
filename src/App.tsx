import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layouts } from "./components/layouts";
import { HomeView } from "./views/home/home";
import "./style/globalStyle.scss";

export const App = () => {

  return <BrowserRouter>
    <Routes>
      <Route element={<Layouts/>}>
        <Route path="/">
          <Route index element={<HomeView/>}/>
        </Route>
        <Route path="/project" element={<HomeView/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

}
