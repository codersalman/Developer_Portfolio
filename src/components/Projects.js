import './Projects.css';
import Nav from "./Nav";
import Social from "./Social";

function Projects() {


    return (

        <div className="project_main">

            <h1 className="head_about">
                Recent <span>Projects</span>
            </h1>
            <p className="text">YouTube Creator Product Tester Panel Member | Open Source Contributor. | Tech Content
                Creator </p>


            <div className="main_section">

                <div className="project_card">
                    <img className="pro_img"
                         src="https://dqy38fnwh4fqs.cloudfront.net/UH8OABPQAKN8DPE29GOMBJBMQABL/projects/CityMedicoADigitalDoctorsDirectory.jpg?v1.1"/>

                    <a href="https://citymedico.in/"><h2 className="pro_name">CityMedico - A Digital Doctor's Directory </h2>
                        <p className="pro_dis">We doctor's digital directory app providing the all speciality medical professional details of parbhani local doctors. <br></br>PHP, JS, ANDROID </p></a>
                </div>


                <div className="project_card">
                    <img className="pro_img"
                         src="https://dqy38fnwh4fqs.cloudfront.net/4ea5b951-efb7-4809-ab6f-e3e780d06a25/E_Meet_-_Online_Meetings_and_Learning_Classrooms_.jpeg"/>

                    <a href="https://play.google.com/store/apps/details?id=com.caresofts.edumeet"><h2 className="pro_name">E Meet - Online Meetings and Learning Classrooms </h2>
                        <p className="pro_dis">E Meet (Edu Meet) is a free video meeting and video conferencing app to make online meetings easier. </p></a>
                </div>

                <div className="project_card">
                    <img className="pro_img"
                         src="https://user-images.githubusercontent.com/83803180/177344241-218f4649-d706-4a9d-bef1-45928b9b8e1b.png"/>

                    <a href=""><h2 className="pro_name">Meeting Page</h2>
                        <p className="pro_dis">Firebase Backend - Jitsi WebRTC<br></br>PHP & JS</p></a>
                </div>


            </div>


            <div className="navd">
                <Social></Social>

                <hr className="divider"></hr>
                <br></br>
                <Nav></Nav>
            </div>
        </div>

    );


}

export default Projects;


