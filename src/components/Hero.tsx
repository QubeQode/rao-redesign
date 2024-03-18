export function Hero(dimensions: { width: number, height: number }) {
    return (
        <div className="flex-1 static" >
            <img src={`https://picsum.photos/${dimensions.width}/${dimensions.height / 4}`} alt='hero image' className="
                object-cover
                bg-blend-overlay
            "/>
            <div className="
                absolute
                inset-0
                max-h-[367px]
                bg-gray-700 
                opacity-60
            "/>
            <div className="
                absolute
                inset-0
                flex
                flex-col
                justify-center
                items-center
                max-h-[367px]
            ">
                <div className="mt-10">
                    <p className="
                        text-white
                        text-4xl
                    ">
                        Rao Smoke Shop
                    </p>
                    <p className="
                        text-white
                        text-2xl
                    ">
                        Everyday: 9am-4am
                    </p>
                </div>
                <div className="
                    flex
                    flex-col
                    pt-12
                    justify-center
                    items-center
                ">
                    <button className="
                        text-white
                        bg-accent
                        p-1
                        pl-2
                        pr-2
                        rounded-full
                    ">
                        Check Out Our Selection
                    </button>
                </div>
            </div>
        </div>
    )
}
