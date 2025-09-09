"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast, Bounce, Slide } from "react-toastify";

export default function Page() {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generate, setgenerate] = useState("");
  const [ogenerate, setogenerate] = useState("");
  const [loading, setLoading] = useState(false);
  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard", {
        position: "top-left",
        autoClose: 1200,
        hideProgressBar: true,
        transition: Bounce,
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    const trimmedUrl = url.trim();
    const trimmedShorturl = shorturl.trim();

    if (!trimmedUrl || !trimmedShorturl) {
      toast.error("Please fill in both fields !", {
        position: "top-left",
        autoClose: 1200,
        hideProgressBar: true,
        transition: Bounce,
      });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await response.json();
      if (result.exists) {
        toast.error("This URL are already exist !", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: true,
          transition: Bounce,
        });
        return; // ❌ don’t set state
      }

      if (result.success) {
        setgenerate(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setogenerate(url);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false); // ✅ hide loader
      toast.success("URL generated Successfully !", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        transition: Bounce,
      });
      setUrl("");
      setShorturl("");
    }
  };

  return (
    <div className="min-h-[75vh] bg-gradient-to-tr  from-[#d2fff0] via-[#e6fff5] to-[#ccffec]">
      <ToastContainer
        position="top-left"
        autoClose={1000}
        transition={Bounce}
      />
      <div className="w-full py-6 px-2 flex md:flex-row flex-col gap-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:w-1/2 w-full border-4 rounded-4xl px-6 py-6 mx-auto bg-white/10 backdrop-blur-md shadow-md gap-6 items-center justify-center border-[#0ec076]/40"
        >
          <div className="text-[#0ec076] text-2xl sm:text-3xl font-bold text-center">
            Generate your short URL's here
          </div>

          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Enter a URL here"
            className="w-[90%] px-2 py-2 border-2 border-[#57F1B1] focus:outline-0 focus:border-[#0ec076] text-[#0ec076] rounded-2xl"
          />
          <input
            value={shorturl}
            onChange={(e) => setShorturl(e.target.value)}
            type="text"
            disabled={loading}
            placeholder="Enter a short URL here"
            className="w-[90%] px-2 py-2 border-2 border-[#57F1B1] focus:outline-0 focus:border-[#0ec076] text-[#0ec076] rounded-2xl"
          />
          <button
            type="submit"
            className={`flex items-center justify-center gap-2 py-2 px-4 rounded-3xl cursor-pointer font-bold w-[90%] ${
              loading
                ? "bg-[#0db068] text-white cursor-not-allowed"
                : "bg-[#0ec076] text-white hover:bg-[#0db068]"
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Generating...
              </>
            ) : (
              "Generate Short URL"
            )}
          </button>
        </form>
        <div className="border-[#0ec076]/40 min-h-full border-4  rounded-3xl bg-white/10 backdrop-blur-md shadow-md w-full mx-auto  py-3 px-2  flex flex-col gap-3 md:w-1/2">
          {!generate || !ogenerate ? (
            <p className="text-[#57F1B1] text-center text-xl md:text-2xl tracking-tighter">
              No URL yet here
            </p>
          ) : (
            <div className="rounded-2xl px-3 py-2 border border-[#0ec076]/40 bg-white/10 backdrop-blur-md shadow-md">
              <div className="text-[#57F1B1] text-sm">
                <b>Original URL</b>: {ogenerate}
              </div>

              <div className="text-[#0ec076] flex items-end md:flex-row md:justify-between">
                <div className="break-words whitespace-normal">
                  <b>Shorten URL</b> :
                  <Link
                    href={generate}
                    target="_blank"
                    className="hover:underline break-all"
                  >
                    {generate}
                  </Link>
                </div>

                <div
                  onClick={() => {
                    copy(generate);
                  }}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-[#0ec076]"
                    viewBox="0 0 24 24"
                    fill="none"
                    role="img"
                  >
                    <path d="M17.4961 3.13338C18.3501 3.26032 19.073 3.51991 19.6514 4.09822C20.2531 4.70022 20.5127 5.45881 20.6338 6.35896C20.75 7.22405 20.75 8.32477 20.75 9.68806L20.75 16.0631C20.75 17.4264 20.75 18.5271 20.6338 19.3922C20.5127 20.2923 20.2531 21.0509 19.6514 21.6529C19.0495 22.2547 18.2915 22.5133 17.3916 22.6344C16.5267 22.7507 15.4274 22.7506 14.0645 22.7506L9.93555 22.7506C8.57262 22.7506 7.47324 22.7507 6.6084 22.6344C5.70854 22.5133 4.95047 22.2547 4.34863 21.6529C3.74688 21.0509 3.48727 20.2923 3.36621 19.3922C3.24996 18.5271 3.24998 17.4262 3.25 16.0631L3.25 9.68806C3.24998 8.32489 3.24996 7.224 3.36621 6.35896C3.48727 5.4588 3.74688 4.70022 4.34863 4.09822C4.92676 3.52012 5.6493 3.26037 6.50293 3.13338C6.57242 4.7286 7.88765 6.00056 9.5 6.00056L14.5 6.00056C16.1123 6.00056 17.4266 4.72858 17.4961 3.13338Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.75 3.00056C7.75 2.03407 8.5335 1.25056 9.5 1.25056H14.5C15.4665 1.25056 16.25 2.03407 16.25 3.00056C16.25 3.96706 15.4665 4.75056 14.5 4.75056H9.5C8.5335 4.75056 7.75 3.96706 7.75 3.00056Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
