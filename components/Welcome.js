import React from "react";
import Link from "next/link";
const Welcome = () => {
  return (
    <div className="container mx-auto sm:w-full md:w-2/5 ">
      <div className="flex justify-center">
        <h1 className="font-sans text-6xl leading-none text-super">Welcome!</h1>
      </div>
      <div className="flex justify-center mb-8">
        <h2 className="text-lg font-hairline">Let's talk shop.</h2>
      </div>

      <section id="about" className="row">
        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-4xl mb-3">About Me</h2>
          <p className="italic font-hairline text-2xl">
            I'm David Pham. I'm a frontend developer and designer in Washington
            DC. I taught myself how to program and build interfaces. And I love
            coffee from an AeroPress.
          </p>
          <p className="mt-4 leading-normal text-lg">
            <span className="drop">M</span>y design sensibilities are heavily
            influenced by several people. I often revisit the work of Dieter
            Rams, and his{" "}
            <Link href="https://www.vitsoe.com/gb/about/good-design">
              <a className="text-green-500" target="_blank">
                ten principles for good design
              </a>
            </Link>
            . His principles are something I continue to study over and over
            whenever I run into a tough challenge.
          </p>
          <p className="mt-4 leading-normal text-lg">
            I really admire{" "}
            <Link href="http://jasonsantamaria.com/about/">
              <a className="text-green-500" target="_blank">
                Jason Santa Maria
              </a>
            </Link>{" "}
            and his hard work around typography. He really inspired me in making
            the web more beautiful.
          </p>
          <p className="mt-4 leading-normal text-lg">
            I closely follow the work of{" "}
            <Link href="http://www.jensimmons.com/">
              <a target="_blank" className="text-green-500">
                Jen Simmons
              </a>
            </Link>
            . Her work in web standards, CSS Grid, and typography has
            significantly impacted me. She's a personal hero of mine.
          </p>
          <p className="mt-4 leading-normal text-lg mb-24">
            I've put together my{" "}
            <Link href="/">
              <a className="text-green-500">resume</a>
            </Link>{" "}
            as an React & NextJS app. It illustrates something as simple as a
            resume can be done with great type and engineering. When you're done
            looking around, lets get some coffee and talk shop.
          </p>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Welcome;
