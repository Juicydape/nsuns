import React from 'react'
import classes from './Footer.module.css'

export const Footer: React.FC = () => {
    return (
        <footer className={classes.Footer}>
        <p>nSuns original idea by reddit user u/nSuns, this site is an educational project</p>
        <p>Piotr Materna 2023</p>
    </footer>
    )
}