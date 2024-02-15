import './button.scss';

export default function Button({ clickHandler, children }) {
    return (
        <button className='button' onClick={clickHandler}>
            {children}
        </button>
    )
}
