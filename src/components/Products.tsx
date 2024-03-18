export function Products() {
    return (
        <div className="
            flex-1
            pt-8
            flex
            justify-center
        " >
            <div className="
                max-w-[80%]
                flex
                flex-col
                items-center
            ">
                <p className="
                    text-white
                    text-2xl
                    pb-4
                ">
                    Our Products
                </p>
                <div className="
                    text-white
                    flex
                    flex-col
                    items-center
                    mt-4
                    mb-4
                ">
                    <p className="
                        text-xl
                    ">
                        Product Name
                    </p>
                    <div className="
                        flex
                    ">
                        <div className="
                            flex
                            items-center
                            mr-3
                        ">
                            <img src="/icons8-previous-100.png" width="120" height="120" />
                        </div>
                        <div className="
                            flex
                            flex-col
                            justify-center
                            items-center
                        ">
                            <div>
                                <img src="https://picsum.photos/200/200" className="
                                    rounded-lg
                                    m-2
                                "/>
                            </div>
                            <p className="
                                mt-2
                                max-w-[80%]
                            ">
                                Some description of the product that provides the user with the context they need to ascertain the context, usage and quality of the item on offer.
                            </p>
                        </div>
                        <div className="
                            flex
                            items-center
                            ml-3
                        ">
                            <img src="/icons8-next-100.png" width="120" height="120" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
