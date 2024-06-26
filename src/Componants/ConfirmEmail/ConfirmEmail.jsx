import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link, Navigate, useParams } from 'react-router-dom';
import styles from "./styles.module.css";
import success from "../../images/success.png";

export default function ConfirmEmail() {

    return <>
        <div>

            <div className={styles.container}>
                <img src={success} alt="success_img" className={styles.success_img} />
                <h1>Email verified successfully</h1>
                <Link to="/login">
                    <button className={styles.green_btn}>Login</button>
                </Link>
            </div>

        </div>
    </>
};


