import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'

// TREE SHAKING
function TODO() {
    TODO2()
}

function TODO2() {
    throw new Error('error occurred');
}

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1)
        // TODO();
    }
    // TODO('51235');
    //
    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    //
    // if(__ENV__ === 'development') {
    //     // addDevtools()
    // }

    return (
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={200} height={200} src={avatarPng} alt=""/>
                <br/>
                <img width={200} height={200} src={avatarJpg} alt=""/>
            </div><br/>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>
                Press me
            </span></button>
            <About />
        </div>
    );
};
