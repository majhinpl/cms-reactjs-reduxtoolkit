import { Link } from "react-router-dom";

const Navbar = () => {
  const status = "authenticated";

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
          <Link to="" className="hover:underline dropDown">
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
            <Link to="/register" className="capitalize hover:bg-sky-200 py-2">
              Register
            </Link>
            <Link to="/login" className="hover:bg-sky-200 py-2 capitalize">
              Sign in
            </Link>
          </div>
        ) : (
          <div className="auth flex gap-2 ">
            <Link to="/blog/write" className="hover:bg-sky-200 py-2">
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
