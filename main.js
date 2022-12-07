import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
      player1: 'Player 1',
      player2: 'Player 2',
      player1Game: 0,
      player1Set: 0,
      player2Game: 0,
      player2Set: 0,
      page1Display: 'block',
      page2Display: 'none',
      page3Display: 'none',
      p2wins: 0,
      p2losses: 0,
      p1wins: 0,
      p1losses: 0,
    }
    player0 = () => {
        this.setState({
            player1Game: '0'
        })
    }
    player15 = () => {
        this.setState({
            player1Game: '15'
        })
    }
    player30 = () => {
        this.setState({
            player1Game: '30'
        })
    }
    player40 = () => {
        this.setState({
            player1Game: '40'
        })
    }
    playerAd = () => {
        this.setState({
            player1Game: 'Ad',
            player2Game: ''
        })
    }
    playerSet = () => {
        this.setState({
            player1Set: this.state.player1Set + 1
        })
    }
    player02 = () => {
        this.setState({
            player2Game: '0'
        })
    }
    player152 = () => {
        this.setState({
            player2Game: '15'
        })
    }
    player302 = () => {
        this.setState({
            player2Game: '30'
        })
    }
    player402 = () => {
        this.setState({
            player2Game: '40'
        })
    }
    playerAd2 = () => {
        this.setState({
            player1Game: '',
            player2Game: 'Ad'
        })
    }
    playerSet2 = () => {
        this.setState({
            player2Set: this.state.player2Set + 1
        })
    }
    handlePage1 = () => this.setState(state => ({
        page1Display: 'block',
        page2Display: 'none',
        page3Display: 'none',
    }));
    
    handlePage2 = () => this.setState(state => ({
        page1Display: 'none',
        page2Display: 'block',
        page3Display: 'none',
    }));
    handlePage3 = () => this.setState(state => ({
        page1Display: 'none',
        page2Display: 'none',
        page3Display: 'block',
    }));
    subScore = () => {
        if (this.state.player1Set > this.state.player2Set) {
            this.setState({ 

                p2losses: this.state.p2losses + 1,
                p1wins: this.state.p1wins + 1,
                player1Game: 0,
                player1Set: 0,
                player2Game: 0,
                player2Set: 0,
            })
        }
        else if (this.state.player2Set < this.state.player1Set){
            this.setState({ 
                p1losses: this.state.p1losses + 1,
                p2wins: this.state.p2wins + 1,
                player1Game: 0,
                player1Set: 0,
                player2Game: 0,
                player2Set: 0,
            })
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.page1Display }}>
                    <View style={styles.contentContainer}>
                        <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/c570fa31edc3afa86f6801bc5f11d67b' }}
                        >
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                Tennis Scorekeeper
                            </Text>
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.button1}>
                                <TextInput style={styles.button1Text}
                                    onChangeText={(player1) => this.setState({player1})}
                                    value={this.state.player1}
                                />
                            </View>
                    
                            <View style={styles.button1}>
                                <TextInput style={styles.button1Text}
                                    onChangeText={(player2) => this.setState({player2})}
                                    value={this.state.player2}
                                />
                            </View>
                        </View>
                        </ImageBackground>
                    </View>
                </View>
                
                <View style={{ display: this.state.page2Display }}>
                    <View style={styles.contentContainer}>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.blueBlock}
                                onPress={this.player0}>
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                    onChangeText={(player1) => this.setState({player1})}
                                    value={this.state.player1} 
                                />
                                <Text style={styles.buttonText}>
                                    0!
                                </Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.blueBlock}
                                onPress={this.player15}>
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                    onChangeText={(player1) => this.setState({player1})}
                                    value={this.state.player1} 
                                />
                                <Text style={styles.buttonText}>
                                    15!
                                </Text>
                            </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight style={styles.blueBlock}
                                onPress={this.player02}>
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                    onChangeText={(player2) => this.setState({player2})}
                                    value={this.state.player2} 
                                />
                                <Text style={styles.buttonText}>
                                    0!
                                </Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.blueBlock}
                                onPress={this.player152}>
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                    onChangeText={(player2) => this.setState({player2})}
                                    value={this.state.player2} 
                                />
                                <Text style={styles.buttonText}>
                                    15!
                                </Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.blueBlock}
                                onPress={this.player30}>
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                    onChangeText={(player1) => this.setState({player1})}
                                    value={this.state.player1} 
                                />
                                <Text style={styles.buttonText}>
                                    30!
                                </Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.blueBlock}
                                onPress={this.player40}>
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                    onChangeText={(player1) => this.setState({player1})}
                                    value={this.state.player1} 
                                />
                                <Text style={styles.buttonText}>
                                    40!
                                </Text>
                            </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight style={styles.blueBlock}
                                onPress={this.player302}>
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                    onChangeText={(player2) => this.setState({player2})}
                                    value={this.state.player2} 
                                />
                                <Text style={styles.buttonText}>
                                    30!
                                </Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.blueBlock}
                                onPress={this.player402}>
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                    onChangeText={(player2) => this.setState({player2})}
                                    value={this.state.player2} 
                                />
                                <Text style={styles.buttonText}>
                                    40!
                                </Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.blueBlock}
                                    onPress={this.playerAd}>
                                <View style={styles.button}>
                                    <TextInput style={styles.buttonText}
                                        onChangeText={(player1) => this.setState({player1})}
                                        value={this.state.player1} 
                                    />
                                    <Text style={styles.buttonText}>
                                        Ad!
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.blueBlock}
                                    onPress={this.playerSet}>
                                <View style={styles.button}>
                                    <TextInput style={styles.buttonText}
                                        onChangeText={(player1) => this.setState({player1})}
                                        value={this.state.player1} 
                                    />
                                    <Text style={styles.buttonText}>
                                        Game!
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.blueBlock}
                                    onPress={this.playerAd2}>
                                <View style={styles.button}>
                                    <TextInput style={styles.buttonText}
                                        onChangeText={(player2) => this.setState({player2})}
                                        value={this.state.player2} 
                                    />
                                    <Text style={styles.buttonText}>
                                        Ad!
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.blueBlock}
                                    onPress={this.playerSet2}>
                                <View style={styles.button}>
                                    <TextInput style={styles.buttonText}
                                        onChangeText={(player2) => this.setState({player2})}
                                        value={this.state.player2} 
                                    />
                                    <Text style={styles.buttonText}>
                                        Game!
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                            <View style={styles.wordContainer}>
                                <Text style={styles.paragraph}>
                                    Set Score:
                                </Text>
                                <Text style={styles.paragraph}>
                                    {this.state.player1Set}  :  {this.state.player2Set}
                                </Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={styles.paragraph}>
                                    Game Score:
                                </Text>
                                <Text style={styles.paragraph}>
                                    {this.state.player1Game}  :  {this.state.player2Game}
                                </Text>
                            </View>
                            <TouchableHighlight style={styles.greenBlock}
                                    onPress={this.subScore}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Submit Score
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        
                    </View>
                </View>
                <View style={{ display: this.state.page3Display }}>
                    <View style={styles.contentContainer}>
                        <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/c570fa31edc3afa86f6801bc5f11d67b' }}
                        >
                        <View style={styles.wordContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>
                                    Tennis Scorekeeper
                                </Text>
                            </View>
                            <Text style={styles.paragraph}>
                                    Standings (W/L)
                            </Text>
                            <View style={styles.standings}>
                                 <Text style={styles.standingsText}>
                                   {this.state.player1} : {this.state.p1wins} - {this.state.p1losses}
                                 </Text>
                                 <Text style={styles.standingsText}>
                                   {this.state.player2} : {this.state.p2wins} - {this.state.p2losses}
                                 </Text>
                            </View>
                            
                                 
                    
                        </View>
                        </ImageBackground>
                    </View>
                </View>
                
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handlePage1}>
                        <Text style={styles.navButtonText}>
                            Players
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handlePage2}>
                        <Text style={styles.navButtonText}>
                            Score
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handlePage3}>
                        <Text style={styles.navButtonText}>
                            Standings
                        </Text>
                    </TouchableHighlight>
                </View>

                
                
            
                
                
                
                
                
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    background: {
        height: 550,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 35,
    },
    wordContainer: {
        marginTop: 20
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 7,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
    },
    button1Text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'left',

    },
    button1: {
        height: 30,
        width: 150,
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'left',
        justifyContent: 'center',
        margin: 2,
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderColor: 'white',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'lightblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkblue',
    },
    standings: {
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 5,
        height: 100,
        width: 250,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    standingText: {
        color: 'black',
        fontSize: 30,
        margin: 10,
    }
});
