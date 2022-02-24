


import './ColoredTag.scss';
const ColoredTag = ({
    text,
    backgroundColor,
    fontSize,
    className,
}) => {
    const style = { backgroundColor: backgroundColor, fontSize: fontSize };
    return (
        <div className={`colored-tag ${className}`} style={style}>
            <p>{text}</p>
        </div>
    )

}

export default ColoredTag;