// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button } from "../../components/Button/Button"
import { Card } from "../../components/Card/Card"
import { Label } from "../../components/Label/Label"

// Style
import "./style/StartPage.scss";

// Assets 
import photoMe from "../../Assets/me.jpg";

export const StartPage = () => {

    return (
        <div className="startpage__container">
            <Card height={400}>
                <div className="startpage__photo-container">
                    <img className="startpage__photo" src={photoMe} alt="me" />
                </div>
                <div className="card__left-side">
                    <Label fontSize={50} boldFont text="Find out more about me" />
                    <Label fontSize={50} boldFont text="Giny" />
                </div>
                <div className="card__right-side">
                    <Link to="/questionspage">
                        <Button onClick={() => { }} buttonText="Start quiz!" />
                    </Link>
                </div>
            </Card>
        </div>
    )
}