import PropTypes from "prop-types";
import React, { useEffect, useState, useCallback } from "react";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.storage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate render
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
