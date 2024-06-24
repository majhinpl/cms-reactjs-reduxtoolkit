import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { token: user } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setIsLogin(!!token || !user);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xg bg-slate-200 rounded-full sticky top-2 flex items-center uppercase px-3 py-3 justify-around shadow-md mb-4 z-50 gap-2">
        <Link to="/">
          <div className="logo flex items-center font-bold">
            <h2>Stockslify Blog</h2>
          </div>
        </Link>
        <div className="flex gap-3 items-center ">
          <Link to="/" className="hover:underline p-2">
            {" "}
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:underline  p-2">Market Analysis</button>
            {dropdownOpen && (
              <div className="absolute top-full mt-1 shadow-lg rounded-md capitalize">
                <Link
                  to="category/technicalAnalysis"
                  className="block px-4 py-2 hover:bg-slate-200 w-fit"
                >
                  Technical Analysis
                </Link>
                <Link
                  to="category/fundaAnalysis"
                  className="block px-4 py-2 hover:bg-slate-200"
                >
                  Fundamental Analysis
                </Link>
                <Link
                  to="category/indicators"
                  className="block px-4 py-2 hover:bg-slate-200"
                >
                  Indicators
                </Link>
              </div>
            )}
          </div>
          <Link to="" className="hover:underline p-2">
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
                  className=""
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

        {isLogin ? (
          <div className="flex gap-2 ">
            <Link to="/blog/write" className="hover:bg-sky-200 py-2 capitalize">
              Write
            </Link>
            <button
              onClick={handleLogout}
              className="hover:bg-sky-200 py-2 capitalize"
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
