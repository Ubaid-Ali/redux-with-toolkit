import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, changeUserName, changeNameByInput } from './userNameSlice';

import styles from './userName.module.css';

const UserName = () => {

    const [inputState, setInputState] = useState();
    const name = useSelector(selectUserName);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.value}>
                NAME: {name}
            </div>

            <input
                type='text'
                className={styles.textbox}
                onChange={(e) => setInputState(e.target.value)} required="required"
            />

            <br />

            <div className={styles.row}>
                <button
                    className={styles.button}
                    onClick={() => dispatch(changeNameByInput(inputState || "Empty"))} >
                    CHANGE NAME By INPUT
            </button>

                <br />

                <button
                    className={styles.button}
                    onClick={() => dispatch(changeUserName())} >
                    CHANGE STATIC NAME
            </button>
            </div>
        </div>
    );
};

export default UserName;