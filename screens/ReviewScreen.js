import React, { Component } from "react";
import { ScrollView, View, Text, Linking, Platform } from "react-native";
import { Button, Card } from "react-native-elements";
import { connect } from "react-redux";
import { MapView } from "expo";

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
            const { company, formattedRelativeTime, url, jobkey, jobtitle } = job;
            const initialRegion = {
                latitude: job.latitude,
                longitude: job.longitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return (
                <Card key={jobkey} title={jobtitle}>
                    <View style={{ height: 200 }}>
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.OS === "android"}
                            initialRegion={initialRegion}
                        />
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
        marginTop: 10,
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
