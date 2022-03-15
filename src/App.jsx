import React, { useState } from "react";
import QrCode from "./image-qr-code.png";
import QRCode from "qrcode.react";
function App() {
  const [qrText, setQrText] = useState("");
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    setQrText(text);

    return false;
  }
  return (
    <div className="flex flex-col bg-LightGray w-screen h-screen justify-center">
      <div className="  w-80 bg-White m-auto rounded-[20px] items-center pb-4 drop-shadow-lg">
        {/* <img src={QrCode} alt="qr-code" className="w-72 my-4 mx-4 rounded-md" /> */}
        <div className="w-72 my-4 mx-4 rounded-md bg-BrightBlue py-16">
          <QRCode
            className="w-72 m-auto"
            value={qrText}
            size={160}
            fgColor="#ffffff"
            bgColor="#306efe"
          />
        </div>
        {/* <h1 className="font-bold text-DarkBlue text-center px-14 text-lg ">
          Improve your front-end skills by building projects
        </h1>
        <p className=" text-GrayishBlue text-center py-3 text-sm px-10">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p> */}
        <form onSubmit={handleSubmit}>
          <div class="m-6">
            <label class="block mb-2 text-sm font-medium text-DarkBlue">
              Enter the URL
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter URL"
            />
            <button
              type="submit"
              class=" px-5 py-2.5 bg-blue-700 hover:bg-blue-800 mt-3 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className=" text-center text-xs text-Blue mb-2">
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
