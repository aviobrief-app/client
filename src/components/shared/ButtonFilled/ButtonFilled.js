import { Link } from 'react-router-dom';
import './ButtonFilled.scss';

const ButtonFilled = ({
    url,
    color,
    fillColor,
    text,
    fontSize,
    fontWeight,
    letterSpacing,
    disabled,
    border,
    width,
    height,
    onClick,
}) => {
    const style = {
        color: `${color || '#ffffff'}`,
        backgroundColor: `${fillColor || '#9a2fae'}`,
        fontSize: `${fontSize || '18px'}`,
        fontWeight: `${fontWeight || '700'}`,
        letterSpacing: `${letterSpacing || '1px'}`,
        border: `${border || 'none'}`,
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
    };

    return (
        <button
            className="button-filled"
            type="button"
            style={style}
            disabled={disabled}
            onClick={onClick}
        >
            <Link
                className="button-filled-link"
                to={url || '/no-url-passed'}
                onClick={(e) => e.preventDefault()}
            >
                {text || 'Default Label'}
            </Link>
        </button>
    );
};

export default ButtonFilled;
