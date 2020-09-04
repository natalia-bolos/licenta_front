import React from "react";
import land from "./ideas.svg";
import { Link} from 'react-router-dom';
import "./landing.css";

class Landing extends React.Component{
    render() {
        return (
            <div className='Back'>
                <div className="container land">
                    <div className="row landing">
                        <div className="landimg col s6 m6">
                            <img src={land} alt="land" />
                        </div>
                        <div className="landtxt col s6 m6">
                            <p>Study Buddy is a platform dedicated to students worldwide.
                                <p>Create an account, join groups based on your interests and academic needs and connect with students
                                     form different universities accross the globe.</p>
                            </p>
                            <Link to='start' className="btn land-btn">Start learning!</Link>
                        </div>
                    </div>
                </div>
            </div>
            )
    }



}

export default Landing;