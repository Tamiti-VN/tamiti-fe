import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getCarousels } from '../../apis/carousel';
import './style.css';
import { TCarousel } from '../../@types/carousel';

export const Carousel = () => {
  const [images, setImages] = useState<TCarousel[]>([]);

  const [ImageIndex, setImageIndex] = useState(0);
  const cloudinaryPath = `https://res.cloudinary.com/nerotien/image/upload`;

  const fetchProducts = async () => {
    try {
      const imgURLs = await getCarousels();
      setImages(imgURLs);
    } catch (error) {
      console.error('product list error:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const nextImage = () => {
    // const newIndex = ImageIndex >= images.length - 1 ? 0 : ImageIndex + 1;
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const prevImage = () => {
    // const newIndex = ImageIndex <= 0 ? images.length - 1 : ImageIndex - 1;
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="carousel">
      <div
        className="carousel__slide-image-list"
        style={{
          transform: `translateX(-${ImageIndex * 100}%)`,
        }}>
        {images.map((image) => (
          <img
            className="carousel__slide-image"
            key={image._id}
            src={`${cloudinaryPath}/${image.imgPath}`}
            alt="carousel_images"
          />
        ))}
      </div>
      <div className="carousel__track-dot-container">
        {images.map((_, index) => (
          <button
            className={`carousel__track-dot 
              ${ImageIndex === index ? 'carousel__track-dot--active' : ''}`}
            key={index}
            onClick={() => setImageIndex(index)}></button>
        ))}
      </div>

      <button className="carousel__button carousel__button--left" onClick={prevImage}>
        <FaChevronLeft className="arrow-icon" />
      </button>
      <button className="carousel__button carousel__button--right" onClick={nextImage}>
        <FaChevronRight className="arrow-icon" />
      </button>
    </div>
  );
};
