// app/not-found.jsx (App Router)
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center bg-gradient-to-tr from-[#d2fff0] via-[#e6fff5] to-[#ccffec] px-4 overflow-hidden">
      {/* Background floating shapes */}
      <div className="absolute w-96 h-96 bg-[#0ec076]/10 rounded-full -top-24 -left-24 blur-3xl animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-[#57F1B1]/10 rounded-full bottom-0 right-0 blur-3xl animate-pulse-slow"></div>

      <div className="z-10 text-center max-w-lg">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0ec076] mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-[#0ec076]">
          Oops! Page not found.
        </p>
        <p className="text-[#0ec076]/70 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 border-2 border-white hover:bg-white hover:text-[#0ec076] rounded-full bg-[#0ec076] text-white font-medium hover:border-[#0ec076] transition-all duration-300 shadow-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
