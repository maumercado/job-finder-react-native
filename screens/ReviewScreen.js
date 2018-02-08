import React, { Component } from "react";
import { ScrollView, View, Text, Linking } from "react-native";
import { Button, Card } from "react-native-elements";
import { connect } from "react-redux";

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Review Jobs",
        headerRight:
            <Button
                title="Settings"
                onPress={() => navigation.navigate("settings")}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0,122,255,1)"
            />

    });

    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
            const { company, formattedRelativeTime, url, jobkey } = job;
            return (
                <Card key={jobkey}>
                    <View style={{ height: 200 }}>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button
                            title="Apply Now"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return <ScrollView>{this.renderLikedJobs()}</ScrollView>;
    }
}

const styles = {
    detailWrapper: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    italics: {
        fontStyle: "italic"
    }
};

const mapStateToProps = ({ likedJobs }) => {
    return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);
