import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import "./writePage.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  const [value, setValue] = useState("");

  return (
    <Layout>
      <div className="write">
        <div className="content">
          <input type="text" placeholder="Title" />
          <div className="editorContainer">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="editor"
            />
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
            <input type="file" name="" id="file" className="hidden" />
            <label htmlFor="file" className="file">
              Upload Image
            </label>
          </div>
          <div className="btns">
            <button className="btns1">Save as a draft</button>
            <button className="btns2">Update</button>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="market-overview"
                id="market-overview"
              />
              <label htmlFor="market-overview">Market Overview</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="technical-analysis"
                id="technical-analysis"
              />
              <label htmlFor="technical-analysis">Technical Aalysis</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="funda-analysis"
                id="funda-analysis"
              />
              <label htmlFor="funda-analysis">Fundamentle Analysis</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="technical-indicator"
                id="technical-indicator"
              />
              <label htmlFor="technical-indicator">Technical Indicator</label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
