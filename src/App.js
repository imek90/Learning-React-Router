import { useState } from "react";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Article from "./Pages/Article";
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import PageNotFound from "./Pages/404";

function App() {

  let [isPending, setIsPending] = useState(null);
  let [error, setError] = useState(null);

  return (
    <div className="App">
      {/* your whole application should be wrapped with BrowserRouter component for react-router-dom to work. If we don; */}
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        {/* Following are our routes, or you can say pages. React will display only one page
at a time in the browser. React matches the url in the browser with the path of the following route. */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isPending={isPending}
                setIsPending={setIsPending}
                error={error}
                setError={setError}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            // react has a concept of dynamic paramaters called params.
            // we have :/ then the name of the paramter that has to be dynamic
            path="/article/:id"
            element={
              <Article
                isPending={isPending}
                setIsPending={setIsPending}
                error={error}
                setError={setError}
              />
            }
          />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>

        {isPending && <h1>Fetching Articles...</h1>}
        {error && <h1>{error}</h1>}

        <footer>mike footer</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
