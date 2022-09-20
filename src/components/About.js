import './About.css';
import Nav from "./Nav";
import Social from "./Social";
import img from "../img.png";

function About() {


    return (

        <div className="about_main">

            <h1 className="head_about">
                About <span>ME</span>
            </h1>

            <p className="text">
                I am Shaikh Salman, a Computer Science student working in open source as a web and app developer. I am passionate about computer programming and web development, and I enjoy working on projects that make a difference in people's lives. I believe that open source is the future of software development.


            </p>
            <div className="navd">
                <Social></Social>

                <hr className="divider"></hr>
                <br></br>
                <Nav></Nav>
            </div>
        </div>

    );


}

export default About;


