import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import styles from "./styles.module.css";
import failure from "../../images/false-2061132_640.webp";


export default function ConfirmFaile() {
    return <>
        <div className={styles.container}>
            <img src={failure} alt="failure_img" className="w-25" />
            <h1>Email verified failure OR Already confirmed</h1>
            <Link to="/register">
                <button className={styles.green_btn}>Register</button>
            </Link>
        </div>    </>
}
