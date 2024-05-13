import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const status = "authenticated";
  const { openSearch, setOpenSearch } = useState(false);
  return (
    <>
      <div className="mx-auto max-w-screen-lg flex items-center uppercase h-[70px] justify-between shadow-md mb-2 ">
        <Link to="/">
          <div className="logo flex items-center font-bold">
            <h2>Stockslify Blog</h2>
          </div>
        </Link>
        <div className="flex gap-3 items-center ">
          <Link to="" className="hover:underline">
            {" "}
            Go to Stockslify
          </Link>
          <Link to="" className="hover:underline">
            Market Analysis
          </Link>
          <Link to="" className="hover:underline">
            Learn
          </Link>

          <search className="">
            <form action="" className="item-center flex">
              <input
                type="search"
                id="movie"
                name="q"
                hidden
                className="outline-none"
              />
              <button type="submit">
                <img
                  src="/search.png"
                  alt="button icon"
                  width={24}
                  height={24}
                  className="bg-white"
                />
              </button>
            </form>
          </search>
        </div>
        <div className="">
          <select name="lang" id="lang">
            <option value="en">En</option>
            <option value="np">Np</option>
          </select>
        </div>

        {status === "authenticated" ? (
          <div className="flex gap-2 ">
            <Link to="/register" className="hover:bg-sky-200 py-2">
              Sign up
            </Link>
            <Link to="/login" className="hover:bg-sky-200 py-2">
              Sign in
            </Link>
          </div>
        ) : (
          <div className="auth flex gap-2 ">
            <Link to="/write" className="hover:bg-sky-200 py-2">
              Write blog
            </Link>
            <Link to="/register" className="hover:bg-sky-200 py-2">
              Sign out
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
