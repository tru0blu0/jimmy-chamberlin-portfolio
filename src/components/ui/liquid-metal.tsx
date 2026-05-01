"use client";

import React, { memo } from "react";
import { LiquidMetal as LiquidMetalShader } from "@paper-design/shaders-react";

export interface LiquidMetalProps {
  colorBack?: string;
  colorTint?: string;
  speed?: number;
  repetition?: number;
  distortion?: number;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const LiquidMetal = memo(function LiquidMetal({
  colorBack = "#aaaaac",
  colorTint = "#ffffff",
  speed = 0.5,
  repetition = 4,
  distortion = 0.1,
  scale = 1,
  className,
  style,
}: LiquidMetalProps) {
  return (
    <LiquidMetalShader
      colorBack={colorBack}
      colorTint={colorTint}
      speed={speed}
      repetition={repetition}
      distortion={distortion}
      scale={scale}
      className={className}
      style={style}
    />
  );
});

LiquidMetal.displayName = "LiquidMetal";
export default LiquidMetal;
