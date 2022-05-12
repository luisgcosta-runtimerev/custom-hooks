import React from 'react'
import useFetchHook from './useFetchHook'

export default function MyUseFetch() {
    const {data, error, isLoading} = useFetchHook('https://dog.ceo/api/breeds/list/all')

    if(error) {
      return <div>Something went wrong!</div>
    }

    if(isLoading) {
      return <div>Loading your data...</div>
    }

    //console.log(data)
    console.log('My use fetch render')

    return (
    <div>
      {data && Object.keys(data?.message).map(breed => (
        <div key={breed}>{breed}</div>
      ))} 

    </div>
  )
}
