import React from 'react'

export default function SectionWrapper(props) {
    const {children, header, title} = props
    return (
    <section className='min-h-screen flex flex-col gap-10'>
    <div className='bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center'>
    <p className='uppercase font-medium'>{header}</p>
    <h2 className=' font-semi-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>{title[0]} <span className='uppercase text-green-400'>{title[1]}</span> {title[2]} </h2>

    </div>
    </section>
  )
}
