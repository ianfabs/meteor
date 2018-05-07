import React, { Component } from 'react';

//Task component - represesnts a single todo
export default class Task extends Component {
    render() {
        return (
            <li>{this.props.task.text}</li>
        );
    }
}