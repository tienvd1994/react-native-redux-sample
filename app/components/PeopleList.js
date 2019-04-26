import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

export default class PeopleList extends Component {
  constructor(props) {
    super(props);
  }

  // _keyExtractor = item => item.email;
  _keyExtractor = item => item._id;

  _renderItem = ({ item }) => {
    // const { name, picture, cell, email } = item;
    const { name, instructor, thumbnail } = item;

    return (
      <View>
        {/* <View style={styles.cardContainerStyle}>
          <View style={{ paddingRight: 5 }}>
            <Text style={styles.cardTextStyle}>
              {name.first} {name.last} {"\n"}
              {cell} {"\n"}
              {email}
            </Text>
          </View>
          <Image
            style={styles.faceImageStyle}
            source={{ uri: picture.medium }}
          />
        </View> */}

        <View style={styles.cardContainerStyle}>
          <View style={{ width: "80%" }}>
            <Text style={styles.cardTextStyle}>
              {name} {"\n"}
              {instructor.name}
            </Text>
          </View>
          <Image style={styles.faceImageStyle} source={{ uri: thumbnail }} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.props.people}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onRefresh={this.props.onRefresh.bind(this)}
        refreshing={this.props.isFetching}
      />
    );
  }
}

PeopleList.propTypes = {
  people: PropTypes.array,
  onRefresh: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#093339"
  // },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    // flexDirection: "row",
    // justifyContent: "flex-start",
    margin: 10,
    backgroundColor: "#4e8087",
    padding: 10
  },
  faceImageStyle: {
    width: 65,
    height: 65
  },
  cardTextStyle: {
    color: "white",
    textAlign: "left"
  }
});
