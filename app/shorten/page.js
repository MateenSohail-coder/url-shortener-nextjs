"use client";
import React from "react";
import Image from "next/image";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function page() {
  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard", {
        position: "top-left",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }); // reset after 2s
    });
  };
  return (
    <div className="min-h-[75vh] max-h-auto bg bg-cover w-full">
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className=" w-full py-6 px-2">
        <form
          action=""
          className="flex  border-[#0ec076]/40 bg-white/10 backdrop-blur-md shadow-md  flex-col md:w-1/2 w-full border-4  rounded-4xl  px-6 items-center justify-center gap-6 py-6 mx-auto"
        >
          <div className="heading text-[#0ec076] text-3xl font-bold tracking-tight">
            Generate a URL here
          </div>

          <input
            type="text"
            placeholder="Enter a URL here"
            className="w-[90%] px-2 py-2 border-2 border-[#57F1B1] focus:outline-0 focus:border-[#0ec076] text-[#0ec076] rounded-2xl"
          />
          <input
            type="text"
            placeholder="Enter a short URL here"
            className="w-[90%] px-2 py-2 border-2 border-[#57F1B1] focus:outline-0 focus:border-[#0ec076] text-[#0ec076] rounded-2xl"
          />
          <button className="py-2 duration-500 text-white px-2 cursor-pointer active:scale-[0.96]  w-[90%] transition-all border-2 border-white hover:bg-white hover:border-[#0ec076] hover:text-[#0ec076]  active:bg-white active:text-[#0ec076] bg-[#0ec076] text-[14px] tracking-normal font-bold rounded-2xl shadow-xs  shadow-white">
            Generate a URL
          </button>
        </form>
        <div className=" border-[#0ec076]/40 rounded-3xl bg-white/10 backdrop-blur-md shadow-md w-full mx-auto my-5 py-3 px-2 border-2 flex flex-col gap-3 md:w-1/2">
          {/* <p className='text-[#57F1B1] text-center text-xl tracking-tighter'>No URL's yet here  </p> */}
          <div className="rounded-2xl px-3 py-2 border border-[#0ec076]/40 bg-white/10 backdrop-blur-md shadow-md">
            <div className="text-[#57F1B1] text-sm">
              <b>Original URL</b>: www.facebook.com www.facebook.com
              www.facebook.com www.facebook.com
            </div>

            <div className="text-[#0ec076] flex items-end md:flex-row md:justify-between">
              <div className="break-words whitespace-normal">
                <b>Shorten URL</b> :{" "}
                <a href="" className="hover:underline break-all">
                  www.google.com/face
                </a>
              </div>

              <div
                onClick={() => {
                  copy("www.google.com/face");
                }}
                className="cursor-pointer"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-[#0ec076]"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                >
                  <path d="M17.4961 3.13338C18.3501 3.26032 19.073 3.51991 19.6514 4.09822C20.2531 4.70022 20.5127 5.45881 20.6338 6.35896C20.75 7.22405 20.75 8.32477 20.75 9.68806L20.75 16.0631C20.75 17.4264 20.75 18.5271 20.6338 19.3922C20.5127 20.2923 20.2531 21.0509 19.6514 21.6529C19.0495 22.2547 18.2915 22.5133 17.3916 22.6344C16.5267 22.7507 15.4274 22.7506 14.0645 22.7506L9.93555 22.7506C8.57262 22.7506 7.47324 22.7507 6.6084 22.6344C5.70854 22.5133 4.95047 22.2547 4.34863 21.6529C3.74688 21.0509 3.48727 20.2923 3.36621 19.3922C3.24996 18.5271 3.24998 17.4262 3.25 16.0631L3.25 9.68806C3.24998 8.32489 3.24996 7.224 3.36621 6.35896C3.48727 5.4588 3.74688 4.70022 4.34863 4.09822C4.92676 3.52012 5.6493 3.26037 6.50293 3.13338C6.57242 4.7286 7.88765 6.00056 9.5 6.00056L14.5 6.00056C16.1123 6.00056 17.4266 4.72858 17.4961 3.13338ZM8 14.2506C7.58579 14.2506 7.25 14.5864 7.25 15.0006C7.25 15.4148 7.58579 15.7506 8 15.7506H11.4287L11.5049 15.7467C11.8833 15.7084 12.1787 15.389 12.1787 15.0006C12.1787 14.6121 11.8833 14.2927 11.5049 14.2545L11.4287 14.2506H8ZM8 10.2506C7.58579 10.2506 7.25 10.5864 7.25 11.0006C7.25 11.4148 7.58579 11.7506 8 11.7506L16 11.7506C16.4142 11.7506 16.75 11.4148 16.75 11.0006C16.75 10.5864 16.4142 10.2506 16 10.2506L8 10.2506Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75 3.00056C7.75 2.03407 8.5335 1.25056 9.5 1.25056H14.5C15.4665 1.25056 16.25 2.03407 16.25 3.00056C16.25 3.96706 15.4665 4.75056 14.5 4.75056H9.5C8.5335 4.75056 7.75 3.96706 7.75 3.00056Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
