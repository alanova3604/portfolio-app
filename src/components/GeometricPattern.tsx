"use client";

interface GeometricPatternProps {
  count?: number;
}

const GeometricPattern = ({ count = 30 }: GeometricPatternProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
      <div className="relative flex items-center justify-center">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-sky-300/20 rounded-sm"
            style={{
              width: `${1400 + i * 8}px`,
              height: `${630 + i * 10}px`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GeometricPattern;
