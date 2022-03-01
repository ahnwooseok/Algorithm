

function solution(s) {
    let answer = [];
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let temp = [];
    s =  s.split("");
    for(let i=0;i<s.length;i++){
        temp.push(s[i]);
        console.log(Number.isInteger(Number(temp.join(""))))
        if(Number.isInteger(Number(temp.join("")))  ){
            console.log("first");
            answer.push(Number(temp.join("")));
            temp = [];
        }
        else if(num.indexOf(temp.join("")) >-1){
            console.log( num.indexOf(temp.join("") ));
            console.log("second");
            answer.push(num.indexOf(temp.join("")));
            temp = [];
        }
    }
    return Number(answer.join(""));

}

export default solution;