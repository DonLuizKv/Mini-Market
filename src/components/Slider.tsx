import Slide from "./Slide";

export default function Slider() {
    return (
        <section className="flex items-center justify-center h-[40rem] mt-1.5 relative overflow-hidden">
            <div className=" h-full w-full flex flex-col">

                <div id="controls" className="h-full w-full flex justify-between ">
                    <button id="prev-slide" className=" h-full flex items-center relative z-[5]">
                        <svg id="prev-slide" className="stroke-[#ababab]/50 hover:stroke-[#ababab]" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ababab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 20l-3 -8l3 -8" /></svg>
                    </button>

                    {/** publicidades **/}
                    {/** mapear las publicidades */}
                    <div id="slides-container" className="h-full w-full flex gap-2 transition-transform">
                        <Slide color="blue" />
                        <Slide color="red" />
                    </div>

                    <button id="next-slide" className="h-full flex items-center relative z-[5]">
                        <svg id="next-slide" className="stroke-[#ababab]/50 hover:stroke-[#ababab]" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ababab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 4l3 8l-3 8" /></svg>
                    </button>
                </div>

                <div id="count-slides" className="w-full flex items-center justify-center gap-2.5 relative z-[5]">
                    {/** mapear el numero de publicidades */}
                    <button className="h-[.25rem] w-[3.5rem] bg-[#ababab]/50 hover:bg-[#ababab]"></button>
                    <button className="h-[.25rem] w-[3.5rem] bg-[#ababab]/50 hover:bg-[#ababab]"></button>
                    {/**
                     *  {slides.map((_, index) => (
                            <button key={index} className="h-[.25rem] w-[3.5rem] bg-[#ababab]/50 hover:bg-[#ababab]"></button>
                        ))}
                        */}
                </div>
            </div>
        </section>
    );
}