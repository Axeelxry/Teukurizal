import React from "react";
import Image from "next/image";
import SectionHeader from "@/src/components/ui/SectionHeader";
import AnimationContainer from "@/src/components/utils/AnimationContainer";
import Link from "next/link";
import PixelTransition from "./effect/PixelTransition";

const HolopinBadges: React.FC = () => (
  <AnimationContainer customClassName="w-full mt-16">
    <div className="flex flex-col gap-5 items-center">
      <SectionHeader
        title="Holopin Badges"
        content="These badges represent my involvement in open-source projects and my contributions to the software
        development community. I actively engage with repositories on GitHub and other platforms, where I contribute
        code, documentation, and support for open-source tools."
      />

      {/* Efek PixelTransition */}
      <div className="w-full max-w-lg">
        <PixelTransition
          firstContent={
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="default pixel transition content, a cat!"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          }
          secondContent={
            <div className="w-full h-full grid place-items-center bg-black">
              <p className="font-extrabold text-5xl text-white">Meow!</p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </div>
    </div>
  </AnimationContainer>
);

export default HolopinBadges;
