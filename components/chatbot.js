//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatBot from 'react-simple-chatbot';

// create a component
const ChatArea = () => {
    return (
        <ChatBot
            steps={[
                {
                    id: 'hello-world',
                    message: 'Hello world!',
                    end: true,
                } 
            ]}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default ChatArea;
