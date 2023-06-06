import React from "react";
import { Link } from "react-router-dom";
import "./ShowCard.css";

export const ShowCard = (props) => {
    console.log(props);
    return (
        <div className="showcard">
            <img
                className="card-image"
                src={props.show.image.original}
                alt="Card Image"
            />
            <div className="card-text-container">
                <div className="flex-row">
                    <h3 className="card-title">{props.show.name}</h3>
                    <span className="card-score">
                        {Math.round(props.score * 100)}%
                    </span>
                </div>
                <div>
                    <span className="card-runtime">
                        {props.show.runtime && props.show.runtime + "min | "}
                    </span>
                    <span className="card-genres">
                        {props.show.genres
                            .slice(0, 2)
                            .map((genre, index, genres) => {
                                return index + 1 !== genres.length
                                    ? genre + ", "
                                    : genre;
                            })}
                    </span>
                </div>
            </div>
        </div>
    );
};
