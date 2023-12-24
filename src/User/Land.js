import React from 'react'
import { Link } from 'react-router-dom'

const Land = () => {
  return (
    <div>
   <Link to='/register'>   <button class="bg-blue-500 text-center mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button></Link>

    </div>
  )
}

export default Land