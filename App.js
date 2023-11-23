import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from 'react-native';
import {DataTable} from 'react-native-paper';
import {profiles} from './info.js';

const sWidth = Dimensions.get("window").width;
const sHeigth = Dimensions.get("window").height;

export default function App() {
  const filteredList = profiles.filter(item => item.userType === 'Student');

  const Item = ({item}) =>{
    return(
        <DataTable.Row  style = {styles.tBorder}>
            <DataTable.Cell >{item.id}</DataTable.Cell>
            <DataTable.Cell >{item.name.firstName} {item.name.lastName}</DataTable.Cell>
            <DataTable.Cell >{item.course}</DataTable.Cell>
        </DataTable.Row>
     );
  }

  return (
    <DataTable style = {styles.container}>
      <View style = {styles.tcont}>
        <DataTable.Header>     
          <DataTable.Title style = {{justifyContent: 'center'}}>
          < Text style = {styles.tTitle}>Accounts</Text>
          </DataTable.Title>
        </DataTable.Header> 
        <DataTable.Header style = {styles.tBorder}>
          <DataTable.Title><Text style = {styles.tColumnTitle}>ID</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tColumnTitle}>Username</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tColumnTitle}>Password</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tColumnTitle}>User Type</Text></DataTable.Title>
        </DataTable.Header>
          {profiles.map((list)=>(
            <DataTable.Row  style ={styles.tBorder} key={list.id} >
              <DataTable.Cell>{list.id}</DataTable.Cell>
              <DataTable.Cell>{list.userName}</DataTable.Cell>
              <DataTable.Cell>{list.password}</DataTable.Cell>
              <DataTable.Cell>{list.userType}</DataTable.Cell>   
            </DataTable.Row>
          ))}
      </View>

      <View style = {styles.tcont}>
      <DataTable.Header>     
        <DataTable.Title style = {{justifyContent: 'center'}}>
          <Text style = {styles.tTitle}>Users</Text>
        </DataTable.Title>
      </DataTable.Header> 
        
      <DataTable.Header style = {styles.tBorder}>
        <DataTable.Title><Text style = {styles.tColumnTitle}>ID</Text></DataTable.Title>
        <DataTable.Title><Text style = {styles.tColumnTitle}>First Name</Text></DataTable.Title>
        <DataTable.Title><Text style = {styles.tColumnTitle}>Last Name</Text></DataTable.Title>
        <DataTable.Title><Text style = {styles.tColumnTitle}>Year and Section</Text></DataTable.Title>
      </DataTable.Header>
      
      <ScrollView> 
        {profiles.map((list)=>(
          <DataTable.Row  style ={styles.tBorder} key={list.id} >
            <DataTable.Cell>{list.id}</DataTable.Cell>
            <DataTable.Cell>{list.name.firstName}</DataTable.Cell>
            <DataTable.Cell>{list.name.lastName}</DataTable.Cell>
            <DataTable.Cell>{list.yearSection}</DataTable.Cell>   
          </DataTable.Row>
        ))}
      </ScrollView>
      </View>


      
      <View style = {styles.tcont}>
      <DataTable.Header>     
        <DataTable.Title style = {{justifyContent: 'center'}}>
          <Text style = {styles.tTitle}>Students</Text>
        </DataTable.Title>
      </DataTable.Header> 
        
      <DataTable.Header style = {styles.tBorder}>
        <DataTable.Title><Text style = {styles.tColumnTitle}>ID</Text></DataTable.Title>
        <DataTable.Title><Text style = {styles.tColumnTitle}>Name</Text></DataTable.Title>
        <DataTable.Title><Text style = {styles.tColumnTitle}>Course</Text></DataTable.Title>
      </DataTable.Header>
      
      <FlatList   
          data = {filteredList}
          renderItem = {Item}
          keyExtractor = {item => item.id} />           
      </View> 
    </DataTable>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    padding:30,
    width: sWidth,
    height: sHeigth * 1,
  },
  tcont:{
    padding:20,
    marginBottom:40
  },
  tBorder: {
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid', 
},
  tTitle: {
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color:'black'
  },
  tColumnTitle: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'   
   }
});