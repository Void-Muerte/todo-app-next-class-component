"use client"
import React from "react";
import TodoIcon from "./TodoIcon";
import styles from './Header.module.css'


class Header extends React.Component{
    render(){
        return(
            <header className={styles.main}>
                <span className={styles.brand}><TodoIcon /></span>
                <span className={styles.brandText}>Todo Manager</span>
            </header>
        )
    }
}

export default Header;