function ChangePage({apiInfo, setApiCharacter}){

    const prevPage = (event) => {
        setApiCharacter(apiInfo.prev)
        setTimeout(() => {
        window.scrollTo(0, 0)
       
    } ,100)
}
    const nextPage = (event) => {
        setApiCharacter(apiInfo.next)
        setTimeout(() => {
        window.scrollTo(0, 0)
       
    } ,100)
}

    return (
        <div>
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
        </div>
    )
}

export {ChangePage}