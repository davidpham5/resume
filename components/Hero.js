import React from "react";
import Link from "next/link";
import Avatar from '../public/dpham2.jpg'

const Hero = (...props) => {
  return (
    <div className="md:flex max-w-lg mx-auto block p-2 bg-white rounded-lg shadow-lg bg-white border mt-10">
      <div className="text-center p-2 mx-auto">
        <h1 className="font-serif text-4xl text-center">David M. Pham</h1>
        <p className="text-center">
          Front-End Developer. I build useful and beautiful interfaces.
        </p>
        <div className="h-64 w-64 mx-auto block text-center avatar mt-4">
          <div className="profile-pic">
            <img src={ Avatar } alt="personal profile picture" className="rounded-full" />
          </div>
        </div>
        <br />
        <div className="">
          <ul className="inline-flex">
            <li>
              <Link href="https://twitter.com/davidpham5">
                <a className="text-green-500">
                  <span className="px-4 py-2 m-2">Twitter</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/davidpham5">
                <a className="text-green-500">
                  <span className="px-4 py-2 m-2">Github</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/davidmpham">
                <a className="text-green-500">
                  <span className="px-4 py-2 m-2">Linkedin</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
       </div>
    </div>
  );
};

export default Hero;
