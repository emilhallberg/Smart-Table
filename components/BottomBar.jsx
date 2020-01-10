import React, { useState } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';
import Colors from '../utils/Colors'

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      height:200,
     
      backgroundColor: Colors.background,
      position: "absolute",
      bottom:0,
    },
    text: {
        fontSize: 20,
    },
    centerContent: {
        alignItems: 'center',
    }

});


const BottomBar = ({navigation}) => {  
    const [barValue, setBarValue] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <View style={{flexDirection:"row", paddingTop:18}}>
                <Text>Bord för minst</Text><Text style={{fontWeight:'bold'}}> {barValue} st</Text>

                </View>
                <Slider
                    style={{width: 300, height: 45, paddingTop:10}}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor= {Colors.primary}
                    maximumTrackTintColor={Colors.normal}
                    thumbTintColor={Colors.primary}
                    step={1}
                    value={barValue}
                    onValueChange={(e)=>setBarValue(e)}
                    
                />
                <Text style={{color:Colors.link}}>Visa vägen till närmaste bord</Text>
                <Text style={{color:Colors.link, paddingTop:20}}>Byt byggnad</Text>
            </View>
        </View>
        
    );
};

    export default BottomBar;