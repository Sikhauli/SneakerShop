import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";


export default function Hero() {

    return (
        <Card
            isBlurred
            className="border-none bg-background/60 max-w-[100%] h-[60%]"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <motion.div
                            className="carousel-item"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-7">
                                        <div className="detail-box">
                                            <motion.div
                                                initial={{ opacity: 0, y: -50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8 }}
                                            >
                                                <h1 className="font-serif">
                                                    <motion.span
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.2, duration: 0.5 }}
                                                    >
                                                        Sneaker
                                                    </motion.span> Supreme <br />
                                                    <motion.span
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.4, duration: 0.5 }}
                                                    >
                                                        Unrivaled
                                                    </motion.span> Style in Every Step
                                                </h1>
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.6, duration: 0.5 }}
                                                    className="sm:flex mt-6 font-serif"
                                                >
                                                    Step into Sneaker Supreme: Elevate Your Footwear Game with Our Unmatched Style
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8 }}
                                                className="hidden sm:flex btn-box mt-8"
                                            >
                                                <motion.Button 
                                                    color="primary" variant="bordered" className="mr-4 font-serif"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.5 }}
                                                >
                                                        Bordered
                                                </motion.Button>
                                                <motion.Button color="primary" variant="flat" className="font-serif"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 1, duration: 0.5 }}
                                                >
                                                        Our Project
                                                </motion.Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div> 
                    </div>
                    <motion.div
                            whileHover={{ rotate: 360 }} 
                            transition={{ duration: 4 }} 
                            className="relative col-span-6 md:col-span-4"
                        >
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src="https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png"
                                width="100%"
                            />
                    </motion.div>
                </div>
            </CardBody>
        </Card>
    );
}
