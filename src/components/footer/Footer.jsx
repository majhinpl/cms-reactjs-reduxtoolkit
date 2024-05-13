import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto flex py-2 max-w-screen-lg">
        <div className="flex-1 text-sm">
          <p className="text-start">
            The information presented is the most up to date at the time of
            publication.
          </p>
          <p className="text-start">2024 Stockslify Official Blog</p>
        </div>
        <div className="flex-1 flex gap-2 items-center justify-center py-1">
          <Link to="">
            <img
              src="/linkedin.png"
              alt="linkedin logo"
              width={24}
              height={24}
              className="hover:backdrop-opacity-75"
            />
          </Link>
          <Link to="">
            <img src="/github.png" alt="github logo" width={24} height={24} />
          </Link>
          <Link to="">
            <img
              src="/facebook.png"
              alt="facebook logo"
              width={24}
              height={24}
            />
          </Link>
          <Link to="">
            <img src="/youtube.png" alt="youtube logo" width={24} height={24} />
          </Link>
          <Link to="">
            <img src="/twitter.png" alt="twitter logo" width={24} height={24} />
          </Link>
        </div>
        <div className="flex-1 cursor-pointer flex justify-center items-center py-1 gap-1">
          <p className="uppercase text-sm">back to top</p>
          <img
            src="/backtotop.png"
            alt="back to top icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
