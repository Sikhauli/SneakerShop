import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Link } from "@nextui-org/react";

const Slideshow = () => {
  const images = [
    'https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png',
    'https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png',
    'https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Free-Download.png',
    'https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-HD-Image.png',
    'https://www.pngall.com/wp-content/uploads/2/Sneakers-Transparent.png',
    'https://www.pngall.com/wp-content/uploads/2/Red-Sneakers-PNG-Image.png',
    'https://www.pngall.com/wp-content/uploads/2/Red-Sneakers-PNG.png',
    'https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.1}}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="relative col-span-6 md:col-span-4"
    >
      <Image
        alt="Album cover"
        className="object-cover p-6"
        height={200}
        shadow="md"
        src={images[currentImageIndex]}
        width="100%"
      />
    </motion.div>
  );
};

export default Slideshow;
