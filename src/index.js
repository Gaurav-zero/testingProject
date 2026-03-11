

export function capitalize(str){
    const a= str.slice(0,1);
    const b= str.slice(1);

    const newStr= a.toUpperCase()+b;
    return newStr;
    //return 'Gaurav';
}

export function reverseString(str){
    let newStr= "";
    for(let i= str.length -1; i>=0; --i){
        newStr= newStr + str[i];
    }

    return newStr;
}