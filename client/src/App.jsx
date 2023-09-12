import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home, CreatePost } from "./pages";
import { logo } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-16 object-contain" />
        </Link>
        <div className="bg-purple-50 w-[45%] italic">
          <span>
            👋🏼 Welcome! <br />
            The backend of the application is hosted on <b>Render</b>, so it
            might take a while to load the content. I appreciate your patience
            and hope you enjoy using the app.
          </span>
        </div>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
