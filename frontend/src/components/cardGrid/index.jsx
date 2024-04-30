import React, { useEffect, useState } from "react";
import gifAnimation from "../../assets/output.gif"
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button } from "@nextui-org/react";

function TypingText({ text }) {
    const [visibleText, setVisibleText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleText(text.slice(0, index));
            setIndex(index => index + 1);
        }, 100);

        return () => clearInterval(interval);
    }, [text, index]);

    return (
        <AnimatePresence>
            <motion.p
                className="animatedText text-4xl leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
            >
                {visibleText}
            </motion.p>
        </AnimatePresence>
    );
}

function CardGrid({ data }) {
    

    
    const numColumns = data.length > 3 ? 'grid-cols-4' : 'grid-cols-3';

    if (data.length === 0) {
        return (
            <>
                <div className="flex flex-col items-center justify-center p-12">
                    <motion.p
                        className="bold font-sans-serif text-3xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {data.length === 0 && <TypingText text="Ooops seems like your search has no results!!" />}
                    </motion.p>
                    <div className="w-[40%] h-[30%] py-12">
                        <img src={gifAnimation} alt="gif" className="h-full w-full"/>
                    </div>
                </div>
            </>
        )
    }

    return (

        <div className={`grid gap-4 ${numColumns} justify-center `}>
            {data.map((brand, index) => (
                <div key={index} className="rounded overflow-hidden border p-2">
                    <img src={brand.image} alt={brand.brand} className="w-full h-[60%] border p-6" />
                    <div className="">
                        <p className="font-bold font-serif text-xl">{brand.brand}</p>
                        <p className="text-sm font-serif">{brand.name}</p>
                        <p className="font-bold font-serif">{brand.price}</p>
                        <Button className="w-full font-serif rounded">Add To Cart</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardGrid;