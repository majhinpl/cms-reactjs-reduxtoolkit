import React from "react";
import { Link } from "react-router-dom";

const Card = ({blog}) => {
  console.log(blog);
  return (
    <>
      <div className="container mx-auto flex">
        <div className="flex flex-col md:block shadow-black shadow-sm gap-10 p-2 ">
          <div className="image">
            <img
              src={blog.imageUrl}
              alt="Market analysis picture"
              className="object-cover rounded-md mb-3 h-[200px] "
            />
          </div>
          <div className="content flex flex-col flex-5">
            <div className="category ">
              <Link to="">
                <span className="items-start flex mb-3">Market Analysis</span>
              </Link>
            </div>
            <div className="title">
              <h1 className="text-start font-bold mb-3">
                {blog.title}
              </h1>
            </div>
            <div className="desc">
              <p className="font-light text-start mb-4">
                {blog.description}
              </p>
            </div>
            <Link to="/blogDetail">
              <button className="cursor-pointer border-[1px] border-green-400 text-teal-400 hover:bg-green-400 hover:border-white hover:text-black p-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
