import './Main.css';
import img from '../img.png'; // with import
import Social from "./Social";
import Nav from "./Nav";

function Main() {

    return (

        <div className="main">
            <div className="main_first">
                <img src={img}/>
            </div>

            <div className="main_second">
                <h1>I'M <span>SALMAN</span></h1>
                <p>A Dev 🚀👨‍💻 who Designs | (he/him) | 🦸🏻‍♂️ Campus SuperHero @CODING BLOCK | App Dev in KaiOS
                    (Reactjs), Android & Web
                </p>
                <Social></Social>
                <hr></hr>
                <Nav></Nav>

            </div>
        </div>


    );

}

export default Main;