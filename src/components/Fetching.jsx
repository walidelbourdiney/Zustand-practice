import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json());

const Fetching = () => {
const {data, isLoading, error} = useSWR('https://api.chucknorris.io/jokes/random', fetcher);
console.log(data)

if(error) return <div>Failed</div>
if(isLoading) return <div>...Loading</div>

  return (
    <div>
        <img src={data.icon_url} alt="icon" />
        <h1>{data.value}</h1>
    </div>
  )
}

export default Fetching