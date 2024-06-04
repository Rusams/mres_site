import React from 'react'

const Footer = () => {
	return (
		<div>
			<div class='bg-[var(--primary-dark)]'>
				<footer class=' max-w-[1240px] mx-auto p-4 md:flex md:items-center md:justify-between md:p-6'>
					<span class='text-sm text-white sm:text-center '>
						© 2024{' '}
						<a href='/' class='hover:underline' target='_blank'>
							Memorial Restoration & Engraving Services™
						</a>
					</span>
					<ul class='flex flex-wrap items-center mt-3 sm:mt-0'>
						<li>
							<a
								href='/'
								class='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Headstones
							</a>
						</li>
						<li>
							<a
								href='/'
								class='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Engraving
							</a>
						</li>
						<li>
							<a
								href='/'
								class='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Restoration
							</a>
						</li>
						<li>
							<a href='/' class='text-sm text-white hover:underline '>
								Contact
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	)
}

export default Footer
