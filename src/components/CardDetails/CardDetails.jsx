import React, { useState, useEffect } from "react";
import "./CardDetails.css";
import { useParams } from "react-router-dom";

export const CardDetails = () => {
    const { id } = useParams();
    const url = "https://api.tvmaze.com/shows/";
    const [showDetails, setShowDetails] = useState({});
    const fetchShowDetails = async () => {
        const response = await fetch(url + id);
        const result = await response.json();
        setShowDetails(result);
    };

    useEffect(() => {
        fetchShowDetails();
    }, []);

    return (
        <section className="show-details">
            <img
                src={showDetails.image && showDetails.image.original}
                className="show-poster"
                alt="Show Image"
            />
            <div className="card-details-text">
                <h2 className="show-title">{showDetails.name}</h2>
                <div className="flex-row">
                    <span className="release-year">
                        {showDetails.premiered &&
                            showDetails.premiered.split("-").shift()}
                    </span>
                    <span className="runtime">
                        {showDetails.runtime && showDetails.runtime + " min"}
                    </span>
                    <span className="language">
                        {showDetails.language && showDetails.language}
                    </span>
                    <span className="genres">
                        {showDetails.genres && showDetails.genres.join(" | ")}
                    </span>
                </div>
                <div className="rating">
                    {showDetails.rating &&
                        "Average Rating: " + showDetails.rating.average}
                </div>
                <div className="synopsis">
                    <h3>Synopsis</h3>
                    <p>
                        {showDetails.summary &&
                            showDetails.summary.replace(/<\/?\w>/g, "")}
                    </p>
                </div>
            </div>
        </section>
    );
};
