import Image from "next/image";
export default function Bento() {

    return (
        <section className="h-auto w-full bg-[#3B3B3B] flex flex-col gap-3 p-[4rem]">
            <article className="flex gap-3">
                {/** main product **/}
                <aside className="h-[40rem] w-[60rem] relative">
                    <div className="absolute h-full w-full p-[1rem] flex items-end bg-gradient-to-t from-black/70 to-transparent z-10 rounded-md">
                        <p className="">earphones</p>
                    </div>
                    <Image src="/earphones.png" className="h-full w-full rounded-md" height={40} width={40} alt="ofer product" />
                </aside>

                {/** types of products **/}
                <aside className="w-[27.5rem] grid grid-cols-2 gap-3">
                    <div className="bg-[#4b4b4b] rounded-md h-full w-full flex flex-col items-center justify-center gap-4">
                        <Image src="/electronics.png" className="h-[5rem] w-[5rem] rounded-full " height={40} width={40} alt="typeProduct" />
                        <p className="text-white text-xl font-medium">Electronic</p>
                    </div>

                    <div className="bg-[#4b4b4b] rounded-md h-full w-full flex flex-col items-center justify-center gap-4">
                        <Image src="/electronics.png" className="h-[5rem] w-[5rem] rounded-full " height={40} width={40} alt="typeProduct" />
                        <p className="text-white text-xl font-medium">Electronic</p>
                    </div>

                    <div className="bg-[#4b4b4b] rounded-md h-full w-full flex flex-col items-center justify-center gap-4">
                        <Image src="/electronics.png" className="h-[5rem] w-[5rem] rounded-full " height={40} width={40} alt="typeProduct" />
                        <p className="text-white text-xl font-medium">Electronic</p>
                    </div>

                    <div className="bg-[#4b4b4b] rounded-md h-full w-full flex flex-col items-center justify-center gap-4">
                        <Image src="/electronics.png" className="h-[5rem] w-[5rem] rounded-full " height={40} width={40} alt="typeProduct" />
                        <p className="text-white text-xl font-medium">Electronic</p>
                    </div>

                    <div className="bg-[#4b4b4b] rounded-md h-full w-full flex flex-col items-center justify-center gap-4">
                        <Image src="/electronics.png" className="h-[5rem] w-[5rem] rounded-full " height={40} width={40} alt="typeProduct" />
                        <p className="text-white text-xl font-medium">Electronic</p>
                    </div>

                    <div className="bg-[#4b4b4b] rounded-md h-full w-full flex flex-col items-center justify-center gap-4">
                        <Image src="/electronics.png" className="h-[5rem] w-[5rem] rounded-full " height={40} width={40} alt="typeProduct" />
                        <p className="text-white text-xl font-medium">Electronic</p>
                    </div>

                </aside>
            </article>

            <article className="">
                <aside>
                    regalos
                </aside>
                <aside>
                    oferta y otras cosas
                </aside>
            </article>
        </section>
    );
}