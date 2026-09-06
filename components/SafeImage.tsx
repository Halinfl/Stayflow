"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = Omit<ImageProps, "onError" | "src"> & {
  src: string;
  fallbackLabel?: string;
};

export default function SafeImage({
  fallbackLabel = "StayFlow",
  className,
  alt,
  src,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-brand-cream ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        <span className="px-3 text-center text-sm font-semibold uppercase tracking-wide text-brand-charcoal/60">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
