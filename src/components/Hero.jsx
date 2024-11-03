import React from "react";

export default function Hero(){
    return(
        <div className="min-h-screen flex flex-col gap-3 items-center justify-center
        text-center max-w-[900px] w-full mx-auto" >
        <div className="flex flex-col gap-4">
            <p>SAATNYA UNTUK MENGGUNAKAN</p>
            <h1 className="uppercase font-bold text-5xl 
            sm:text-6xl md:text-7xl">
                <span className="text-yellow-200">My</span>Gym</h1>
        </div>
            <p className="text-sm md:text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facilis, <span className="text-yellow-100 font-medium">Lorem, ipsum dolor.</span> harum similique quo numquam laborum mollitia!</p>

            <button className="px-8 py-4 rounded-md border-[2px] bg-slate border-yellow-300 border-solid ">Masuk & Dapatkan</button>
        </div>
    )
}