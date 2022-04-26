import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from '../data';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

const Card = ({ id }) => {

    const { tags, tittle, description, github, web, tools } = data.find(item => item.id == id);

    return (
        <>
            <motion.div className="card-container open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.40 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
            >
                <motion.div className="card-content" layoutId={`card-content-${id}`}>

                    <motion.div className="card-image-container" layoutId={`card-image-container-${id}`}>
                        <img className="tam-img" src={`images/${id}.jpg`} alt="web" />
                    </motion.div>

                    <motion.div className="card-info" layoutId={`card-info-${id}`}>
                        <h2>{tittle}</h2>
                        <p>{description}</p>

                        <div className='toolsTags'>
                            <p>Technologies used:</p>
                            <div className="tags-container">
                                {tags.map((aux, index) => (
                                    <p key={index}>{aux}</p>
                                ))}
                            </div>
                        </div>

                        <div className='toolsTags'>
                            <p>Tools:</p>
                            <div className='tools-container'>
                                {
                                    tools.map((aux, index) => (
                                        <p key={index}>{aux}</p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='icons-content'>
                            <a href={github} target='_blank'>
                                <FaGithub />
                                <p>CODE</p>
                            </a>
                            <a href={web} target='_blank'>
                                <FaLink />
                                <p>WEB SITE</p>
                            </a>
                        </div>
                    </motion.div>
                    <Link to='/' className='btn-close'><AiFillCloseCircle /></Link>

                </motion.div>
            </motion.div>
        </>
    )
}

export default Card