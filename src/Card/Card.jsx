import React from 'react'
import * as Icons from 'lucide-react'
import { servicesData } from '../Data/service'

const Card = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>

      {servicesData.map((service, index) => {

        const IconComponent = Icons[service.icon]

        return (
          <div
            key={index}
            className="p-8 w-full max-w-130 min-h-75
            shadow-md rounded-md
            hover:shadow-xl transition-all duration-300
            bg-black/50 text-pink-200
            hover:bg-linear-to-br
            hover:from-[#ff18c5] hover:to-[#6f02a1]
            cursor-pointer text-center flex flex-col items-center justify-center"
          >

            {/* Icon */}
            {IconComponent && (
              <div className="mb-5 text-pink-400">
                <IconComponent size={70} />
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm opacity-90">
              {service.description}
            </p>

          </div>
        )
      })}

    </div>
  )
}

export default Card