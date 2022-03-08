import React from 'react'
import { Text, View, Dimensions, StyleSheet} from 'react-native'
import { COLORS } from '../colors/Colors';
const { width } = Dimensions.get('window');

/**
 * @module UserProfile
 * @param {navigation} - enables come back to previous screen
 * @returns container for data
 */
const UserDataBox = ({age, height, weight, navigation}) =>{
    return (
            <View style={styles.measurementContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.specificText}>AGE</Text>
                    <Text style={styles.numbersText}>{age}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.specificText}>HEIGHT</Text>
                    <Text style={styles.numbersText}>{height}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.specificText}>WEIGHT</Text>
                    <Text style={styles.numbersText}>{weight}</Text>
                </View>
            </View>
    )
}

export default UserDataBox;

const styles = StyleSheet.create({
    measurementContainer: {
        top: -30,
        height: 60,
        width: "75%",
        borderColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row" ,
        justifyContent: "space-evenly",
        backgroundColor: COLORS.white,
        shadowColor: COLORS.dark_gray,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 5,
        paddingHorizontal: 20,
        marginHorizontal: width*0.1
    },
    itemContainer: {
        height: 50,
        width: "33%",
        alignItems: "center",
        borderRadius: 8
    },
    specificText: {
        color: COLORS.blue,
        paddingTop: 7,
        paddingHorizontal: 5,
        fontSize: 13,
        fontWeight: "900",
        alignItems: "center"
    },
    numbersText : {
        color: COLORS.blue,
        fontSize: 19,
        fontWeight: "900",
        alignItems: "center"
    },
  })