import './Dashboard.css';
import { Component,React } from "react";
import {Link} from "react-router-dom";

export default class Dashboard extends Component{
    render(){
        return(
            <div>
                <h1>Dashboard Component</h1>
                <div>
                <Link to="/home">Home</Link>
                </div>
                <div>
                <Link to="/about">About</Link>
                </div>
                <div>
                <Link to="/settings">Settings</Link>
                </div>
            </div>
        );
    }
}