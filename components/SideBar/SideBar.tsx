import React from "react";
import Image from 'next/image';
import styles from '../../styles/SideBar.module.css';


interface SideBarProps{
    currentMenuItem: string;
}

function SideBar(props: SideBarProps) {
    return (
        <div className={styles.sidebar_container}>
            <div className="sidebar-top-header">
                <Image src="/../public/logo.png" alt="logo-image" width="50" height="50"/>
            </div>
            <div className="sidebar-menu">
                {props.currentMenuItem}
            </div>
            <div className="sidebar-bottom-footer">

            </div>
        </div>
    )
}

export default SideBar;