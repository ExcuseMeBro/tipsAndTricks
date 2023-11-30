console.log('Hi')
// const arr: number[] = [1, 2, 3, 1, 4]
// console.log(arr)
// const arr2: [1, 2, 3] = [1, 2, 3]
// console.log(arr2)

// Generics
const input = document.querySelector<HTMLInputElement>('.input')
console.log(input?.value)

function getSecond<ArrayType>(array: ArrayType[]): ArrayType {
    return array[1]
}

const a: number[] = [1, 2, 3]
const a2: Array<number> = [1, 2, 3] // create object with generics
const b: string[] = ['hi', 'hello']
const b1: Array<string> = ['hi', 'hello'] // create object with generics

const retA = getSecond<number>(a)
const retB = getSecond(b)

const A = new Set<string>()
A.add("test")

const B = new Map<string, number>()
B.set("element", 5)

// Generic types automatic detect with default value
const C = new Set(['AD'])
const D = new Map([['AD', 5]])


// Generics use cases (brand new)
/*type APIResponse<TData> = {
    data: TData
    isError: boolean
}

type UserResponse = APIResponse<{ name: string, age: number }>

const user: UserResponse = {
    data: {
        name: 'jack',
        age: 34
    },
    isError: false
}*/

// Using with defaults
/*
type APIResponse<TData = { status: number }> = {
    data: TData
    isError: boolean
}


const X: APIResponse = {
    data: {
        status: 200
    },
    isError: false
}

const Y: APIResponse<{ name: string }> = {
    data: {
        name: 'this prop overwrite status prop'
    },
    isError: false
}*/

// type APIResponse<TData extends object> = {
//     data: TData
//     isError: boolean
// }
//
// /*const X: APIResponse<string> = {
//     data: {
//         status: 200
//     },
//     isError: false
// }*/
//
// const X: APIResponse<{ status: number }> = {
//     data: {
//         status: 200
//     },
//     isError: false
// }


type APIResponse<TData extends object = { status: number }> = {
    data: TData
    isError: boolean
}

const X: APIResponse = {
    data: {
        status: 200
    },
    isError: false
}

// Array to Object
function arrayToObject<T>(array: [string, T][]) {
    const obj: {
        [index: string]: T
    } = {}

    array.forEach(([key, value]) => {
        obj[key] = value
    })

    return obj
}

const arr: [string, number | boolean][] = [
    ['keyOne', 1],
    ['keyTwo', 2],
    ['keyThree', true],
]

const obj = arrayToObject(arr)