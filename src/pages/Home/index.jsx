import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../../components/topNav/index';
import Hero from "../../components/herospage/index"
import { Card, CardBody, Image, Button, Link } from "@nextui-org/react";
import Slideshow from "../../components/slideShow"
import sneakers from "../../assets/sneaker.json"
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [navItems] = useState([
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Product', path: '/product' },
    { label: 'Contact', path: '/contact' },
  ]);

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
    hidden: { opacity: 0, x: -250 }, 
    visible: { opacity: 1, x: 0 }, 
  };

  const sectionStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  };


  return (
    <>
      <main>
        <nav className='bg-transparent w-screen'>
          <Nav />
          <section className='flex align-center justify-center'>
            <motion.div
              variants={menuVariant}
              initial='hidden'
              animate='visible'
              className='flex align-center py-4 bg-transparent'
            >
              {navItems.map((item, index) => (
                <motion.p key={index} variants={menuItemVariant} className='inline-block mx-4'>
                  <Link to={item.path} className='text-white'>
                    <div className='group'>
                      <span className='mx-2 text-white'>{item.label}</span>
                    </div>
                  </Link>
                </motion.p>
              ))}
            </motion.div>
          </section>
          <section className='bg-cover bg-center h-full' style={sectionStyle}>
                <Hero/>
          </section>
        </nav>
        <Card
          isBlurred
          className="border-none bg-background/60 max-w-[100%] h-[40%]"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 p-12 items-center justify-center">
              <Slideshow />
              <div className="flex flex-col col-span-6 md:col-span-8 p-6">
                <h1 className='py-4'>The Best Shoe Of The Season</h1>
                <h3 className='px-2'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </h3>
                <motion.Button
                  color="primary" variant="bordered" className="ml-2 w-40 mt-12 "
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, }}
                  transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100, ease: "linear", }}
                >
                  Bordered
                </motion.Button>
              </div>
            </div>
          </CardBody>
          {/*
          <Card>
            <div className='flex align-center justify-between p-6'>
              <div>
                  <text className='text-4xl'>Recent Launch</text>
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
            <CardBody className="flex flex-row p-12 justify-center">
              {sneakers.map((sneaker, index) => (
                <div key={index} className="relative w-[50%] mr-6 p-6 flex flex-col items-center justify-center  ${currentIndex === index ? '' : 'hidden'}">
                  <p className='text-xs absolute top-1 left-1 p-2 bg-purple-600'>New Arrival</p>
                  <img src={sneaker.image} alt={sneaker.name} className="w-[80%] h-32" />
                  <p className='mt-2'>{sneaker.name}</p>
                  <p className='mt-2'>{sneaker.price}</p>
                  <Button className='w-full mt-2 rounded'>
                    Add to cart
                  </Button>
                </div>
              ))}
            </CardBody>
          </Card>
              */}

          <Card>
            <div className='flex align-center justify-between p-6'>
              <div>
                <text className='text-4xl'>Recent Launch</text>
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
            <CardBody className="flex flex-row p-12 justify-center">
              {sneakers.map((sneaker, index) => (
                <div
                  key={index}
                  className={`relative w-[50%] mr-6 p-6 flex flex-col items-center justify-center ${index >= currentIndex && index < currentIndex + 4 ? 'slide-in' : 'hidden'}`}
                >
                  <p className='text-xs absolute top-1 left-1 p-2 bg-purple-600'>New Arrival</p>
                  <img src={sneaker.image} alt={sneaker.name} className="w-[80%] h-32" />
                  <p className='mt-2'>{sneaker.name}</p>
                  <p className='mt-2'>{sneaker.price}</p>
                  <Button className='w-full mt-2 rounded'>
                    Add to cart
                  </Button>
                </div>
              ))}
            </CardBody>
          </Card>


        </Card>
      </main>
    </>
  );
}

export default Home;
