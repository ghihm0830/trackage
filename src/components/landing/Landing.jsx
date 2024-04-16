import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import AutoSlider from './AutoSlider';
import Feature from './Feature';
import Event from './Event';
import SupportBox from './SupportBox';
import Footer from './Footer';

export default function Landing() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <section style={{margin: "0"}}>
        <AutoSlider />
      </section>
      <section style={{marginBlock: width > 600 ? "7em" : null}}>
        <Feature />
      </section>
      <section style={{display: "flex",  flexDirection: "column", gap: "2em"}}>
        <Event />
      </section>
      <section style={{display: "flex",  flexDirection: "column", gap: "1.75em"}}>
        <h2 style={{fontSize: "var(--fs-24-32)", marginInline: width > 600 ? "4em" : null}}>Need Support?</h2>
        <SupportBox />
      </section>
        <Footer />
    </div>
  )
}
