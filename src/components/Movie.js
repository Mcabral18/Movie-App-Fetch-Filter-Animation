import { motion } from "framer-motion";

function Movie({ movieData }) {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout className="single-movie p-5">
            <p className="text-base pb-3">{movieData.title}</p>
            <img src={'https://image.tmdb.org/t/p/w500' + movieData.backdrop_path} alt="Movie - Poster" />
        </motion.div>
    )
}

export default Movie;