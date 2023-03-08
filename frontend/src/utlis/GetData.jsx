import React from "react";

const GetData = (props) => {
  return (
    <div className="grid grid-cols-4 container mx-auto gap-10 my-12">
      {props.result.map((i, index) => (
        <div
          key={index}
          className="p-1 bg-white rounded flex-colo border border-indigo-200"
        >
          <img
            className="w-full h-64 object-cover"
            src={i.image}
            alt={i.title}
          />
          <h2 className="font-semibold text-indigo-500 italic my-4 leading-8 text-center">
            {i.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default GetData;
