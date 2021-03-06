import React from 'react'

import { Link } from 'react-router-dom'

import './Error.scss'

export default function Error() {
	return (
		<section className='error-page section'>
			<div className='error-container'>
				<h1>oops! page not found</h1>
				<Link to='/' className='btn btn-primary'>
					back home
				</Link>
			</div>
		</section>
	)
}
