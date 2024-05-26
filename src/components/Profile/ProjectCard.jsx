import React from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({project}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={getImageUrl(project.imageSrc)} alt={`image of ${project.title}`}/>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.discription}>{project.description}</p>
             <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                   return <li className={styles.skill} key={id}>
                        {skill}
                    </li>
                })}
            </ul>
            <div className={styles.links}>
                {project.demo && <a className={styles.link} href={project.demo} target="_blank">Demo</a>}
                {project.source && <a className={styles.link} href={project.source} target="_blank">Source</a>}
            </div>
        </div>
    )
}