function Perfil({ nome, cargo, linkinsta, linklinkedin }){
    return(
        <div className="Card">
            <h1>{nome}</h1>
            <p>{cargo}</p>
            <a href={linkinsta} target="_blank" rel="noreferrer">
                Veja o meu Instagram!
            </a>
            <a href={linklinkedin} target="_blank" rel="noreferrer">
                veja o meu linkedin!
            </a>
        </div>
    )
}

export default Perfil;