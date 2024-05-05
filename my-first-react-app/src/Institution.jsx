function Institution(props)
{
    const instiutionStyle =
    {
        backgroundColor: "pink",
        padding: "5px 20px",
        margin: "20px",
        border: "5px double purple"
    }

    return(<div style={instiutionStyle}>
        <h3>{props.name}</h3>
        <h3>{props.attendance}</h3>
        <h3>{props.study}</h3>
        <p>{props.description}</p>
    </div>)
}

export default Institution;