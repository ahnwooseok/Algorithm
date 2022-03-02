function cal(arr){
    let flag = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == arr[i+1]){
            arr.splice(i,2);
            flag = true;
            break;
        }
    }
    return [arr,flag];
}

function solution(board, moves) {
    let temp = [];
    moves.map(x=>{
        for(let i=0;i<board.length;i++){
            if(board[i][x-1] != 0){
                temp.push(board[i][x-1]);
                board[i][x-1] = 0;
                break;
            }
        }
    })
    let answer = temp.length;
    let ttt = cal(temp);
    while(ttt[1]){
        ttt = cal(ttt[0]);
    }
    return answer - ttt[0].length;
}

export default solution;