import React, { useEffect, useState } from 'react'
import { getWeather } from '../../services/weatherApi'
import SimpleCard from "../../components/SimpleCard"
import { Box } from '@material-ui/core'



export default function Home() {
  const [data, setData] = useState()
  
  const handleGetWeather = async ({coords}) => {
    const res = await getWeather(coords)
    setData(res.data.results)
  }

  useEffect(() => {
        navigator.geolocation.getCurrentPosition(handleGetWeather)
  }, [])

  return (
    <Box mt="40px" mb="40px">
      {data && <SimpleCard data={data}/>}
    </Box>
  )
}
