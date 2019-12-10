import React from 'react'
import Link from 'next/link';

const Hero = (...props) => {
  const { avatarPath } = props;
  return (
    <div className="jumbotron bg-white">
      <h1>David M. Pham</h1>
      <p className="lead">
        Front-End Developer. I build useful and beautiful interfaces.
      </p>
      <div className="avatar">
        <div className="profile-pic round">
            <img src="{ avatarPath }" alt="personal profile picture"  />
        </div>
      </div>
      <br />
      <div className="text-center">
        <ul className="list-inline">
          <li>
            <Link href="https://twitter.com/davidpham5" target="_blank">
              <a>
                <span className="">Twitter</span>
              </a>
            </Link>
          </li>
          <li>
            <Link  href="https://github.com/davidpham5" target="_blank">
              <a>
                <span className="">Github</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/davidmpham" target="_blank">
              <a>
                <span className="">Linkedin</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero