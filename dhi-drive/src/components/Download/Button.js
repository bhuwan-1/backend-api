import React from 'react'
import styles from './Btn.module.css' 
import {AiOutlineDownload} from 'react-icons/ai'

function Button() {

    const style = {

        color: "white",
        fontSize: "16px"
    }

    return (
        <div className={styles.btn}>
            Download &nbsp; <AiOutlineDownload style={style}/>
        </div>
    )
}

export default Button
