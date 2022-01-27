function Episode ({episodeObject}) {
   // console.log(episodeObject)
     const episode = episodeObject
     
     return(
         <div>
             <p>{episode.url}</p>
 
             <div>
                 <h2>{episode.name}</h2>
                 <p>{episode.id}</p>
             </div>
             
         </div>
     )
 }
 
 export {Episode}
 