interface slideProps {
    color: string,
}

export default function Slide({ color }: slideProps) {
    return (
        <article id="slide" className={`h-full min-w-full flex items-center justify-center py-[.5rem] bg-${color}-500`}>
            <section className="h-full w-full p-2">
                <div>
                    {/* <h1>Unleash the power of sound whit Marshall earphones</h1>
                    <p>
                        discover the perfect blend of style and high-fidelity audio with
                        <i>Marshall's range of premium earphones</i>
                    </p> */}
                </div>
                <div>

                </div>
            </section>
        </article>
    );
}