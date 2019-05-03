// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import { createStore, applyMiddleware } from "redux";

import _ from 'lodash';
import { Provider } from "react-redux";
import AppContainer from "./app/containers/AppContainer";
import peopleReducer from "./app/redux/reducers/peopleReducer";
import thunk from "redux-thunk";
// import rootReducer from "./app/redux/reducers";
import rootReducer from './app/redux/reducers'; //Import the reducer

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
// const store = createStore(rootReducer);

export default class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: false,
  //     data: [],
  //     page: 1,
  //     seed: 1,
  //     error: null,
  //     refreshing: false
  //   };

  //   this.onHandleLoadMore = _.debounce(this.handleLoadMore, 500);
  // }

  // componentDidMount() {
  //   this.makeRemoteRequest();
  // }

  // makeRemoteRequest = () => {
  //   const { page, seed } = this.state;
  //   const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=10`;
  //   this.setState({ loading: true });

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         data: page === 1 ? res.results : [...this.state.data, ...res.results],
  //         error: res.error || null,
  //         loading: false,
  //         refreshing: false
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });
  // };

  // handleRefresh = () => {
  //   if (!this.state.loading) {
  //     this.setState(
  //       {
  //         page: 1,
  //         seed: this.state.seed + 1,
  //         refreshing: true
  //       },
  //       () => {
  //         this.makeRemoteRequest();
  //       }
  //     );
  //   }
  // };

  // handleLoadMore = () => {
  //   console.log('handleLoadMore');

  //   this.setState(
  //     {
  //       page: this.state.page + 1
  //     },
  //     () => {
  //       this.makeRemoteRequest();
  //     }
  //   );
  // };

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         width: "86%",
  //         backgroundColor: "#CED0CE",
  //         marginLeft: "14%"
  //       }}
  //     />
  //   );
  // };

  // renderHeader = () => {
  //   return <SearchBar placeholder="Tìm kiếm..." lightTheme round />;
  // };

  // renderFooter = () => {
  //   if (!this.state.loading) return null;

  //   return (
  //     <View
  //       style={{
  //         paddingVertical: 20,
  //         borderTopWidth: 1,
  //         borderColor: "#CED0CE"
  //       }}
  //     >
  //       <ActivityIndicator animating size="large" />
  //     </View>
  //   );
  // };

  // render() {
  //   return (
  //     <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
  //       <FlatList
  //         data={this.state.data}
  //         renderItem={({ item }) => (
  //           <ListItem
  //             roundAvatar
  //             title={`${item.name.first} ${item.name.last}`}
  //             subtitle={item.email}
  //             avatar={{ uri: item.picture.thumbnail }}
  //             containerStyle={{ borderBottomWidth: 0 }}
  //           />
  //         )}
  //         keyExtractor={item => item.email}
  //         ItemSeparatorComponent={this.renderSeparator}
  //         ListHeaderComponent={this.renderHeader}
  //         ListFooterComponent={this.renderFooter.bind(this)}
  //         onRefresh={this.handleRefresh}
  //         refreshing={this.state.refreshing}
  //         onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}

  //         onEndReached={this.onHandleLoadMore}
  //         // _onEndReached={(info) => {
  //         //   console.log('1-trigger list onEndReached !', info);
  //         //   if (info.distanceFromEnd >= -10) {
  //         //     this.handleLoadMore();
  //         //   }
  //         // }}
  //         onEndReachedThreshold={0.5}
  //       />
  //     </List>
  //   );
  // }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.fetchMore = this._fetchMore.bind(this);
  //   this.fetchData = this._fetchData.bind(this);
  //   this.state = {
  //     dataSource: null, // remove this dataSource
  //     isLoading: true,
  //     isLoadingMore: false,
  //     _data: null,
  //     _dataAfter: "",
  //     flatListReady: true
  //   };

  //   this.onEndReachedCalledDuringMomentum = true;
  // }

  // _fetchData(callback) {
  //   const params = this.state._dataAfter !== ''
  //     ? `&after=${this.state._dataAfter}`
  //     : '';
  //   //Limits fetches to 15 so there's lesser items from the get go
  //   fetch(`https://www.reddit.com/subreddits/popular/.json?limit=15${params}`)
  //     .then(response => response.json())
  //     .then(callback)
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  // _fetchMore() {
  //   this.fetchData(responseJson => {
  //     console.log("_fetchMore");
  //     const data = this.state._data.concat(responseJson.data.children);
  //     this.setState({
  //       isLoadingMore: false,
  //       _data: data,
  //       _dataAfter: responseJson.data.after
  //     });
  //   });
  // }

  // onEndReachedHandle() {
  //   if (this.state.flatListReady) {
  //     console.log('onEndReached');
  //     this.setState({ isLoadingMore: true, flatListReady: false })
  //     this.fetchMore()
  //   }
  // }

  // onEndReached = () => {
  //   if (!this.onEndReachedCalledDuringMomentum) {
  //     console.log('onEndReached');
  //     this.setState({ isLoadingMore: true, flatListReady: false })
  //     this.fetchMore()
  //     this.onEndReachedCalledDuringMomentum = true;
  //   }
  // }

  // componentDidMount() {
  //   this.fetchData(responseJson => {
  //     const data = responseJson.data.children;
  //     this.setState({
  //       isLoading: false,
  //       _data: data,
  //       _dataAfter: responseJson.data.after
  //     });
  //   });
  // }
  // render() {
  //   if (this.state.isLoading) {
  //     return (
  //       <View style={styles.container}>
  //         <ActivityIndicator size="large" />
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <FlatList
  //         data={this.state._data} //Remove this reference to dataSource
  //         renderItem={({ item: rowData }) => { //Replaces renderRow={rowData => { 
  //           return (
  //             <View style={styles.listItem}>
  //               <View style={styles.imageWrapper}>
  //                 <Image
  //                   style={{ width: 70, height: 70 }}
  //                   source={{
  //                     uri: rowData.data.icon_img === '' ||
  //                       rowData.data.icon_img === null
  //                       ? 'https://via.placeholder.com/70x70.jpg'
  //                       : rowData.data.icon_img,
  //                   }}
  //                 />
  //               </View>
  //               <View style={{ flex: 1 }}>
  //                 <Text style={styles.title}>
  //                   {rowData.data.display_name}
  //                 </Text>
  //                 <Text style={styles.subtitle}>
  //                   {rowData.data.public_description}
  //                 </Text>
  //               </View>
  //             </View>
  //           );
  //         }}
  //         // onEndReached={this.onEndReachedHandle.bind(this)}
  //         onEndReached={this.onEndReached.bind(this)}
  //         onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
  //         // onEndReached={() => {
  //         //   console.log('onEndReached');
  //         //   this.setState({ isLoadingMore: true }, () => this.fetchMore())
  //         // }}
  //         keyExtractor={(item, index) => index}
  //         onEndReachedThreshold={0.5}

  //         ListFooterComponent={() => { // replaces renderFooter={() => {
  //           return (
  //             this.state.isLoadingMore &&
  //             <View style={{ flex: 1, padding: 10 }}>
  //               <ActivityIndicator size="small" />
  //             </View>
  //           );
  //         }}
  //       />
  //     );
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    padding: 6,
  },
  imageWrapper: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    margin: 6,
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'left',
    margin: 6,
  },
});