function calDis(num){
    const keypad = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [11,0,12]
    ]
    for(let i=0;i<keypad.length;i++){
        for(let j=0;j<keypad[i].length;j++){
            if(num == keypad[i][j])
                return [i, j];
        }
    }
}

function Solution(numbers, hand) {
    let left=11;
    let right=12;
    let answer = [];


    numbers.map(x => {
        if(x==1 || x==4 || x==7){
            left = x;
            answer.push("L");
            console.log("left" + left + "right" + right);
        }
        else if(x==3 || x==6 || x==9){
            right = x;
            answer.push("R");
            console.log("left" + left + "right" + right);
        }
        else{
            const Ldis = Math.abs(calDis(x)[0] - calDis(left)[0])+
                Math.abs(calDis(x)[1] - calDis(left)[1]);
            const Rdis = Math.abs(calDis(x)[0] - calDis(right)[0])+
                Math.abs(calDis(x)[1] - calDis(right)[1]);

            console.log("Ldis" + Ldis + "Rdis" + Rdis);

            if(Ldis < Rdis){
                left = x;
                answer.push("L");
                console.log("left" + left + "right" + right);
            }
            else if(Ldis > Rdis){
                right = x;
                answer.push("R");
                console.log("left" + left + "right" + right);
            }
            else{
                if(hand == "left"){
                    left = x;
                    answer.push("L");
                    console.log("left" + left + "right" + right);
                }
                else{
                    right = x;
                    answer.push("R");
                    console.log("left" + left + "right" + right);
                }
            }

        }



    })
    return answer.join("");
}

export default Solution;