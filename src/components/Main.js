import PropTypes from 'prop-types'
import React from 'react'
import pic03 from '../images/pic03.jpg'
import Projects from './Projects/Projects'

class Main extends React.Component {
  render() {
    let close = (
      <div className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <h6>noun | [ in-truh-duhk-shuh n ] -- a formal personal presentation of one person to another or others.</h6>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h5>
            Yup, that's me, taking a picture of myself. Impossible, right?<br />Change your perspective. Perform the impossible.
          </h5>
          <h4>
            <br />Hi there, my name is Bex (Rebecca) and I'm a UK based Developer on a journey towards achieving my lifelong dream. Video games are my passion, inspiring everything I do and powering my dreams and aspirations. My end goal is to open my own game studio with my wonderful wife, building games from the ground up and producing something truly remarkable.<br />I want to inspire a future generation of young women who want to pursue a career in the games industry, who might not believe that they can.  
          </h4>
          <h4>
            <br />A final note from me - Thank you for taking the time to peruse my work and my portfolio! It was heavily inspired by geometric art and an animal of true beauty - the stag. I aspire to develop beauty and elegance in everything I create.
          </h4>
          {close}
        </article> */}

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h6>noun | [ proj-ekt ] -- an individual or collaborative venture, carefully planned to achieve a particular aim.</h6>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <br /><Projects /><br />
          <p>
            Please view each individual project README file for notes and improvements.<br /><br />
            I started learning how to code in April 2020 during the COVID-19 pandemic. I enrolled onto a Full Stack coding bootcamp with <a href="https://https://wearecodenation.com/">Code Nation</a>, and in that time I not only learned how to work remotely, but I completed several projects both individually and as a part of a team.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <h6>preposition | [ uh-bout ] -- on the subject of, or connected with:</h6>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h4>
            Yup, that's me, taking a picture of myself. Impossible, right?<br />Change your perspective. Perform the impossible.
          </h4><hr />
          <h5>
            Hi there, my name is Bex (Rebecca) and I'm a UK based Developer on a journey towards achieving my lifelong dream!<br /><br />
            Video games are my passion, inspiring everything I do and powering my dreams and aspirations. My end goal is to open my own game studio with my wonderful wife, building games from the ground up and producing something truly remarkable.<br /><br />I want to inspire a future generation of young women who want to pursue a career in the games industry, who might not believe that they can.<br /><br />
            A final note from me - Thank you for taking the time to peruse my work and my portfolio! It was heavily inspired by geometric art and an animal of true beauty - the stag. I aspire to develop beauty and elegance in everything I create.
          </h5>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form id="contact" method="post" action="https://getform.io/f/26798f03-e869-4f86-8494-a312eb73797d">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            {<li>
              <a
                href="https://twitter.com/bex_birkett"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>}
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li> */}
            <li>
              <a href="https://www.linkedin.com/in/bex-birkett" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kelseru"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
