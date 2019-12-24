import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-center">
      <ul className="inline-flex">
        <li className="mr-5">
          <Link href="/home">
            <a className="text-green-500">Home</a>
          </Link>
        </li>
        <li className="mr-5">
          <Link href="/resume">
            <a className="text-green-500">Resume</a>
          </Link>
        </li>
        <li className="mr-5">
          <Link href="/lab">
            <a className="text-green-500">Lab</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Nav;