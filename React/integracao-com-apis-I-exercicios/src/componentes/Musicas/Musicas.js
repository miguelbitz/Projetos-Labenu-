import React, { useEffect, useState } from 'react'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'
import axios from 'axios'

export default function Musicas(props) {
    const [musicas, setMusicas] = useState([])
    const [addArtista, setAddArtista] = useState('')
    const [addMusica, setAddMusica] = useState('')
    const [addUrl, setAddUrl] = useState('')

    const getPlaylistTracks = () =>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`, props.headers)

        .then((response)=>{
            setMusicas(response.data.result.tracks)
        })
        .catch((error)=>{
            console.log(error.response.data.message)
        })
    }

    const addTrackToPlaylist = (name, artist, url)=>{
        const body = {
            name,
            artist,
            url
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`, body, props.headers)

        .then((response)=>{
            console.log(response)
            setAddMusica('')
            setAddArtista('')
            setAddUrl('')
            props.getAllPlaylists()
        })
        .catch((error)=>{
            console.log(error.response.data.message)
        })
    }

    const removeTrackFromPlaylist = (trackId) =>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks/${trackId}`, props.headers)
        .then((response)=>{
            console.log(response.data)
            props.getAllPlaylists()
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    useEffect(()=>{
        getPlaylistTracks()
        props.getAllPlaylists()
    },[musicas])

    return (
        <ContainerMusicas>
            <h2>{props.playlist.name}</h2>
            {musicas.map((musica) => {
                return (
                    <Musica key={musica.id}>
                        <h3>{musica.name} - {musica.artist}</h3>
                        <audio src={musica.url} controls />
                        <button onClick={()=>removeTrackFromPlaylist(musica.id)}>X</button>
                    </Musica>)
            })}
            <ContainerInputs>
                <InputMusica 
                placeholder="artista" 
                value={addArtista}
                onChange={(e)=>setAddArtista(e.target.value)}/>
                <InputMusica placeholder="musica" 
                value={addMusica}
                onChange={(e)=>setAddMusica(e.target.value)}/>
                <InputMusica placeholder="url" 
                value={addUrl}
                onChange={(e)=>setAddUrl(e.target.value)}/>
                <Botao onClick={()=>addTrackToPlaylist(addMusica, addArtista, addUrl)}>Adicionar musica</Botao>
            </ContainerInputs>
        </ContainerMusicas>
    )
}

