export function About() {
    return (
        <div className="
            flex-1
            pt-8
            flex
            justify-center
        ">
            <div className="
                max-w-[70%]
                flex
                flex-col
                items-center
            ">
                <p className="
                    text-white
                    text-2xl
                    pb-4
                ">
                    About Us
                </p>
                <img src={`https://picsum.photos/1000/1000`} alt='about image' className="
                    pb-6
                    rounded-sm
                "/>
                <p className="
                    text-white
                    pb-3
                ">
                    At Rao Smoke Shop, we believe that every customer gets better results when we focus on specific customer needs. This is why our smoke shop concentrates on tobacco products. There’s a wide variety of nicotine delivery methods, each with its own unique character and equipment. From old fashioned cigars and pipes to manufactured cigarettes and hookah and the latest member, electronic cigarettes.
                </p>
                <p className="
                    text-white  
                ">
                    As a vape shop, we carry a wide variety of e cig products. We give you options when it comes to things like e cig batteries and a delicious variety of e juice flavors. When you come into our shop, you will be able to pick from many different flavors that will sate any craving that you have.
                </p>
            </div>
        </div>
    )
}
