import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../../components/topNav/index';
import Hero from "../../components/herospage/index"
import { Card, CardBody, Button, Link, CardHeader  } from "@nextui-org/react";
import Slideshow from "../../components/slideShow"
import sneakers from "../../assets/sneaker.json"
import brands from "../../assets/brands.json"
import deals from '../../assets/deals.json';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function Home() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentUser = useSelector((state) => state.user.value);

  const [navItems] = useState([
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Product', path: '/product' },
    { label: 'Contact', path: '/contact' },
  ]);
  
  const handleAddSneaker = () => {
    setIsOpen(true);
  };
     
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const navigateToBrand = (brand) => {
    navigate(`/brand/${brand.brand}`, { state: { brand } });
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === sneakers.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? sneakers.length - 1 : prevIndex - 1));
  };

  const menuVariant = {
    hidden: {
      opacity: 0,
      x: -250,
    },
    visible: {
      opacity: 1,
      x: -30,
      transition: {
        duration: 2,
        staggerChildren: 0.5,
      },
    },
  };

  const menuItemVariant = {
    hidden: { opacity: 0, x: -550 }, 
    visible: { opacity: 1, x: 0 }, 
  };

  const sectionStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  };

  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center">
          <Nav currentUser={currentUser} onAddSneaker={handleAddSneaker} />
          <section className='hidden sm:flex flex align-center justify-center'>
            <motion.div
              variants={menuVariant}
              initial='hidden'
              animate='visible'
              className='flex align-center py-4 bg-transparent'
            >
              {navItems.map((item, index) => (
                <motion.div key={index} variants={menuItemVariant} className='inline-block mx-4'>
                  <Link to={item.path} className='text-white'>
                    <div className='group'>
                      <span className='mx-2 font-serif'>{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        <section className='bg-cover bg-center h-full' style={sectionStyle}>
          <Hero />
        </section>
        <Card
          isBlurred
          className="border-none bg-background/60 max-w-[100%] h-[40%]"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 p-12 items-center justify-center">
              <Slideshow />
              <div className="flex flex-col col-span-6 md:col-span-8 p-6">
                <h1 className='py-4 font-serif'>The Best Shoe Of The Season</h1>
                <h3 className='px-2 font-serif'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </h3>
                <motion.Button
                  color="primary" variant="bordered" className="ml-2 w-40 mt-12 font-serif"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, }}
                  transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100, ease: "linear", }}
                >
                  Bordered
                </motion.Button>
              </div>
            </div>
          </CardBody>
          <div className='border'>
            <div className='flex align-center justify-between p-6'>
              <div>
                <text className='text-4xl font-serif'>Recent Launch</text>
              </div>
              <div className='flex justify-between w-[8%] mt-12'>
                <div className='bg-purple-600 cursor-pointer' onClick={handlePrevious}>
                  <GrFormPrevious />
                </div>
                <div className='bg-purple-600 cursor-pointer' onClick={handleNext}>
                  <GrFormNext />
                </div>
              </div>
            </div>
            <CardBody className="flex flex-row p-12 justify-center border">
              {sneakers.map((sneaker, index) => (
                <div
                  key={index}
                  className={`relative w-[50%] mr-6 p-6 flex flex-col items-center justify-center border ${index >= currentIndex && index < currentIndex + 4 ? 'slide-in' : 'hidden'}`}
                >
                  <p className='text-xs absolute top-1 left-1 p-2 bg-purple-600 font-serif'>New Arrival</p>
                  <img src={sneaker.image} alt={sneaker.name} className="w-[80%] h-32" />
                  <p className='mt-2 font-serif'>{sneaker.name}</p>
                  <p className='mt-2 font-serif'>{sneaker.price}</p>
                  <Button className='w-full mt-2 rounded font-serif'>
                    Add to cart
                  </Button>
                </div>
              ))}
            </CardBody>
          </div>
         
          <motion.Card 
            initial={{ y: 100,  opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, ease: "linear" }}
          >
            <CardHeader>
              <motion.h1 
                className="text-7xl leading-tight font-bold text-start uppercase font-serif"
                >
                <p className='font-serif'>Discover limited sneakers </p> without limitation
              </motion.h1>
            </CardHeader>
              <div className="h-auto flex align-center justify-content mt-6 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className={`relative w-full flex flex-col items-center rounded-xl m-2 justify-center border cursor-pointer`}
                    onClick={() => navigateToBrand(brand)} 
                  >
                  <div>
                      <motion.p
                        className="sneaker-brand text-2xl absolute inset-0 p-2 bg-transparent flex items-center rounded-xl justify-center uppercase text-2xl font-bold hover:bg-purple-600 transition-colors duration-3000"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {brand.brand}
                      </motion.p>
                  </div>
                    <img src={brand.image} alt={brand.brand} className="w-full h-32 object-contain" />
                  </div>
                ))}
              </div>
          </motion.Card>
          <Card className='sm:flex mt-8 rounded'>
            <CardHeader className='flex align-center justify-between'>
              <h1 className="text-7xl leading-tight font-bold text-start uppercase font-serif">Deal of the day</h1>
              <Button className='p-6 w-[15%] rounded font-serif'>View More</Button>
            </CardHeader>
            <div className='sm:flex h-auto flex align-center justify-content mt-6'>
              <CardBody className="flex flex-row align-center justify-center">
                {deals.map((deal, index) => (
                  <div
                    key={index}
                    className={`relative w-[50%] mr-6 flex flex-col items-center justify-center border ${index >= currentIndex && index < currentIndex + 4 ? 'slide-in' : 'hidden'}`}
                  >
                  <div className='w-full flex align-center justify-between mb-4 border-b p-3'>
                    <p className='font-serif'>{deal.name}</p>
                    <p className='font-serif'>{deal.price}</p>
                  </div>
                    <img src={deal.image} alt={deal.name} className="w-[80%] h-32 " />
                    <div className='w-full flex flex-col align-center border-t p-3'>
                      <p className='font-bold text-xl font-serif'>{deal.name}</p>
                      <p className='text-xs font-serif'>{deal.manufacturer}</p>
                    </div>
                  </div>
                ))}
              </CardBody>
            </div>
          </Card>
        </Card>
      </div>
    </>
  );
}

export default Home;
