import React from 'react'

type Props = {
    aero: string
    heat : string
    weight : string
    mainTitle : string
    materialdesc1 : string
    materialdesc2 : string
    materialdesc3 : string
    materialdesc4 : string
}

const Titanium = ({ aero, heat, weight, mainTitle, materialdesc1, materialdesc2, materialdesc3, materialdesc4 } : Props) => {
  return (
    <section className="relative py-24 px-4 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[20rem] md:text-[30rem] font-bold tracking-tighter">TC6</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-6">
              <div className="relative">
                <h2 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none">TC6</h2>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white"></div>
              </div>
              <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wide">GRADE TITANIUM</p>
              <div className="pt-4 space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{aero}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{heat}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{weight}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
                  {mainTitle}
                </h3>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  {materialdesc1}
                </p>

                <p>
                  {materialdesc2}
                </p>

                <p>
                  {materialdesc3}
                </p>

                <p className="text-white font-medium">
                  {materialdesc4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Titanium