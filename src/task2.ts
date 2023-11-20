interface User {
    readonly id: number,
    age: number,
    name: string,
}

const users: User[] = [
    {
        id: 1,
        age: 20,
        name: 'John',
    },
    {
        id: 2,
        age: 17,
        name: 'Asuna',
    },
    {
        id: 3,
        age: 17,
        name: 'Kirito',
    },
]

function updateObjectInArray<T>(initialArray: T[], key: keyof T, value: T[keyof T], patch: Omit<Partial<T>, 'id'>): T[] {
    const copiedArray: T[] = [...initialArray]
    const indexToUpdate = copiedArray.findIndex(user => user[key] === value)

    if (indexToUpdate !== -1) {
        copiedArray[indexToUpdate] = {
            ...copiedArray[indexToUpdate],
            ...patch
        }
    }

    return copiedArray
}

console.log(updateObjectInArray<User>(users, "id", 2, {age: 20, name: 'Asuna Sword'}))
console.log(updateObjectInArray<User>(users, "id", 2, {age: 18}))
console.log(updateObjectInArray<User>(users, "name", 'Kirito', {age: 18, name: 'Kirito kun'}))