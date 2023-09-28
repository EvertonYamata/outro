import {useEffect, useState} from "react"
import { Button, Text } from "@rneui/themed"
import axiosConfig from "./axios"
import { ListItem } from "react-native-elements"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"
import { ScrollView } from "react-native"
import ListItemTitle from "react-native-elements/dist/list/ListItemTitle"

export default function Home({ navigation }) {
    const [produtos, setProdutos] = useState([])

    useEffect(() =>{
        axiosConfig.get('/products').then((response) =>{
            setProdutos(response.data.products)
        })
    },[])


    return (
        <ScrollView>
            <Text h1>Home</Text>
            <Button title='Sair' onPress={
                () => navigation.navigate('Login')
            } />
            <Text h3>produtos</Text>
            {produtos.map((produto)=>
            (
                <ListItem key={produto.id} onPress>
                    <ListItemContent>
                        <ListItemTitle>
                            <Text>{produto.title}</Text>
                        </ListItemTitle>
                    </ListItemContent>
                </ListItem>
            ))}
        </ScrollView>
    )
}