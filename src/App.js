import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';

const App = () => {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const mousePosition = useRef({x: 0, y: 0});
  const cursorSpeed = 0.2; 

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    // const handleMouseMove = (e) => {
    //   const cursor = cursorRef.current;
    //   // cursor.style.top = `${e.pageY - 10}px`;
    //   // cursor.style.left = `${e.pageX - 10}px`;
    // };

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX - 10, y: e.clientY - 10 };
    };

    const updateCursor = () => {
      const cursor = cursorRef.current;
      const currentX = parseFloat(cursor.style.left) || 0;
      const currentY = parseFloat(cursor.style.top) || 0;

      const newX = currentX + (mousePosition.current.x - currentX) * cursorSpeed;
      const newY = currentY + (mousePosition.current.y - currentY) * cursorSpeed;

      if (cursor) {
        cursor.style.left = `${newX}px`;
        cursor.style.top = `${newY}px`;
      }
      requestRef.current = requestAnimationFrame(updateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [])

  return (
    <div className="App" ref={scrollRef}>
      <section data-scroll-section>
        <Home />
      </section>
      <section data-scroll-section>
        <Info />
      </section>
      <section data-scroll-section>
        <Footer />
      </section>
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
}

export default App;
