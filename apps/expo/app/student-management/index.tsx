import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Student } from 'app/features/student/Student'

export default function StudentList() {
  const [students, setStudents] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@yopmail.com',
      phone: '1234567890',
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'janedoe@yopmail.com',
      phone: '1234567890',
    },
    {
      id: '3',
      name: 'John Smith',
      email: 'johnsmith@yopmail.com',
      phone: '1234567890',
    },
    {
      id: '4',
      name: 'Jane Smith',
      email: 'janesmith@yopmail.com',
      phone: '1234567890',
    },
  ])

  if (students === undefined) return <Text>Loading...</Text>

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   {/* <Header /> */}
    //   <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
    //     <Text>Students</Text>
    //   </View>

    // </View>
    <FlatList
      data={students}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <Student name={item.name} email={item.email} phone={item.phone} />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
