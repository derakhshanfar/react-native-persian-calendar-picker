/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

var styles = require('./style');
var {
  WEEKDAYS,
} = require('./util');

var WeekDaysLabels = React.createClass({
  propTypes: {
    screenWidth: React.PropTypes.number,
    textStyle: Text.propTypes.style
  },
  getInitialState() {
    this.DAY_WIDTH = (this.props.screenWidth - 16)/7;
    return null;
  },
  render() {
    var labels = (this.props.weekdays || WEEKDAYS).map((day, key) => { return <Text key={key} style={[styles.dayLabels, this.props.textStyle]}>{day}</Text>; });
    labels.reverse();
    return (
      <View style={styles.dayLabelsWrapper}>
        { labels }
      </View>
    );
  },
});

module.exports = WeekDaysLabels;
