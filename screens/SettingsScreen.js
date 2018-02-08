import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { clearLikedJobs } from "../actions";

class SettingsScreen extends Component {
    render() {
        return (
            <View>
                <Button
                    large
                    title="Reset Liked Jobs"
                    icon={{ name: "delete-forever" }}
                    backgroundColor="#F44336"
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        );
    }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
