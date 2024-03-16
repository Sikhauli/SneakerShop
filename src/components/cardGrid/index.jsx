import React, { useEffect, useState } from "react";
import gifAnimation from "../../assets/output.gif"
import { motion, AnimatePresence } from 'framer-motion';

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
                className="bold font-sans-serif text-4xl"
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

        <div className={`grid gap-4 ${numColumns} justify-center`}>
            {data.map((brand, index) => (
                <div key={index} className="h-50 rounded overflow-hidden">
                    <img src={brand.image} alt={brand.brand} className="w-full h-[60%] border p-6" />
                    <div className="">
                        <p className="font-bold text-xl text-gray-300">{brand.brand}</p>
                        <p className="text-sm text-gray-100">{brand.name}</p>
                        <p className="font-bold ">{brand.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardGrid;