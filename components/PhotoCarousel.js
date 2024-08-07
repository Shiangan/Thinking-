import { useState } from 'react';

export default function PhotoCarousel({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  if (photos.length === 0) return null;

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <img src={photos[currentIndex]} alt={`Photo ${currentIndex}`} className="w-full h-auto rounded"/>
      <button onClick={prevPhoto} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">‹</button>
      <button onClick={nextPhoto} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">›</button>
    </div>
  );
}
