/**
 * Created by marc on 9/23/17.
 */
import React, { Component } from 'react';
import axios from 'axios';
import SkillList from './SkillList'

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
                this.setState({ skills });
            });
    }

    render() {
        return (
            <div>
                <h2>Tools</h2>
                <SkillList skills={this.state.skills} type="tool"/>

                <h2>Languages</h2>
                <SkillList skills={this.state.skills} type="language"/>

                <h2>Frameworks</h2>
                <SkillList skills={this.state.skills} type="framework"/>

            </div>
        );
    }
}

export default Skill;