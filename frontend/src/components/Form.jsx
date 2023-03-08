import React, { useState, useEffect } from "react";
import { PickerOverlay } from "filestack-react";
import Gallery from "./Gallery";
import { getData, postData } from "../API/Api";

const Form = () => {
  const [isPicker, setIsPicker] = useState(false);
  const [image, setImage] = useState(false);
  const [result, setResult] = useState([]);
  const [getDataLoading, setGetDataLoading] = useState(true);
  const [postDataLoading, setPostDataLoading] = useState(false);
  const [postDatas, setPostDatas] = useState();
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    !image
      ? alert("Image is required.")
      : title.length < 3
      ? alert("Title is too short.")
      : postData({ title, setPostDatas, setPostDataLoading, image });
  };
  useEffect(() => {
    getData({ setGetDataLoading, setResult });
    if (postDatas) {
      setImage("");
      setTitle("");
      getData({ setGetDataLoading, setResult });
    }
  }, [postDatas]);

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="bg-indigo-100 shadow-md rounded w-2/5 flex-colo py-12 px-4"
      >
        {image ? (
          <img
            src={image && image.filesUploaded[0].url}
            alt="imageUplaoded"
            className="w-full object-cover h-56"
          />
        ) : (
          <button
            onClick={() => setIsPicker(!isPicker)}
            type="button"
            className="w-full text-lg font-bold border-dashed h-56 border-4 border-indigo-500 text-indigo-500"
          >
            Choose Image
          </button>
        )}

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter image title .."
          className="w-full my-8 bg-white py-4 px-2 rounded border border-indigo-500 text-indigo-500 font-semibold"
        />
        <button
          type="submit"
          className="w-full bg-indigo-500 py-4 rounded text-white font-bold"
        >
          {postDataLoading ? "Loading..." : "Submit"}
        </button>
        <div className="mt-4 relative">
          {isPicker && (
            <PickerOverlay
              apikey={process.env.REACT_APP_FILESTACK_APIKEY}
              onSuccess={(res) => {
                setImage(res);
                setIsPicker(false);
              }}
              onError={(res) => alert(res)}
              pickerOptions={{
                maxFiles: 1,
                accept: ["image/*"],
                errorsTimeout: 2000,
                maxSize: 1 * 1000 * 1000,
              }}
            />
          )}
        </div>
      </form>
      <Gallery result={result} getDataLoading={getDataLoading} />
    </>
  );
};

export default Form;
