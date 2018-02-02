import React, { Component } from "react";

import Slides from "../components/Slides";

const SLIDE_DATA = [
    { text: "Welcome to Job Finder" },
    { text: "Set your location, then swipe away" }
];

class WelcomeScreen extends Component {
    render() {
        return <Slides data={SLIDE_DATA} />;
    }
}

export default WelcomeScreen;
