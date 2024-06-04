import React from 'react'

function Services() {
	return (
		<div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
			<div className='relative p-4'>
				<a
					href='/'
					className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold hover:underline cursor-pointer hover:text-[var(--primary-dark)]'
				>
					Headstones
				</a>
				<img
					className='w-full h-full object-cover relative border-4 border-white shadow-lg'
					src='img/headstone1.png'
					alt='/'
				/>
			</div>
			<div className='relative p-4'>
				<a
					href='/'
					className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold hover:underline cursor-pointer hover:text-[var(--primary-dark)]'
				>
					Engraving
				</a>
				<img
					className='w-full h-full object-cover relative border-4 border-white shadow-lg'
					src='img/headstone2.png'
					alt='/'
				/>
			</div>
			<div className='relative p-4'>
				<a
					href='/'
					className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold hover:underline cursor-pointer hover:text-[var(--primary-dark)]'
				>
					Restoration
				</a>
				<img
					className='w-full h-full object-cover relative border-4 border-white shadow-lg'
					src='img/headstone3.png'
					alt='/'
				/>
			</div>
		</div>
	)
}

export default Services
