/**
 * Created by marc on 9/23/17.
 */
import React, { Component } from 'react';
import axios from 'axios';

class Skill extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        axios.get('https://marc-portfolio-service.herokuapp.com/api/skill/all')
            .then(res => {
                const skills = res.data;
                console.log(skills)
                this.setState({ skills });
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.skills.map(skill =>
                        <li>{skill.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Skill;