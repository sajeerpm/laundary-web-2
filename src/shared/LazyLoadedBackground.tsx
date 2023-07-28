// LazyLoadedBackground.tsx
import React, { useState, useEffect, ReactNode } from "react";

interface LazyLoadedBackgroundProps {
  imageUrl: string;
  children: ReactNode;
  className: string;
}

const LazyLoadedBackground: React.FC<LazyLoadedBackgroundProps> = ({
  imageUrl,
  children,
  className,
}) => {
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((data) => {
        setImageData(URL.createObjectURL(data));
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, [imageUrl]);

  if (!imageData) {
    return null; // You can return a loading indicator or fallback content here
  }

  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${imageData})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "400px", // Set your desired height
  };

  return (
    <div className={className} style={containerStyle}>
      {children}
    </div>
  );
};

export default LazyLoadedBackground;
