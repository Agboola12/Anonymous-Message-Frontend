import React from 'react'
import { Link } from 'react-router-dom'

const Land = () => {
  return (
    <div>
          <h1 className='text-2xl  sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white '>
            Design under construction, click the button below to the next page 
      </h1>
   <Link to='/register'>   <button class="bg-blue-500 text-center mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me 
      </button></Link>

    </div>
  )
}

export default Land