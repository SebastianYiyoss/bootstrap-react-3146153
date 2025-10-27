export function UserCard ({image, UserName}) {
    return (
        <>
        <h1>{UserName}</h1>
        <img src={image} alt="" width="150" />
        <small>{UserName}</small>
        </>
    )
}