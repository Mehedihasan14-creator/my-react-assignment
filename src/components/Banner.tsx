import React from 'react';
import BannerImage from "../assets/banner-stack.png"
const Banner = () => {
    return (
 <section className="mx-auto flex items-center justify-between gap-10  px-5 py-20 md:py-24">
  
  {/* Left */}
  <div className="max-w-xl px-30">
    <h1 className="text-4xl font-bold">
      Build Your Ideal <br />
      <span className="bg-linear-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
        Development Stack
      </span>
    </h1>

    <p className="mt-6 max-w-lg leading-7 text-slate-600">
      Explore frontend, backend, database, and tooling options,
      compare them side by side, and put together the stack that
      fits your next project.
    </p>

    <div className="mt-8 flex gap-3">
      <button className="rounded-md bg-linear-to-r from-orange-500 to-pink-600 px-5 py-3 text-sm font-semibold text-white">
        Explore Technologies
      </button>

      <button className="rounded-md border border-slate-200 px-8 py-3 text-sm text-slate-600">
        Learn More
      </button>
    </div>
  </div>

  {/* Right */}
  <div className="pr-60">
    <img
      src={BannerImage}
      alt="Banner"
      className="w-72 max-w-full"
    />
  </div>

</section>
    );
};

export default Banner ;