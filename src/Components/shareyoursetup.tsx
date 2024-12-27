import React from 'react'

const Shareyoursetup = () => {
  return (
    <div>
      <section className="bg-white group">
        <div className="mx-auto max-w-screen-laptop py-10 px-0 lg:px-0 xl:px-0">
          <div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-text-s">
                Share your setup with
              </h2>
              <h1 className="text-2xl sm:text-[40px] font-bold mt-2 text-text-p">
                #FurniroFurniture
              </h1>
            </div>
            <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] grid-rows-[repeat(8,minmax(5.53vw,1fr))] laptop:grid-rows-[repeat(8,minmax(80px,1fr))] gap-[1.1vw] laptop:gap-4">
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer row-span-4"
                style={{ backgroundImage: 'url("/assets/Rectangle 36.png")' }}
              />
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer col-span-4 row-span-3 row-start-2 col-start-2"
                style={{ backgroundImage: 'url("/assets/Rectangle 38.png")' }}
              />
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer col-span-3 row-span-4 row-start-3"
                style={{ backgroundImage: 'url("/assets/Rectangle 40.png")' }}
              />
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer col-span-3 row-span-4 row-start-2"
                style={{ backgroundImage: 'url("/assets/Rectangle 43.png")' }}
              />
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer col-span-3 row-span-5"
                style={{ backgroundImage: 'url("/assets/Rectangle 45.png")' }}
              />
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer col-span-2 row-span-4"
                style={{ backgroundImage: 'url("/assets/Rectangle 37.png")' }}
              />
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer col-span-3 row-span-3"
                style={{ backgroundImage: 'url("/assets/Rectangle 39.png")' }}
              />
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer col-span-2 row-span-3"
                style={{ backgroundImage: 'url("/assets/Rectangle 41.png")' }}
              />
              <div
                className="bg-cover group-hover:grayscale hover:!grayscale-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer col-span-3 row-span-2"
                style={{ backgroundImage: 'url("/assets/Rectangle 44.png")' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shareyoursetup
