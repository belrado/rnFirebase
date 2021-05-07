import React from 'react';
import {Button} from 'react-native';

const MyComponent = ({onGoogleButtonPress}) => {
    return (
        <Button
            title="Google Sign-In"
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        />
    );
};

export default MyComponent;
