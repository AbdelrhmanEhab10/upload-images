import React from "react";
import GetData from "../utlis/GetData";
import Loading from "./Loading";

const Gallery = props => {
  return (
    <>
      {props.getDataLoading && <Loading />}
      <GetData result={props.result} />
    </>
  );
};

export default Gallery;
