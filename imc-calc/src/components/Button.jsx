import "./Button.css"


//desestrutura o id e text
const Button = ({ id, text, action }) => {
    const handleAction = (e) => {
        action(e);
    }

    return (
        <button id={id} onClick={handleAction}>
            {text}
        </button>
    )
}

export default Button