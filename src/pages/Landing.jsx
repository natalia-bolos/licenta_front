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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type 
                             specimen book. It has survived not only five centuries, but also the leap into 
                             electronic typesetting, remaining essentially unchanged. It was popularised in the
                              1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                              and more recently with desktop publishing software like Aldus PageMaker including 
                              versions of Lorem Ipsum.</p>
                            <Link to='start' className="btn land-btn">Start learning!</Link>
                        </div>
                    </div>
                </div>
            </div>
            )
    }



}

export default Landing;