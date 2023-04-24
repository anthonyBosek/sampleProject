import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomePage from "./views/HomePage";
import ContentPage from "./views/ContentPage";
import ExamplePage from "./views/ExamplePage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/example" element={<ExamplePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
