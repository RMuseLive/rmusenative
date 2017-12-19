import React, { Component } from 'react';

import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Header} from 'Header';
var Device_Width = Dimensions.get('window').width ;

export default class MainActivity extends Component {
  
  

 render() {
  
   return (

      <View style={styles.MainContainer}>

          <ScrollView 
              horizontal = { true } 
              showsHorizontalScrollIndicator = {false}
              pagingEnabled = { true } >

                <View style = { styles.FirstBlockStyle }>
                
                    <Text style={styles.TextStyle}>Here you go Class </Text>

                    {/* Put All Your Components Here Which you Want to Show Inside This View. */}

                </View>

      
                <View style = { styles.SecondBlockStyle }>
                  
                    <Text style={styles.TextStyle}>Once data is connected </Text>

                    {/* Put All Your Components Here Which you Want to Show Inside This View. */}

                </View>

      
                <View style = { styles.ThirdBlockStyle }>
                  
                    <Text style={styles.TextStyle}>We will display content here. </Text>

                    {/* Put All Your Components Here Which you Want to Show Inside This View. */}

                </View>
          
          </ScrollView>

      </View>

        
   );
 }
}

const styles = StyleSheet.create({

  MainContainer :{

    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  FirstBlockStyle:{

    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: Device_Width 

  },

  SecondBlockStyle:{
    
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: Device_Width 
    
  },

  ThirdBlockStyle:{
    
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: Device_Width 
    
  },

  TextStyle:{

    fontSize : 30,
    color: '#fff',
    textAlign : 'center',
    fontWeight: 'bold'
  }

}); 