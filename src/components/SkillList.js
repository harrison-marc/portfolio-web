/**
 * Created by marc on 9/25/17.
 */
import React from 'react';

function ListItem(props) {
    return <li>{props.value}</li>;
}

function SkillList(props) {
    const skills = props.skills;
    const type = props.type;

    const listItems = skills.filter(skill => skill.category === type).map((skill) =>
        <ListItem key={skill.name} value={skill.name} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default SkillList;