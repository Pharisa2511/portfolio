import React from 'react'
import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div id="portfolio" className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="coding"
                    />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="coding"
                    />
                </Tilt>
                <p>Project Title</p>
            </div>

            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="coding"
                    />
                </Tilt>
                <p>Project Title</p>
            </div>

            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img
                        src="https://media.istockphoto.com/id/1885430570/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%8A%E0%B8%97%E0%B8%9A%E0%B8%AD%E0%B8%97%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B4%E0%B8%A9%E0%B8%90%E0%B9%8C.jpg?s=612x612&w=is&k=20&c=rEwbZ0Z1gDHyH0VQYzNxVDnM0-H_aCqaKl3ZwfOB6r8="
                        alt="coding"
                    />
                </Tilt>
                <p>Project Title</p>
            </div>

            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img
                        src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="coding"
                    />
                </Tilt>
                <p>Project Title</p>
            </div>

        </div>
    </div>
  );
}

export default Portfolio