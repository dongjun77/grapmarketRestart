import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
      </Switch>
    </div>
  ); //MainPage라고 사용해도 된다. <-> MainPageComponent와 같이 읽는다.
}

export default App;
