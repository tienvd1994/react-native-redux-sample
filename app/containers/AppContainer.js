import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import PeopleList from "../components/PeopleList";
import { fetchPeople } from "../redux/actions/peopleActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   people: [],
    //   errorMessage: "",
    //   isFetching: true
    // };
  }

  // async fetchRandomPeopleAPI() {
  //   try {
  //     let response = await fetch("https://randomuser.me/api/?results=15");
  //     let json = await response.json();
  //     this.setState({ people: json.results, isFetching: false });
  //   } catch (error) {
  //     this.setState({ errorMessage: error });
  //   }
  // }

  componentDidMount() {
    // this.fetchRandomPeopleAPI();
    // console.log(this.props);
    this.props.fetchPeople();
  }

  onRefreshFlatList() {
    this.props.fetchPeople();
  }

  render() {
    let content = (
      <PeopleList
        people={this.props.randomPeople.peoples}
        onRefresh={() => this.onRefreshFlatList()}
        isFetching={this.props.randomPeople.isFetching}
      />
    );
    if (this.props.randomPeople.isFetching) {
      // content = <ActivityIndicator size="large" />;
      content = <View></View>;
    }
    return <View style={styles.container}>{content}</View>;
  }
}

AppContainer.propTypes = {
  fetchPeople: PropTypes.func.isRequired,
  randomPeople: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  }
});

const mapStateToProps = state => {
  return {
    randomPeople: state.peopleReducer
  };
};

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    fetchPeople: function() {
      dispatch(fetchPeople());
    }
  };
};

// console.log(mapDispatchToProps);

// const mapDispatchToProps = { fetchPeople }

// export default connect(mapStateToProps, {fetchPeople})(AppContainer);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
