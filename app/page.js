import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main>
        <section className="flex flex-col md:flex-row  w-full bg-[#57f1b150] h-[75vh] sm:h-[100vh]  md:h-[75vh] py-12 px-3 ">
          <div className="md:w-[50%] w-full h-[190%] sm:h-[50%] md:h-full px-3.5 flex flex-col justify-center sm:justify-start md:justify-center items-center md:gap-7 gap-4">
            <p className="text-5xl font-extrabold sm:text-start text-center text-white text-shadow-lg break-words shadow-[#0ec076]">
              The Best URL Shortener in the Market
            </p>
            <p className="text-[#0a965b] text-sm sm:text-start text-center wrap-break-words">
              We are MostStraight forward URL Shortener in the World . Most of
              the URL shortener will track you or ask you to give your details
              for login. We understand your needs and Hence we created this{" "}
              <b>MintLinks</b>.
            </p>
            <div className="flex gap-3 text-white justify-start items-start">
              <Link href="/github">
                <button className="py-2 px-2 cursor-pointer active:scale-[0.96] transition-all border-2 border-white hover:bg-white hover:text-[#0ec076]  active:bg-white active:text-[#0ec076] bg-[#0ec076] text-[14px] tracking-normal font-bold rounded-2xl shadow-xs  shadow-white">
                  Github
                </button>
              </Link>
              <Link href="/shorten">
                <button className="py-2 px-2 cursor-pointer active:scale-[0.96] transition-all border-2 border-white hover:bg-white hover:text-[#0ec076]  active:bg-white active:text-[#0ec076] bg-[#0ec076] text-[14px] tracking-normal font-bold rounded-2xl shadow-xs  shadow-white">
                  Try Now
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-[50%] w-full h-[40%] hidden sm:block md:block sm:h-[50%] md:h-full relative rounded-full border-4 border-[#0ec076] overflow-hidden ">
            {" "}
            <Image src="/vector.jpg" alt="vector" fill={true} />
          </div>
        </section>
      </main>
    </>
  );
}
