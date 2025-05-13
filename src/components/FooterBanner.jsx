import React from "react";

function FooterBanner() {
  return (
    <section className="w-full font-title mb-10">
      {/* ===== Heading ===== */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-white text-5xl sm:text-6xl font-bebas tracking-wider uppercase text-left">
          Education
        </h2>
      </div>

      {/* ===== Timeline ===== */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-14 space-y-16">
        {/* --- Row 1 --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Left block */}
          <div className="sm:max-w-lg">
            <h3 className="text-white text-lg sm:text-xl font-semibold uppercase tracking-wide">
              Bangkok Christian College
            </h3>
            <p className="text-white mt-1">
              GPAX&nbsp;:&nbsp;<span className="font-semibold">2.98</span>
            </p>
            <a
              href="#"
              className="mt-2 inline-block text-sm underline text-white hover:text-amber-400 transition"
            >
              Download&nbsp;Transcript
            </a>
          </div>

          {/* Right year */}
          <span className="text-white text-base sm:text-lg font-semibold whitespace-nowrap">
            2009&nbsp;–&nbsp;2015
          </span>
        </div>

        {/* --- Row 2 --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="sm:max-w-lg">
            <h3 className="text-white text-lg sm:text-xl font-semibold uppercase tracking-wide">
              Faculty of Liberal Arts &amp; Science&nbsp;— IT
            </h3>
            <p className="text-white">
              Kasetsart University&nbsp;• Kamphaeng&nbsp;Saen Campus
            </p>
            <p className="text-white mt-1">
              GPAX&nbsp;:&nbsp;<span className="font-semibold">3.57</span>
            </p>
            <a
              href="#"
              className="mt-2 inline-block text-sm underline text-white hover:text-amber-400 transition"
            >
              Download&nbsp;Transcript
            </a>
          </div>

          <span className="text-white text-base sm:text-lg font-semibold whitespace-nowrap">
            2021&nbsp;–&nbsp;Present
          </span>
        </div>
      </div>
    </section>
  );
}

export default FooterBanner;
