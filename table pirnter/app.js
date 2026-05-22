function printTable(){

    let number = document.getElementById("number").value;

    let result = "";

    for(let i = 1; i <= 10; i++){

        result += `${number} × ${i} = ${number * i} <br>`;

    }

    document.getElementById("result").innerHTML = result;
}