import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
    return (
        <i
            className={props.className}
            style={{ fontSize: `${props.size}px`, color: `${props.color}` }}
        />
    );
};

Icon.propTypes = {
    className: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string,
};

export default Icon;
