import React from "react";

function FeatureCard({ details }) {
  const { heading, text, Icon } = details;
  return (
    <div className="flex w-11/12 sm:w-96 mx-auto rounded-lg flex-col bg-indigo-50 justify-center box-border px-4 items-center h-56 sm:h-60 mb-4 sm:mb-8">
      <div className="bg-indigo-600 flex justify-center mb-4 items-center p-3 rounded-full">
        <Icon className="text-white stroke-current text-2xl" />
      </div>
      <h4 className="text-xl text-gray-800 mb-2">{heading}</h4>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
export { FeatureCard };
