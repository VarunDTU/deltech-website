import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: para1, inView: para1IsVisible } = useInView();

  return (
    <section className="text-white bg-slate-800  ">
      <div className="container w-full md:w-1/2 mx-auto flex flex-col px-8 py-24 justify-center items-center">
        <h1 className="text-4xl md:text-5xl mb-16 font-semibold md:font-bold">ABOUT DELTECH MUN</h1>
        <p className="text-xs leading-relaxed md:text-base mb-5">
          <p ref={para1} className={para1IsVisible ? '': ''}>
            DELTECHMUN is the annual flagship event of IEEE India Council which
            administers a platform to young professionals, academicians,
            scholars, entrepreneurs and technocrats from divergent fields and
            careers to show up together and share a common podium.
          </p>
          <br />
          The Congress provides a path to connect with industry experts,
          successful business professionals and experts working on latest
          technologies.
          <br />
          <br />
          Various workshops, seminars led by ace professionals contribute to the
          diverse opportunities for business networking, professional
          development and personal growth.
        </p>
      </div>
    </section>
  );
};

export default About;
