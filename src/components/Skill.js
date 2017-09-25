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

   filterSkills(category) {
        var filteredSkills = this.state.skills.filter(skill => skill.category = category);

        return {
            filteredSkills
        }
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
                <h2>Tools</h2>
                <ul>
                    {this.state.skills.filter(skill => skill.category === "tool").map(skill => <li id={skill.Id}>{skill.name}</li>)}

                </ul>

                <h2>Languages</h2>
                <ul>
                    {this.state.skills.filter(skill => skill.category === "language").map(skill => <li id={skill.Id}>{skill.name}</li>)}

                </ul>

                <h2>Frameworks</h2>
                <ul>
                    {this.state.skills.filter(skill => skill.category === "framework").map(skill => <li id={skill.Id}>{skill.name}</li>)}

                </ul>
            </div>
        );
    }
}



export default Skill;