// Write your solution in this file!
const employee= {name : 'Jeff', streetAddress: '123 Anywhere St.'}

function updateEmployeeWithKeyAndValue (x, key, value){
    const object = {...x}
    object[key] = value
    return object  
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    const object = {...obj}
    delete object[key]
    return object
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}