import React, { useState } from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>
                    Feel free to reach out!
                </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt={'Email Icon'}/>
                    <a href={'mailto:bcsamarathunga@gmail.com'}>bcsamarathunga@gmail.com</a>
                </li>

                <li className={styles.link}> 
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt={'Linkedin Icon'}/>
                    <a href={'https://www.linkedin.com/in/bhagya-samarathunga-203a9886/'}>LinkedIn.com/bhagyasamarathunga</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt={'Github Icon'}/>
                    <a href={'https://github.com/BhagyaPrasadSamarathunga'}>github.com/bhagyasamarathunga</a>
                </li>
            </ul>
        </footer>
    )
}