import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from './styles';

export function Tab({ firstTitle, secondTitle, firstView, secondView }) {
    const FirstRoute = () => (
        <View>
            {firstView}
        </View>
    );

    const SecondRoute = () => (
        <View>
            {secondView}
        </View>
    );

    const renderTabBar = props => (
        <TabBar
        style={styles.tabBar}
        renderLabel={({ route }) => (
            <Text style={styles.tabTitle}>
              {route.title}
            </Text>
          )}
          {...props}
          indicatorStyle={{ backgroundColor: '#338BAE' }}
        />
    );

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: `${firstTitle}` },
        { key: 'second', title: `${secondTitle}` },
    ]);
  
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            style={styles.tabView}
        />
    );
};
