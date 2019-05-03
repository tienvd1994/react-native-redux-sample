import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import PeopleList from "../components/PeopleList";
import { fetchPeople } from "../redux/actions/peopleActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  componentDidMount() {
    this.props.fetchPeople(this.state.page, false, false);
  }

  onRefreshFlatList() {
    this.setState = { page: 1 };

    this.props.fetchPeople(this.state.page, true, false);
  }

  onLoadMoreFlatList() {
    if (!this.props.randomPeople.isLoadMore) {
      this.setState = {
        page: this.state.page++
      }

      this.props.fetchPeople(this.state.page, false, true);
    }
  }

  render() {
    let content = (
      <PeopleList
        people={this.props.randomPeople.peoples}
        onRefresh={() => this.onRefreshFlatList()}
        isFetching={this.props.randomPeople.isFetching}
        onEndReached={() => this.onLoadMoreFlatList()}
        isLoadMore={this.props.randomPeople.isLoadMore}
      />
    );
    if (this.props.randomPeople.isFetching) {
      // content = <ActivityIndicator size="large" />;
      content = <View />;
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
    fetchPeople: function (page, isRefresh, isLoadMore) {
      dispatch(fetchPeople(page, isRefresh, isLoadMore));
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
