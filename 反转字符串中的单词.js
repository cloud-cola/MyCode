// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例：
// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"

// 提示：
// 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii

// es6写法
export default(str) => {
    // 按空格分割字符串，保存数组，数组元素的顺序就是单词的顺序
    let arr = str.split(' ');
    //对数组进行遍历，每个元素进行反转
    let result = arr.map(item => {
        return item.split('').reverse().join('');
    });
    return result.join(' ');
}

