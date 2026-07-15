function FloatingHearts() {
  const hearts = Array.from({ length: 18 });

  return (
    <>
      {hearts.map((_, index) => (
        <span
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 6}s`,
            fontSize: `${14 + Math.random() * 18}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </>
  );
}

export default FloatingHearts;