

export function capitalize(str){
    const a= str.slice(0,1);
    const b= str.slice(1);

    const newStr= a.toUpperCase()+b;
    return newStr;
    //return 'Gaurav';
}