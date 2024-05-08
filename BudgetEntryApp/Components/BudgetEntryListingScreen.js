import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

function BudgetEntryListingScreen() {

  const items = useSelector(state => state.BudgetItems)

  return (
    <View style={styles.container}>
      <FlatList data={items.data} renderItem={({ item, index }) => {
        return (
          <ScrollView>
            <View style={styles.list}>
              <Text style={{ fontSize: 25, 
                             fontWeight: 'bold', 
                             color: 'white' 
                          }}>{item.item}</Text>
              <Text style={{ fontSize: 20, 
                             fontWeight: '500', 
                             color: 'white' 
                             }}> Planned Amount - {item.plannedAmount}</Text>
              <Text style={{ fontSize: 20, 
                             fontWeight: '500', 
                             color: 'white', 
                             marginBottom: 10 
                             }}>Actual Amount - {item.actualAmount}</Text>
            </View>
          </ScrollView>
        )
      }} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#4169E1",
    borderWidth: 2,
    borderRadius: 20,
    margin: 10
  }
})

export default BudgetEntryListingScreen
