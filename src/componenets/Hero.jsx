import React from 'react'

const Hero = () => {
	return (
		<div className='w-full h-[90vh]'>
			<img
				src='img\IMG_0018_2.jpg'
				alt='Show Me'
				className='w-full h-full object-cover brightness-50'
			/>
			<div className='max-w-[1140px] m-auto'>
				<div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
					<h1 className='font-bold text-4xl'>Memorial Restoration</h1>
					<h2 className='text-3xl pb-4 italic'>& Engraving Services</h2>
					<p>
						Located in Southern Maryland, MRES services MD, DC, VA and
						surrounding areas. MRES provides affordable Granite Headstones,
						Bronze Memorials, In-Cemetery Engraving as well as Memorial
						Restoration, Cleaning and Re-Coloring services.
					</p>
					<button className='mt-8 relative h-12 w-60 overflow-hidden border border-indigo-600 text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:underline hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-60 hover:before:opacity-80'>
						Contact us today!
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
