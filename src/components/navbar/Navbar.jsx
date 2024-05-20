import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadToken, setLogOut } from "../../../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(loadToken());
  }, [dispatch]);

  return (
    <>
      <div className="mx-auto max-w-screen-xg bg-slate-200 rounded-full sticky top-2 flex items-center uppercase px-3 py-2 justify-around shadow-md mb-4 z-50">
        <Link to="/">
          <div className="logo flex items-center font-bold">
            <h2>Stockslify Blog</h2>
          </div>
        </Link>
        <div className="flex gap-3 items-center ">
          <Link to="" className="hover:underline">
            {" "}
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:underline">Market Analysis</button>
            {dropdownOpen && (
              <div className="absolute top-full mt-1 shadow-lg rounded-md capitalize">
                <Link
                  to="/technicalAnalysis"
                  className="block px-4 py-2 hover:bg-slate-200 w-fit"
                >
                  Technical Analysis
                </Link>
                <Link
                  to="/fundaAnalysis"
                  className="block px-4 py-2 hover:bg-slate-200"
                >
                  Fundamental Analysis
                </Link>
                <Link
                  to="/indicators"
                  className="block px-4 py-2 hover:bg-slate-200"
                >
                  Indicators
                </Link>
              </div>
            )}
          </div>
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

        {isAuthenticated ? (
          <div className="flex gap-2 ">
            <Link to="/blog/write" className="hover:bg-sky-200 py-2">
              Write blog
            </Link>
            <button
              onClick={() => dispatch(setLogOut())}
              className="hover:bg-sky-200 py-2"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="auth flex gap-2 ">
            <Link to="/register" className="capitalize hover:bg-sky-200 py-2">
              Register
            </Link>
            <Link to="/login" className="hover:bg-sky-200 py-2 capitalize">
              Sign in
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
