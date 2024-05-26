import React from 'react';
import styles from './Profile.module.css';
import { getImageUrl } from '../../utils';

export const Profile = () => {
    return <section className={styles.container}>

        <img className={styles.profileImage} src={getImageUrl('profile/bhagyaProfile.png')} alt='profile image of me'/>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Bhagya 
                
            </h1>
            <p className={styles.description}>
                I am a passionate Frontend developer based in Berlin with over 6 years of industry experience.  Reach out if you would like to learn more!                 
            </p>
            <div className='buttonContainer'>
                <a className={styles.contactBtn} href='mailto:bcsamarathunga@gmail.com'>Contact me</a>
                <a className={styles.resumeBtn} href='https://drive.google.com/file/d/1FWjZ5a-vXZdKgdV--TqqrYDFvwqIsM0I/view?usp=drive_link' target="_blank">
                    Resume <img className={styles.downloadIcon} src={getImageUrl('profile/downloadIcon.png')} alt='download'/>
                </a>
            </div>
        </div>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        
    </section>
}