import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'
import Database from './Database.js'


export default function AppForm({ route, navigation }) {
    const id = route.params ? route.params.id : undefined
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')


    useEffect(() => {
        if (!route.params) return;
        setDescricao(route.params.descricao)
        setQuantidade(route.params.quantidade.toString())
    }, [route])

    async function handleButtonPress() {
        setDescricao("")
        setQuantidade("")
        const list = { descricao, quantidade: parseInt(quantidade) }
        Database.saveItem(list, id)
            .then(response => navigation.navigate("AppList", list))
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrinho</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder="Digite um item"
                    value={descricao}
                    onChangeText={(e) => { setDescricao(e) }}
                    clearButtonMode="always" />
                <TextInput style={styles.input}
                    placeholder="Digite a quantidade"
                    keyboardType={"numeric"}
                    value={quantidade.toString()}
                    onChangeText={(e) => { setQuantidade(e) }}
                    clearButtonMode="always" />
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Icon name="save" size={22} color="white"/>
                    <Text style={styles.buttonText}>Salvar/Editar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D93600',
        alignItems: 'center',
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 50
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc'
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold'
    }
})