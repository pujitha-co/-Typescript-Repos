export{}

function display<T>(value:T) :T{
    return value;
}

console.log(display<number>(567));
console.log(display<string>("pujitha"));
console.log(display<boolean>(true));