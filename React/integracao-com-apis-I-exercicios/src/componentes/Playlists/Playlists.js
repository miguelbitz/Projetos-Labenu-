import React, {  useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import axios from "axios";

function Playlists() {
    const [playlists, setPlaylists] = useState([])

    const headers={
        headers: {
            Authorization: "miguel-alves-ozemela"
        }
    }

    const getAllPlaylists = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', headers)
        .then((response)=>{
            setPlaylists(response.data.result.list)
        }) 
        .catch((error)=>
            console.log(error.response.data.message)
        )
    }

    useEffect(()=>{
        getAllPlaylists()
    },[])
  
    return (
        <div>
            {playlists.map((playlist) => {
                return <Musicas key={playlist.id}
                playlist={playlist}
                headers={headers}
                getAllPlaylists={getAllPlaylists}/>
            })}

        </div>
    );
}

export default Playlists;
