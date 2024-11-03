import React from "react";

export default function Hero(){
    return(
        <div className="min-h-screen flex flex-col gap-8 items-center justify-center
        text-center max-w-[900px] w-full mx-auto p-4" >
        <div className="flex flex-col gap-2">
            <p>SAATNYA UNTUK MENCOBA</p>
            <h1 className="font-bold text-5xl 
            sm:text-6xl md:text-7xl">
                <span className="text-green-500">My</span>GYM</h1>
        </div>
            <p className="text-sm md:text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facilis, <span className="text-green-500 font-medium">Lorem, ipsum dolor.</span> harum similique quo numquam laborum mollitia!</p>

            <button className="px-6 py-3 rounded-md border-[2px] bg-slate-95 border-green-300 border-solid greenShadow duration-300 ">
                Masuk & Dapatkan
            </button>
        </div>
    )
}