import * as React from 'react';
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import { useFlipper, useReduxDevToolsExtension } from '@react-navigation/devtools';

export default function App() {
    const navigationRef = useNavigationContainerRef();

    // useFlipper(navigationRef);
    useReduxDevToolsExtension(navigationRef);
    
    return (
        <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>
    );
}