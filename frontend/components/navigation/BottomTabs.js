import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View} from 'react-native'
import * as Animatable from 'react-native-animatable';

import HomeScreen from '../../screens/HomeScreen';
import UserProfileScreen from '../../screens/UserProfileScreen'
import MeasurementsScreen from '../../screens/MeasurementsScreen'
import WorkoutPlanScreen from '../../screens/WorkoutPlanScreen';

import Icon from './Icons';
import { COLORS } from '../colors/Colors';

/**
 * @module Navigation
 */

/**
 * Array with bottom navigation bar data
 * @author Maciej Ciepał
 */
const TabArray = [
    { route: 'Home', label: 'Home', component: HomeScreen, icon: 'https://img.icons8.com/ios/50/000000/home--v1.png'},
    { route: 'Workout', label: 'Workout Plans', component: WorkoutPlanScreen, icon: 'https://img.icons8.com/ios/50/000000/dumbbell--v1.png'},
    { route: 'Friends', label: 'Measurements', component: MeasurementsScreen, icon: 'https://img.icons8.com/ios/50/000000/tape-measure-sewing.png'},
    { route: 'Profile', label: 'Profile', component: UserProfileScreen, icon: 'https://img.icons8.com/ios/50/000000/user--v1.png'},
]

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 0.3: {scale: 0.2}, 1: { scale: 0 } }

/**
 * @module Navigation
 * @author Maciej Ciepał
 * Bottom buttom
 */
const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            circleRef.current.animate(circle1);
            textRef.current.transitionTo({ scale: 1 });
        } else {
            viewRef.current.animate(animate2);
            circleRef.current.animate(circle2);
            textRef.current.transitionTo({ scale: 0 });
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}
        >
            <Animatable.View
                ref={viewRef}
                duration={200}
                style={styles.container}
            >
                <View style={styles.btn}>
                    <Animatable.View
                        ref={circleRef}
                        style={styles.circle} 
                    />
                        <Icon image={item.icon} color={focused ? COLORS.white : COLORS.main_color} />
                    <Animatable.View/>
                </View>
                <Animatable.Text
                    ref={textRef}
                    style={styles.text}>
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    )
}

/**
 * @module Navigation
 * @author Maciej Ciepał
 * Bottom navigation bar button
 */
const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
        }}
        >
        {TabArray.map((item, index) => {
            return (
                <Tab.Screen key={index} name={item.route} component={item.component}
                    options={{
                        tabBarShowLabel: false,
                        tabBarButton: (props) => <TabButton {...props} item={item} />
                    }}
                />
            )
        })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        position: 'absolute',
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.main_color,
        borderRadius: 25,
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
        color: COLORS.main_color,
    }
})

export default BottomTab