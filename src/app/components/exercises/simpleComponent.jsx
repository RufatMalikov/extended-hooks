import React from "react";

import PropTypes from "prop-types";
// import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {console.log(isAuth)}
            {isAuth ? (
                <button onClick={onLogOut}>Выйти из системы</button>
            ) : (
                <button onClick={onLogin}>Войти</button>
            )}
        </>
    );

    // return <Subtitle>{name || "Component"}</Subtitle>;
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.string,
    onLogOut: PropTypes.string,
    isAuth: PropTypes.string
};
export default SimpleComponent;
