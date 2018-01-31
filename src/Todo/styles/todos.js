import { StyleSheet } from 'react-native';
import {
    IRON,
    GREEN,
    ORANGE,
    RED
} from './common/colors';

export default StyleSheet.create({
    todo: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: IRON,
        padding: 10,
        margin: 10
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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