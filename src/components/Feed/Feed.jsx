import React, { useEffect, useRef, useState } from "react";
import { ShowCard } from "../ShowCard/ShowCard";
import "./Feed.css";

export const Feed = () => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    const [shows, setShows] = useState([]);
    const fetchShows = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setShows(result);
    };

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <section className="feed">
            <div className="card-container">
                {shows.map((show, index) => (
                    <ShowCard {...show} key={index} />
                ))}
            </div>
        </section>
    );
};
