// key-imports
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

// css
import './Cards.css'

// assets
import { DiGithubFull } from "react-icons/di"
import { DiGithubBadge } from "react-icons/di"

// -------------------------------------------------------------------

const Projects = (props) => {
const [isFlipped, setIsFlipped] = useState(false);

const handleClick = () => {
    setIsFlipped(!isFlipped)
}

        return (
            <div className="cards">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> 
                    <div className="cardFront" onKeyPress={handleClick} onClick={handleClick}>
                        <div id="contentFront">
                            <h2>{props.name}</h2>
                            <img src={props.image} alt="project" />
                            <div id="foot">
                                <div id="tech">
                                    <div id="techrow">{props.tech}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="cardBack">
                        <div id="contentBack">
                            <div id="backHeader">
                                <h3 id="subtitle">{props.name}</h3>
                            </div>
                            <p id="desc" onKeyPress={handleClick} onClick={handleClick}>{props.description}</p>
                            <div id="github">
                                <a href={props.link} target="_blank" rel="noopener noreferrer">
                                <div id="gitlogo"><DiGithubFull /></div>
                                <div id="giticon"><DiGithubBadge /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        );
    }


export default Projects