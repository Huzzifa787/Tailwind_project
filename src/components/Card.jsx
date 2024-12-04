import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <>
      <div className="max-w-sm bg-white border-2 border-grey-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={imageSrc}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Card;
