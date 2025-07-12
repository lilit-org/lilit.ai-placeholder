import React from 'react';

const AnimatedStars: React.FC = () => {
  // Define different sizes for stars
  const starSizes = ['12px', '16px', '20px', '24px', '28px', '32px', '36px', '40px'];
  
  // Generate random position within a specific quadrant
  const getRandomPositionInQuadrant = (quadrant: number) => {
    // Quadrant layout:
    // 0: top-left    1: top-right
    // 2: bottom-left 3: bottom-right
    const isLeft = quadrant % 2 === 0;
    const isTop = quadrant < 2;
    
    // Keep stars in the outer 30% of their quadrant
    const left = isLeft 
      ? `${Math.random() * 30}%` 
      : `${70 + Math.random() * 30}%`;
    const top = isTop 
      ? `${Math.random() * 30}%` 
      : `${70 + Math.random() * 30}%`;
    
    return { left, top };
  };
  
  // Create array of 8 positions (2 stars per quadrant)
  const positions = Array.from({ length: 8 }, (_, index) => {
    const quadrant = Math.floor(index / 2); // 0-3 for quadrants
    return getRandomPositionInQuadrant(quadrant);
  });
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {positions.map((position, index) => (
        <div
          key={index}
          className="absolute text-yellow-300 animate-star"
          style={{
            left: position.left,
            top: position.top,
            animationDelay: `${index * 1.5}s`,
            fontSize: starSizes[index],
            opacity: 0.7,
          }}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default AnimatedStars;
