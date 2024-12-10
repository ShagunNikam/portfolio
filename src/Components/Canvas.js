import React, { useState, useEffect, useRef } from "react";

const Canvas = () => {

  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: undefined, y: undefined });
  const colors = [
    "#6600CC",
    "#FFCC00",
    "#9EA9F0",
    "#CC0000",
    "#ff0077",
    "#5aaa26",
    "#66ff33",
    "#ff00ff",
    "#3333ff",
    "#2ef6db",
    "#c8ff00"
  ];
  
  const maxRadius = 20;
  const minRadius = 7;
  let circleArray = [];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');
    
    // Set canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    //   initCircles();
    };

    window.addEventListener('resize', handleResize);

    // Circle class
    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = colors[Math.floor(Math.random() * colors.length)];

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        // c.stroke();
      };

      this.update = function () {
        this.draw();

        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50 &&
          this.radius < maxRadius
        ) {
          this.radius += 1;
        } else if (this.radius > minRadius) {
          this.radius -= 1;
        }
      };
    }

    function initCircles() {
      circleArray = [];
      for (let i = 0; i < 30; i++) {
        let r = Math.floor(Math.random() * 3) + 1;
        let x = Math.random() * (canvas.width - r * 5) + r;
        let y = Math.random() * (canvas.height - r * 5) + r;
        let dx = (Math.random() - 0.1) * 0.3;
        let dy = (Math.random() - 0.1) * 0.3;
        circleArray.push(new Circle(x, y, dx, dy, r));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    initCircles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mouse]);
  
  return (
    <>
        <canvas ref={canvasRef} />
    </>
  );
};

export default Canvas;
