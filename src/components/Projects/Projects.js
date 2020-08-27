// key imports
import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

// css
import './Projects.css'

// components
import Cards from './Cards'
import swipe from '../../images/drag.gif'
import { GrReactjs } from 'react-icons/gr'
import { GrNode } from 'react-icons/gr'
import { DiMongodb } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiPython } from 'react-icons/di'
import { DiDjango } from 'react-icons/di'
import { AiFillApi } from 'react-icons/ai'
import { TiHtml5 } from 'react-icons/ti'

class Projects extends Component {
  state = {
    projects: [
      {
        index: "0",
        name: "Anchor",
        description: "Anchor is an app designed to aid those who are self-isolating during the COVID-19 pandemic. Using an interactive chatbot, the app logs symptoms and notifies family members via text message in the case of an emergency. Anchor was built in React and is a full stack project, built in 2 weeks by a team of 4.",
        tech: [
        <GrReactjs />,<GrNode />,<DiMongodb />,<DiJavascript1 />,<DiCss3 />,<AiFillApi />
        ],
        image: "https://images.pexels.com/photos/38870/pexels-photo-38870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        link: "https://github.com/CNcage/anchor"
      },
      {
        index: "1",
        name: "Project Cage",
        description: "Project Cage is an accessible database inspired by the fictional series, 'The SCP Foundation'. Once logged in, users can select an SCP (creatures of unknown origin) and read about the SCP's history, containment status and locations sighted. Project Cage was built using Python and Django in 3 days by a team of 4.",
        tech: [
          <DiPython />,<DiDjango />,<DiJavascript1 />,<DiCss3 />
          ],
        image: "https://images.pexels.com/photos/706500/pexels-photo-706500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        link: "https://github.com/CNcage/SCP"
      },
      // {
      //   index: "2",
      //   name: "EXP Tracker",
      //   description: "The EXP Tracker is an app that rewards the user with 'experience points' once they complete a certain 'quest'. The 'quest log' is a simple 'to do list' with functionality to add, remove and complete quests that have been logged. The EXP Tracker was built using Node Express, Handlebars and MongoDB.",
      //   tech: [
      //     <GrNode />,<DiMongodb />,<DiJavascript1 />,<DiCss3 />
      //     ],
      //   image: "https://images.pexels.com/photos/6423/desk-notebook-office-grey.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      //   link: ""
      // },
      // {
      //   index: "3",
      //   name: "Monster Gen",
      //   description: "The D&D Monster Generator is a randomiser that uses the 'D&D5eAPI' to fetch data about monsters from the series. A monster will be shown at random that will display health points, size, description and a list of attacks. The Monster Generator was built with Node Express and Handlebars.",
      //   tech: [
      //     <GrNode />,<DiJavascript1 />,<DiCss3 />,<AiFillApi />
      //     ],
      //   image: "https://images.pexels.com/photos/937471/pexels-photo-937471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      //   link: "https://kelseru.github.io/monster-generator/"
      // },
      {
        index: "4",
        name: "Pokémon Aurora",
        description: "Inspired by the popular video game series, Pokémon Aurora is a fan-made installment that uses the 'PokéAPI' to fetch data about the huge array of Pocket Monsters. Venture forth with your starter Pokémon and experience your first wild Pokémon battle! Pokémon Aurora was built in React.",
        tech: [
          <GrReactjs />,<DiJavascript1 />,<DiCss3 />,<AiFillApi />
          ],
        image: "https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        link: "https://github.com/kelseru/pokemon-game"
      },
      {
        index: "6",
        name: "Slack Clone",
        description: "The Slack Clone was my first collaborative project during my time at Code Nation. The Slack Clone is a visual duplicate of the popular collaboration hub app, with limited interactive purpose and is largely visual. This project was built with React and managed using Github and Trello by a team of 2.",
        tech: [
          <GrReactjs />,<DiJavascript1 />,<DiCss3 />
          ],
        image: "https://images.pexels.com/photos/159760/computer-pc-workplace-home-office-159760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        link: "https://github.com/SilviaPetruta/GroupProject"
      },
      {
        index: "7",
        name: "Cyber Pet",
        description: "The Cyber Pet game is a basic single-page interactive application where you can feed, water and play with your own virtual pet. Over time, Egbert the Chicken's health and water levels will fall, so it's up to you to keep him alive! This project utilises the DOM and Javascript to function.",
        tech: [
          <TiHtml5 />,<DiJavascript1 />,<DiCss3 />
          ],
        image: "https://images.pexels.com/photos/4075410/pexels-photo-4075410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        link: "https://github.com/kelseru/cyberpet"
      },
      {
        index: "8",
        name: "Dice Game",
        description: "The Dice Game is a game of chance where you roll a 20-sided-die to reach a target score. Rolling a 1 or exceeding the target will result in a loss. The two player game adds an extra element where you can pass the score over to the other player. This was built using HTML5, Javascript and CSS.",
        tech: [
          <TiHtml5 />,<DiJavascript1 />,<DiCss3 />
          ],
        image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        link: "https://github.com/kelseru/dicegame-single" 
      },
      {
        index: "9",
        name: "Zen Garden",
        description: "Zen Garden is a demonstration of what can be accomplished through CSS-based-design, using only CSS1 and CSS2. HTML is supplied by csszengarden.com and cannot be modified, only utilised. This was a project started during my first few weeks at Code Nation, and was finished within a week.",
        tech: [
          <DiCss3 />
          ],
        image: "https://images.pexels.com/photos/3060703/pexels-photo-3060703.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        link: "https://github.com/kelseru/zen-garden"
      },
      {
        index: "11",
        name: "C# Talk",
        description: "This is a lightning talk presented to my colleagues about the fundimentals of C#. I decided to present this topic after taking an optional week during my coding bootcamp to learn about C# and object oriented programming. It was widely received by my colleagues and also helped during a week of Python.",
        tech: "Keynote iOS",
        image: "https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        link: "https://drive.google.com/file/d/1D_qz0pjN6o01GHlP6VWV1VjZNHMpLGUC/view?usp=sharing"
      }
    ]
  }

  render() {
    let allProjects = this.state.projects.map((project, index) => {
      return <Cards key={index} image={project.image} name={project.name} description={project.description} tech={project.tech} link={project.link} />
    })
    return (
      <div id="noTouchy">
        <div className="container">
            <ScrollContainer 
              className="swipeContainer"
              horizontal>
              <div id="projectsBox">{allProjects}</div>
            </ScrollContainer>
        </div>
        <div id="swipeIcon">
          <div id="swipeTag">
              <img src={swipe} id="swipu" alt="swipe anim" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects