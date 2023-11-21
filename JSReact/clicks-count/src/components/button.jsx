import '../styles/button.css';

function Button({ text, isClickButton, clickManage }) {
    // The fisrt two parameters are props and the last one is a function
    return (
        <button
            className={ isClickButton ? 'button-click' : 'button-reboot' }
            onClick={clickManage}>
            {text}
        </button>
    );
}

export default Button;