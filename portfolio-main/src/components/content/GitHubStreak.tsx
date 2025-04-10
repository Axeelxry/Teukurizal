import React, { useRef, useEffect, useState } from "react";
import AnimationContainer from "@/src/components/utils/AnimationContainer";
import Crosshair from "@/src/components/content/effect/Crosshair"; // Pastikan path ini sesuai
import ShapeBlur from "@/src/components/content/effect/ShapeBlur";

const GitHubStreak: React.FC = () => {
  const containerRef = useRef(null);
  const [pixelRatio, setPixelRatio] = useState(1);

  // Untuk menghindari SSR issues (Next.js)
  useEffect(() => {
    setPixelRatio(window.devicePixelRatio || 1);
  }, []);

  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="relative h-[500px] overflow-hidden">
        {/* ShapeBlur sebagai latar belakang */}
        <div className="absolute inset-0 z-[-1]">
          <ShapeBlur
            variation={0}
            pixelRatioProp={pixelRatio}
            shapeSize={0.5}
            roundness={0.5}
            borderSize={0.05}
            circleSize={0.5}
            circleEdge={1}
          />
        </div>

        {/* Container untuk Crosshair Effect */}
        <div ref={containerRef} className="relative h-[300px] overflow-hidden">
          <Crosshair containerRef={containerRef} color="#ffffff" />
        </div>
      </div>
    </AnimationContainer>
  );
};

export default GitHubStreak;
