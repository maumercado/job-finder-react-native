import React, { Component } from "react";

import Slides from "../components/Slides";

const SLIDE_DATA = [
    { text: "Welcome to Job Finder", color: "#03A9F4" },
    { text: "Set your location, then swipe away", color: "#009688" }
];

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate("auth");
    };

    render() {
        return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
    }
}

export default WelcomeScreen;
