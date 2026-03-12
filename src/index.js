

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

export const calculator= {
    add(a,b){
        return a+b;
    },

    multiply(a,b){
        return a*b;
    },

    subtract(a,b){
        return a-b;
    },

    divide(a,b){
        return a/b;
    }
}

function shiftLowerCases(arr, i, k){
    let code= arr[i].charCodeAt(0);

    code= code + k;
    if(code > 90) code= (code % 91) + 65;

    arr[i]= String.fromCharCode(code);
}

function shiftUpperCases(arr, i, k){
    let code= arr[i].charCodeAt(0);

    code= code + k;
    if(code > 122) code= (code % 123) + 97;

    arr[i]= String.fromCharCode(code);
}


export function caesarCipher(str,k){
    let arr= str.split("");

    for(let i=0;i<arr.length; ++i){
        let code= arr[i].charCodeAt(0);

        if(code>=65 && code<=90) shiftLowerCases(arr,i,k);
        else if(code>=97 && code<=122) shiftUpperCases(arr,i,k);
    }
    
    let newStr= arr.join("");
    return newStr;
}