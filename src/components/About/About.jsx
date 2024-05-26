import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
    return <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl('about/aboutImage.png')} alt='its me'/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    {/* <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor icon'/> */}
                    <div className={styles.aboutItemText}>
                        {/* <h3>Frontend Developer</h3> */}
                        <p>     I'm a Frontend developer with experience in building responsive and optimized sites.</p>
                        <p>     I'm excited about the opportunity to leverage my skills and experiences to tackle new challenges 
                            and make a meaningful impact. Whether it's developing cutting-edge software solutions or optimizing 
                            existing systems, I'm dedicated to delivering excellence and driving results.</p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt='Server icon'/>
                    <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                        <p>I have experience in developing fast and optimized backend systems and APIs.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/uiIcon.png')} alt='UI icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have design multiple landing pages and have created design systems as well.</p>
                    </div>
                </li> */}
            </ul>
        </div>
    </section>
}