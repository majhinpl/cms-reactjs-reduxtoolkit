import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Form = ({ type }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <h1 className="uppercase bg-slate-600 py-2 font-bold text-xl text-white">{type} Blog</h1>
      <form className="mx-auto container writeform relative mt-4">
        <input
          type="text"
          placeholder="Title"
          className="border-none outline-none bg-transparent"
        />
        <input
          type="text"
          placeholder="Sub-Title"
          className="border-none outline-none bg-transparent"
        />

        <select
          id="categ-select"
          name="category"
          required
          className="border-none outline-none"
        >
          <option value="">Select a category</option>
          <option value="market-overview">Market Overview</option>
          <option value="chart-pattern">Chart Patterns</option>
          <option value="market-analysis">Market Analysis</option>
          <option value="technical-analysis">Technical Analysis</option>
          <option value="fundamentle-analysis">Fundamentle Analysis</option>
        </select>

        <div className="flex gap-20 relative  ">
          <button onClick={() => setOpen(!open)}>
            <img
              src="/plus.png"
              alt="plus icon"
              className=" absolute top-0 left-8"
            />
          </button>
          {open && (
            <div className="cursor-pointer">
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden  w-full wrap bg-transparent  bg-[#1a8917] "
              />
              <button>
                <label htmlFor="image"></label>
                <img
                  src="/image.png"
                  alt=""
                  width={16}
                  height={16}
                  className="bg-transparent border-none outline-none"
                />
              </button>
              <button>
                <img
                  src="/external.png"
                  alt=""
                  width={16}
                  height={16}
                  className="bg-transparent border-none outline-none"
                />
              </button>
              <button>
                <img
                  src="/video.png"
                  alt=""
                  width={16}
                  height={16}
                  className="bg-transparent border-none outline-none flex"
                />
              </button>
            </div>
          )}
          <ReactQuill
            theme="bubble"
            placeholder="Tell your story..."
            className="w-[100%] h-[700px]"
          />
        </div>

        <button
          type="submit"
          className="absolute top-20 right-20 bg-[#1a8917] p-2 rounded-md cursor-pointer text-xl border-none"
        >
          {type === "Edit" ? "Save" : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default Form;
