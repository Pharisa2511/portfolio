import React from 'react'
import styles from "./Number.module.css";
import * as CountUpModule from "react-countup";

function resloveDefault(mod) {
    let m = mod;
    while(m && typeof m !== "function" && m.default){
        m = m.default;
    }
    return m;
}

const CountUp = resloveDefault(CountUpModule);
import { useInView } from "react-intersection-observer";

function NumberItem({end, label}){
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div className={styles.number_items}>
            <h3>
                <div ref={ref}>
                    {inView ? <CountUp start={0} end={end} duration={5} /> :null} +
                </div>
            </h3>
        </div>
    );
}

function Number() {
    const items = [
        { end: 100, label: "Project Delivered" },
        { end: 50, label: "Companies Helped" },
        { end: 10, label: "Years of experience" },
        { end: 200, label: "Happy Clients" }
    ];
    return (
        <div className={styles}>
            {items.map((item) => (
                <NumberItem key={item.label} end={item.end} label={item.label} />
            ))}
        </div>
    );
}

export default Number