import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'


const Container = styled.div`
flex: 2;
`

const Recommandation = ({tags}) => {
    const [videos ,setVideos] =useState([])

    useEffect(()=>{
        const fetchVideos =async ()=>{
            const res = await axios.get(`/videos/tags?tags=${tags}`)
            setVideos(res.data)
        }
        fetchVideos()
    },[tags])
    return (
        <Container>
            {videos.map((video,index)=>(
                <Card key={index} video={video} type="sm"/>
            ))}
        </Container>
    )
}

export default Recommandation