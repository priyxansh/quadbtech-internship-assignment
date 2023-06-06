import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavLogo title={"Movix"} />
            <NavToggler />
            <NavList />
            <SearchBar />
        </nav>
    );
}

const NavLogo = ({ title }) => (
    <Link to="/" className="navlogo">
        <span>{title}</span>
    </Link>
);

const NavToggler = () => (
    <>
        <label className="navtoggler" htmlFor="navtoggle-input">
            {/* SVG taken from svgrepo.com */}
            <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                </g>
            </svg>
        </label>
        <input type="checkbox" id="navtoggle-input" defaultChecked={false} />
    </>
);

const NavList = () => {
    // Navigation links can be added after building corresponding pages
    const navItems = [
        { title: "Home", link: "/" },
        { title: "Shows", link: "/" },
        { title: "Genres", link: "/" },
    ];

    return (
        <ul className="navlist">
            {navItems.map((item, index) => (
                <NavItem title={item.title} link={item.link} key={index} />
            ))}
        </ul>
    );
};

const NavItem = ({ title, link }) => {
    return (
        <li className="navitem">
            <Link to={`${link}`} className="navlink">
                {title}
            </Link>
        </li>
    );
};

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [expanded, setExpanded] = useState(false);
    const searchRef = useRef(null);

    // Adding keydown event listener to focus search on pressing "/" and blur it on pressing "esc"

    const focusSearch = (e) => {
        if (e.key === "/" && document.activeElement !== searchRef.current) {
            e.preventDefault();
            searchRef.current.focus();
        }
    };

    const blurSearch = (e) => {
        if (e.key.toLowerCase() === "escape") {
            e.preventDefault();
            searchRef.current.blur();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", focusSearch);
        searchRef.current.addEventListener("keydown", blurSearch);
        return () => {
            window.removeEventListener("keydown", focusSearch);
            searchRef.current.removeEventListener("keydown", blurSearch);
        };
    }, []);

    const expandSearch = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <form action="/" className="searchbar">
            <SearchIcon onClick={expandSearch} />
            <div className="input-control" data-mobile-expanded={expanded}>
                <input
                    type="text"
                    placeholder="Search Movies and TV Shows"
                    id="searchinput"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    ref={searchRef}
                />
            </div>
        </form>
    );
};

const SearchIcon = ({ onClick }) => (
    <>
        <label htmlFor="searchinput" className="searchicon" onClick={onClick}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <g id="Interface / Search_Magnifying_Glass">
                        <path
                            id="Vector"
                            d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </g>
                </g>
            </svg>
        </label>
    </>
);
