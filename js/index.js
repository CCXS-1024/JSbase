// let btn = document.querySelector(".btn")
// let elem =document.querySelector(".detail")
// btn.onclick = function(){
//   elem.classList.toggle('active')
//   btn.classList.toggle('btn-active')
//   console.dir(elem);
// }

const btn = document.querySelector('.btn')
const text = document.querySelector('.wen')

btn.onclick = function () {
  let num = Number(text.value);
  console.dir(btn)
}
  ;

/**
 *  sort: 实现数组的排序
 *  @params
 *    可以没有，也可以是一个函数
 *     如果不传函数默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的
 *  @return
 *    排列后的新数组 （原来数组改变）
*/

// sort如果不传函数只能排个位数
let arr = [5, 2, 1, 0]
arr.sort()
console.log(arr)

//多位数要传入函数才能排序 
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); //[1, 100000, 21, 30, 4]
/**
 *  sort(function(a,b){
 *    return a-b
 * })
 *  a b是相邻的两项  a是后一项 b是前一项  EG: a:30 b:1 依次类推
 *  要实现从小到大 就是 a-b  
 *  要实现重大到小就是 b-a
*/


/**
 * unique:实现数组去重
 *  @params
 *    ary [Arry]要去重的数组
 *  @return
 *    [Arry]去重后的数组  
 *  by ccxs on 2021-10-22  
*/
function unique(ary) {
  let obj = {};
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (obj[item] !== undefined) {
      ary[i] = ary[ary.length - 1];
      ary.length--;
      i--;
      continue;
    }
    obj[item] = item;
  }
  return ary;
}
let newArr = []
array1.forEach(item => {
  if (!newArr.includes(item)) {
    newArr.push(item)
  }
})
console.log(newArr);



let obj = {};
for (let i = 0; i < array1.length; i++) {
  let item = array1[i];
  if (obj[item] !== undefined) {
    array1.splice(i, 1);
    i--;
    continue;
  }
  obj[item] = item

}


for (let i = 0; i < array1.length; i++) {
  let item = array1[i]
  for (let j = i + 1; j < array1.length; j++) {
    let item2 = array1[j]
    if (item === item2) {
      array1.splice(j, 1);
      j--;  //防止数组塌陷
    }
  }
}
