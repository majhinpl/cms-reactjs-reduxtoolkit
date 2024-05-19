import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Form = ({ type, onSubmit, prevData }) => {
  const [value, setValue] = useState("");

  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (prevData) {
      setData(prevData);
    }
  }, [prevData]);

  // collect a data
  const hendleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  // send data
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...data,
      description: value,
    };
    onSubmit(finalData);
  };

  return (
    <form className="write" onSubmit={handleSubmit}>
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={hendleChange}
        />
        <input
          type="text"
          placeholder="Subtitle"
          name="subtitle"
          onChange={hendleChange}
        />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor"
            name="description"
          />

          {/* <input type="text" name="description" onChange={hendleChange} /> */}
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>status:</b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            type="file"
            name="image"
            id="file"
            className="hidden"
            onChange={hendleChange}
          />
          <label htmlFor="file" className="file">
            Upload Image
          </label>
        </div>
        <div className="btns">
          <button className="btns1" type="submit">
            Save as a draft
          </button>
          <button className="btns2" type="submit">
            {type === "write" ? "Publish" : "Update"}
          </button>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              name="category"
              value="market-overview"
              id="market-overview"
              onChange={hendleChange}
            />
            <label htmlFor="market-overview">Market Overview</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="category"
              value="technical-analysis"
              id="technical-analysis"
              onChange={hendleChange}
            />
            <label htmlFor="technical-analysis">Technical Aalysis</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="category"
              value="funda-analysis"
              id="funda-analysis"
              onChange={hendleChange}
            />
            <label htmlFor="funda-analysis">Fundamentle Analysis</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="category"
              value="technical-indicator"
              id="technical-indicator"
              onChange={hendleChange}
            />
            <label htmlFor="technical-indicator">Technical Indicator</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
