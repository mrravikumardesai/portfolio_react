import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">


                    <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                        We belongs to People who care about your growth
                    </h1>
                    <p className="mt-8 text-lg text-gray-700">
                        hire most dynamic developer on earth
                    </p>
                    <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
                        <div className="rounded-full bg-white p-1 px-2">
                            <p className="text-sm font-medium">Hire me</p>
                        </div>
                        <p className="text-sm font-medium"> &rarr;</p>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                    <img
                        className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                        src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection