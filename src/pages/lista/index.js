import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Header from './components/header';

import styles from './styles';

export default class Lista extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />
  }
  render() {
    return null;
  }
}
