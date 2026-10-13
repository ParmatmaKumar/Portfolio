import React from 'react'
import Card from '../Card/Card'

const Services = () => {
  return (
    <section className="py-20 px-6 bg-linear-to-br from-[#c213e9] via-[#31153c] to-[#40035d] lg:h-screen">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Services
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-2xl mb-12">
          Transforming ideas into intuitive digital experiences
        </p>

        {/* Cards */}
        <div>
          <Card />
        </div>

      </div>

    </section>
  )
}

export default Services