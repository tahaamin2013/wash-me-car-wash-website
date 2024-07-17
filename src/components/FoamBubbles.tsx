const BubbleBackground = ({ bubbleCount = 300 }) => {
    const bubbles = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 16, // 2px to 12px
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.2 + 0.1, // 0.1 to 0.6
    }));
  
    return (
      <div className="w-full overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-gray-200"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              top: bubble.top,
              opacity: bubble.opacity,
            }}
          />
        ))}
      </div>
    );
  };
  
  export default BubbleBackground;