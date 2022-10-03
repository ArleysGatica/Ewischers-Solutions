import React, { useState, useEffect } from "react";
import Front from "../../assets/fon.jpg";
import back from "../../assets/back.webp";
import mo from "../../assets/Movil.jpg";
import dev from "../../assets/dev.jpeg";
import devops from "../../assets/HomeTree.png";

export const Carousel = () => {

    const images = [
        Front,
        back,
        mo,
        dev,
        devops
    ];

    const title = [
        "Frontend",
        "Backend",
        "Movil",
        "Desarrollo",
        "Devops"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const nextImage = () => {
        if (index === images.length - 1) {
            setIndex(0);
            console.log("nextImage", index);
        } else {
            setIndex(index + 1);
            console.log("nextImage", index);
        }
    };

    const prevImage = () => {
        if (index === 0) {
            setIndex(images.length - 1);
            console.log("prevImage", index);
        } else {
            setIndex(index - 1);
            console.log("prevImage", index);
        }
    };
    
    return (
        <div className="relative w-full h-96 mt-2">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className=""></div>
                <div className="relative flex items-center justify-center w-[80%] rounded-lg overflow-hidden">
                    <div className="flex flex-col items-center justify-center w-[80%] shadow-lg">
                        <div className="flex items-center justify-center">
                            <h1 className="text-4xl font-bold text-white">{title[index]}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                                onClick={prevImage}>
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">+
                                    <path d="M15.41 16.09L10.83 11.5l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                                </svg>
                            </button>
                            <div className="relative w-96 h-96 rounded-lg overflow-hidden">
                                <img className="absolute inset-0 object-container w-full h-full" src={images[index]} alt="carousel" />
                            </div>
                            <button className="px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                                onClick={nextImage}>
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M8.59 7.91L13.17 12.5 8.59 17.09 10 18.5l6-6-6-6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};