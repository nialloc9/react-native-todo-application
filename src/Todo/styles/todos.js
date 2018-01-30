import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    WHITE,
    IRON,
    GREEN,
    ORANGE,
    RED
} from './common/colors';
import { input } from './common/elements';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "baseline",
        backgroundColor: WHITE,
        marginTop: 100
    },
    input,
    todo: {
        flex: 2,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: IRON,
        padding: 10,
        margin: 10
    },
    isComplete: {
        flex: 1,
        color: ORANGE,
        marginLeft: 10
    },
    isUncomplete: {
        flex: 1,
        color: GREEN,
        marginLeft: 10
    },
    remove: {
        flex: 1,
        color: RED,
        marginLeft: 10
    }
});