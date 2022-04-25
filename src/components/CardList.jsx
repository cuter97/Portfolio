import { data } from "../data"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Cards = ({id, tittle, tags}) => {

    return (
        <motion.div className="card-container">
            <motion.div className="card-content" layoutId={`card-content-${id}`}>

                <motion.div className="card-image-container" layoutId={`card-image-container-${id}`}>
                     <img className="tam-img" src={`images/${id}.jpg`} alt="web" />
                </motion.div>

                <motion.div className="card-info" layoutId={`card-info-${id}`}>
                    <h2>{tittle}</h2>
                    <div className="tags-container">
                        {tags.map((aux, index) => (
                            <p key={index}>{aux}</p>
                        ))}
                    </div>
                </motion.div>

            </motion.div>
            <Link to={`/${id}`} className='card-open-link' />
        </motion.div>
    )
}


const CardList = ({ selectedId }) => {
    return (
        <ul className="card-list">
            {data.map(item => (
                <Cards key={item.id} {...item} isSelected={item.id === selectedId} />
            ))}
        </ul>
    )
}

export default CardList