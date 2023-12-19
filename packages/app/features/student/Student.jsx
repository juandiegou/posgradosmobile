import { View, Text, Image } from "dripsy";
import { TextLink } from "solito/link";


export function Student({name, email, phone}) {

  return (
    <View>
        <View style={{ alignItems: 'center', padding: 'auto' }}>
            <Image
            source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            }}
            style={{
                width: 200,
                height: 200,
                borderRadius: 50,
                borderWidth: 1,
            }}
            />
        </View>
        <View style={{ alignContent: 'space-between' }}>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
        </View>
        
        {/* <TextLink style={{color:"blue", textEmphasisColor:"HighlightText"  }} href={`/`}>Volver</TextLink> */}
    </View>
  );
}