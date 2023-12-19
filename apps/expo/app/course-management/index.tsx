'use client'
import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { CourseCard } from 'app/features/course/courseCard'

export default function Index() {
  const [courses, setcourses] = useState([
    {
      id: 1,
      name: 'Curso de analisis de datos',
      description: 'Curso de analisis de datos',
      startDate: '2021-08-01',
      endDate: '2021-08-01',
      price: 100,
      status: 'active',
    },
    {
      id: 2,
      name: 'Curso de ciberseguridad y hacking etico',
      description:
        'Curso de ciberseguridad y hacking etico en la industria 4.0',
      startDate: '2021-08-01',
      endDate: '2021-08-01',
      price: 100,
      status: 'active',
    },
    {
      id: 3,
      name: 'Curso de geneticas y biotecnologia con el uso de la inteligencia artificial',
      description:
        'Curso de geneticas y biotecnologia con el uso de la inteligencia artificial',
      startDate: '2021-08-01',
      endDate: '2021-08-01',
      price: 100,
      status: 'active',
    },
    {
      id: 4,
      name: 'Curso de creatividad e innovacion de productos y servicios tecnologicos',
      description:
        'Curso de creatividad e innovacion de productos y servicios tecnologicos',
      startDate: '2021-08-01',
      endDate: '2021-08-01',
      price: 100,
      status: 'active',
    },
  ])

  if (courses === undefined) return <div>Loading...</div>

  return (
    <FlatList
      data={courses}
      horizontal={false}
      numColumns={1}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <CourseCard
            name={item.name}
            description={item.description}
            startDate={item.startDate}
            endDate={item.endDate}
            price={item.price}
            status={item.status}
          />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}
