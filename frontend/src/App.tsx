import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/home/home";

import { MyFooter } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

import style from "./App.module.scss";
import { setTheme, theme } from "./util/theme/theme";
import { MyLayout } from "./components/anti/Layout/MyLayout";
// the root layout of the app
function App() {
  // const [count, setCount] = useState(0);
  setTheme(theme.LIGHT);
  console.log(style);
  return (
    <BrowserRouter>
      <Navbar />
        <main className={style.main}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
