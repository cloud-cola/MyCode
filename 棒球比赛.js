/**
 * 力扣 第682 题
 */
export default (arr) => {
/**
 * 用数组来实现数据结构，pop(),push()
 */
let result = [];
let pre1;
let pre2;
arr.forEach(item => {
    switch(item){
    case 'C':
    if(result.length){
    result.pop();
        }
    break;
    case 'D':
pre1 = result.pop();
result.push(pre1,pre1 * 2);
    break;
    case '+':
            pre1 = result.pop();
            pre2 = result.pop(); 
            result.push(pre2,pre1,pre1+pre2);
    break;
    default:
        result.push(item * 1);
    }
});
return result.reduce((total,num) =>{
    return total + num
});
}