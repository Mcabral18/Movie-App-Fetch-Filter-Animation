/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

function Filter({ movie, setActiveGenre, activeGenre, setFiltered }) {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(movie)
            return;
        }
        const filter = movie.filter((movie) => movie.genre_ids.includes(activeGenre))
        setFiltered(filter);
    }, [activeGenre])

    return (
        <div className="filters">
            <ul className="flex my-12">
                <li className="px-3">
                    <button className={"px-12 py-1 text-sm bg-white text-lime-600" + (activeGenre === 0 ? ' active' : ' ')}
                        onClick={() => setActiveGenre(0)}
                    >All</button>
                </li>
                <li className="px-3">
                    <button className={"px-12 py-1 text-sm bg-white text-lime-600" + (activeGenre === 35 ? ' active' : ' ')}
                        onClick={() => setActiveGenre(35)}
                    >Comedy</button>
                </li>
                <li className="px-3">
                    <button className={"px-12 py-1 text-sm bg-white text-lime-600" + (activeGenre === 28 ? ' active' : ' ')}
                        onClick={() => setActiveGenre(28)}
                    >Action</button>
                </li>
            </ul>
        </div>
    )
}

export default Filter;