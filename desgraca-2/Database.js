import AsyncStorage from "@react-native-async-storage/async-storage";


async function saveItem(listItem, id) {
    listItem.id = new Date().getTime()
    const saved = await getItems()

    if (id) {
        const index = await saved.findIndex(i => i.id === id)
        saved[index] = listItem
    } else
        saved.push(listItem)

    return AsyncStorage.setItem('items', JSON.stringify(saved))
}

function getItems() {
    return AsyncStorage.getItem('items')
        .then(res => {
            if (res) {
                return Promise.resolve(JSON.parse(res))
            } else {
                return Promise.resolve([])
            }
        })
}

async function getItem(id) {
    const saved = await getItems()
    return saved.find(item => item.id === id)
}

async function deleteItem(id) {
    let saved = await getItems()
    const index = await saved.findIndex(i => i.id === id)
    saved.splice(index, 1)
    return AsyncStorage.setItem('items', JSON.stringify(saved))
}

module.exports = {
    saveItem,
    getItems,
    getItem,
    deleteItem
}