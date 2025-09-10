import React from "react";
import Lottie from "lottie-react";
import testAnimation from "../animations/pendulum.json"; // use any available JSON

export default function TestAnimation() {
  console.log(testAnimation); // See if data loads in console

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-64 h-64 border border-black">
        <Lottie animationData={testAnimation} loop={true} />
      </div>
    </div>
  );
}
