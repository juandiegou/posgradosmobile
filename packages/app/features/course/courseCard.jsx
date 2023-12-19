import { View, Text, Image } from "dripsy";

export function CourseCard ({ name, description, startDate, endDate, price, status }){
    return (
        <View>
            <View style={{ alignItems: 'center', padding: 'auto' }}>
                <Image
                source={{
                    uri: 'https://bootdey.com/image/400x200/9932CC/000000',
                }}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 5,
                    borderWidth: 1,
                }}
                />
            </View>
            <View style={{ alignContent: 'space-between' }}>
                <Text>Name: {name}</Text>
                <Text>Description: {description}</Text>
                <Text>Start Date: {startDate}</Text>
                <Text>End Date: {endDate}</Text>
                <Text>Price: {price}</Text>
                <Text>Status: {status}</Text>
            </View>
        </View> 
          
    );
};