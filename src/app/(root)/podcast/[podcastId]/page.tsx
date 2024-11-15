import React from 'react'

const page = ({params}:{params:{podcastId:string}}) => {
  return (
    <div>

        <h1 className='text-orange-100'> podcast id is {params.podcastId} </h1>
      
    </div>
  )
}

export default page
