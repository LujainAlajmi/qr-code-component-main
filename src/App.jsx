import React from "react";
import QrCode from "./image-qr-code.png";
function App() {
  return (
    <div className="flex flex-col bg-LightGray w-screen h-screen justify-center">
      <div className="  w-80 bg-White m-auto rounded-[20px] items-center pb-4 drop-shadow-lg">
        <img src={QrCode} alt="qr-code" className="w-72 my-4 mx-4 rounded-md" />
        <h1 className="font-bold text-DarkBlue text-center px-14 text-lg ">
          Improve your front-end skills by building projects
        </h1>
        <p className=" text-GrayishBlue text-center py-3 text-sm px-10">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
      <div className=" text-center text-xs text-blue mb-2">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Lujain alajmi</a>.
      </div>
    </div>
  );
}

export default App;
