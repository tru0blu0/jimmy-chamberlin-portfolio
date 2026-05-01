"use client";

import React, { memo } from "react";
import { LiquidMetal as LiquidMetalShader } from "@paper-design/shaders-react";

// ============================================================================
// LiquidMetal — lightweight wrapper around the @paper-design WebGL shader
// ============================================================================

export interface LiquidMetalProps {
  /** Base background color of the liquid metal */
  colorBack?: string;
  /** Tint/highlight color for chrome reflections */
  colorTint?: string;
  /** Animation speed (0.1 – 2.0 recommended) */
  speed?: number;
  /** Pattern complexity / repetition (1 – 10) */
  repetition?: number;
  /** Wave distortion intensity (0 – 1) */
  distortion?: number;
  /** Texture scale */
  scale?: number;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
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

// ============================================================================
// LiquidMetalMask — LiquidMetal clipped to the JC logo mark paths via CSS mask
// ============================================================================

const JC_MASK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
  '<rect width="32" height="32" fill="black"/>' +
  '<path d="M12 8 L12 21 Q12 26 9 26" stroke="white" stroke-width="3.5" stroke-linecap="round" fill="none"/>' +
  '<path d="M20 11 A6 6 0 1 0 20 24" stroke="white" stroke-width="3" stroke-linecap="round" fill="none"/>' +
  '</svg>';

export function LiquidMetalMask(props: LiquidMetalProps) {
  const maskUri = `url("data:image/svg+xml,${encodeURIComponent(JC_MASK_SVG)}")`;

  return (
    <div
      className="absolute inset-0"
      style={{
        maskImage: maskUri,
        WebkitMaskImage: maskUri,
        maskSize: '100% 100%',
        WebkitMaskSize: '100% 100%',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
      }}
    >
      <LiquidMetal
        {...props}
        style={{ width: '100%', height: '100%', ...props.style }}
      />
    </div>
  );
}
