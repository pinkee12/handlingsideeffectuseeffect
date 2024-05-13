

import React, { useEffect } from 'react';

const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = event => {
      console.log('Mouse position:', { x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div>Mouse Tracker - Check console for position</div>;
};

export default MouseTracker;
