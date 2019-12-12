import React from 'react';
import Link from 'next/link';

const JenSimmons = () => {
  const sections = [
    {
      link: '#chartJS',
      title: 'Playing with Chart JS'
    },
    {
      link: '#CSS_Grid',
      title: 'Learning CSS Grid'
    },
    {
      link: '#fullBleedHeader',
      title: 'Laughing with David Letterman'
    },
    {
      link: '#CSS_Shapes',
      title: 'Shaping with Strawberries'
    }
  ]
  return (
    <main>
    <header className="header--main">
      <div className="header-wrapper">
        <h1>The Experiments in Design</h1>
        <h1>by David Pham</h1>
        <div className="demo-list">
          <ul>
            {sections.map((section, index) => (
              <li key={index}>
                <Link href={section.link}>
                  <a className="text-green-500">
                    {section.title}
                  </a>
                </Link>
              </li>
            ))

            }
          </ul>
        </div>

        <p className="follow-links">
          Follow <Link href="http://twitter.com/davidpham5"><a target="_blank">@davidpham5</a></Link>
        </p>
    </div>
    </header>

    <section className="container mx-auto w-3/5 mt-10">
      <div id="chartJS" className="mb-8">
        <h1 className="font-bold text-lg mb-3">Playing with ChartJS</h1>
        <p data-height="665" data-theme-id="dark" data-slug-hash="JWOEgX" data-default-tab="result" data-user="davidpham5" data-embed-version="2" data-pen-title="Playing with ChartJS" class="codepen">See the Pen <a href="http://codepen.io/davidpham5/pen/JWOEgX/">Playing with ChartJS</a> by David Pham (<a href="http://codepen.io/davidpham5">@davidpham5</a>) on <a href="http://codepen.io">CodePen</a>.</p>
        <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      </div>

      <div id="CSS_Grid" className="mb-8">
        <h1 className="font-bold text-lg mb-3">CSS Grid</h1>
        <p data-height="565" data-theme-id="dark" data-slug-hash="MpKrzm" data-default-tab="result" data-user="davidpham5" data-embed-version="2" data-pen-title="css grids" class="codepen">See the Pen <a href="http://codepen.io/davidpham5/pen/MpKrzm/">css grids</a> by David Pham (<a href="http://codepen.io/davidpham5">@davidpham5</a>) on <a href="http://codepen.io">CodePen</a>.</p>
        <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      </div>

      <div id="fullBleedHeader" className="mb-8">
        <h1 className="font-bold text-lg mb-3">Full Bleed Header</h1>
        <p data-height="665" data-theme-id="dark" data-slug-hash="oZYBRN" data-default-tab="result" data-user="davidpham5" data-embed-version="2" data-pen-title="cover sheet demo" class="codepen">See the Pen <a href="http://codepen.io/davidpham5/pen/oZYBRN/">cover sheet demo</a> by David Pham (<a href="http://codepen.io/davidpham5">@davidpham5</a>) on <a href="http://codepen.io">CodePen</a>.</p>
        <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      </div>
      
      <div id="CSS_Shapes" className="mb-8">
        <h1 className="font-bold text-lg mb-3">CSS Shapes: Strawberries</h1>
        <p data-height="665" data-theme-id="dark" data-slug-hash="vxymJa" data-default-tab="result" data-user="davidpham5" data-embed-version="2" data-pen-title="css shapes strawberries" class="codepen">See the Pen <a href="http://codepen.io/davidpham5/pen/vxymJa/">css shapes strawberries</a> by David Pham (<a href="http://codepen.io/davidpham5">@davidpham5</a>) on <a href="http://codepen.io">CodePen</a>.</p>
        <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      </div>
    </section>
  </main>
  )
}

export default JenSimmons;