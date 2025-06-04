"use client"
import { IconChevronCompactRight, IconChevronCompactLeft } from "@tabler/icons-react";
import { useState } from "react";

export default function Slider() {
    const slides = ["Slide 1", "Slide 2", "Slide 3"]; // Puedes poner imágenes, componentes, etc.
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="h-[40.5rem] flex flex-col">
            <article className="h-full w-full flex justify-between items-center relative">
                <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-4 z-10 text-[#ababab]/50 hover:text-[#ababab] transition-all"
                >
                    <IconChevronCompactLeft size={55} />
                </button>

                <aside className="h-full w-full flex items-center justify-center text-4xl font-bold">
                    {slides[currentSlide]}
                </aside>

                <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-4 z-10 text-[#ababab]/50 hover:text-[#ababab] transition-all"
                >
                    <IconChevronCompactRight size={55} />
                </button>
            </article>

            <article className="flex items-center justify-center p-2 gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`h-[.25rem] w-[3.5rem] transition-all ${i === currentSlide ? "bg-[#ababab]" : "bg-[#ababab]/20 hover:bg-[#ababab]"}`}
                    />
                ))}
            </article>
        </section>
    );
}