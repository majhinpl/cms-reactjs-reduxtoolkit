import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const status = "unauthenticated";
  const { openSearch, setOpenSearch } = useState(false);
  return (
    <>
      <div className="flex items-center uppercase h-[70px] justify-around px-1 shadow-md mb-2">
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
        {status === "authenticated" && (
          <div className="">
            <Link to="">Write blog</Link>
          </div>
        )}
        <div className="auth flex gap-2">
          {status === "authenticated" ? (
            <Link to="">Login</Link>
          ) : (
            <Link to="">SignUp</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
