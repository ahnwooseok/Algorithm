function cal(x,n){
    let result = [];
    for(let i=n-1;i>=0;i--){
        result.push(Math.floor(x/Math.pow(2,i)));
        x = x % Math.pow(2,i);
    }
    return result;
}

function solution(n, arr1, arr2) {
    let map1 = [];
    arr1.map(x => {
        map1.push(cal(x,n));
    })
    let map2 = [];
    arr2.map(x => {
        map2.push(cal(x,n));
    })
    console.log(map1);
    console.log(map2);
    let answer = [];
    for(let i=0;i<n;i++){
        let tmp = [];
        for(let j=0;j<n;j++)
            tmp.push(" ");
        answer.push(tmp);
    }





    for(let i=0;i<map1.length;i++){
        for(let j=0;j<map1[i].length;j++){
            if(map1[i][j] == 1){
                answer[i][j] = "#";
            }

        }
    }
    for(let i=0;i<map2.length;i++){
        for(let j=0;j<map2[i].length;j++){
            if(map2[i][j] == 1)
                answer[i][j] = "#";
        }
    }
    return answer.map(x => x.join(""));
}

export default solution;