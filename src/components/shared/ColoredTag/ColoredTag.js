


import './ColoredTag.scss';
const ColoredTag = ({
    text,
    backgroundColor,
    fontSize,
}) => {
    const style = { backgroundColor: backgroundColor, fontSize: fontSize };
    return (
        <div className="colored-tag" style={style}>
            <p>{text}</p>
        </div>
    )

}

export default ColoredTag;