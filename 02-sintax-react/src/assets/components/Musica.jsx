export function Musica ({ImageM, NombreM, Género}) {
    return (
        <div>
            <h2>{NombreM}</h2>
            <img src={ImageM} alt="" width="150"/>
            <h3>{Género}</h3>
        </div>
    )
}