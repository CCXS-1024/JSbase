// /**
//  *  charAt:根据索引获取指定位置的字符
//  *  @params
//  *    n [number]获取字符指定的索引
//  *  @return
//  *    返回查找的字符
//  *    找不到返回的是空字符串不是undefined
// */
// let str='ccxszxc'
// console.log(str.charAt(0)); // 0
// console.log(str.charAt(100))// ''

// console.log(str.charCodeAt(0)) //99
// console.log(String.fromCharCode(99))// 通过对应的ASCCII 找到字符

/**
 *  substr(n,m)：从索引n开始截取m个字符，m不写截取到末尾（后面的方法也是）
 *  substring(n,m):从索引n开始找的索引为m处(不包含m)
 *  slice(n,m): 跟substring一样 从索引n开始截取到m索引处(不包含m)但是slice可以支持负数，其余两个方法不能
*/
// let str='ccxsnbawr';
// console.log(str.substr(0,1))
// console.log(str.substring(1,4))
// console.log(str.slice(1,4))
// console.log(str.slice(-3,-1)) // 用str.length + 负数
// // (6,8) aw

/**
 *  indexOf(x,y):：获取x第-次出现位置的索引，y是控制查找的起始位置素引
 *  lastIndexof(x)：最后-次出现位置的索引
 *       =›没有这个字符，返回的结果是 -1
*/

// let time = '2022-7-18 12:6:23'
// let newDate = time.split(' ')
// let left = newDate[0].split('-')
// let right = newDate[1].split(':')

// console.log(left,right);

let str = 'https://www.baidu.com/s?ie=UTF-8&wd=ccxs&name=awr#box'
// let obj = {}
// let query = str.slice(str.indexOf('?') + 1)
// let hash = query.split('#')[1]
// let askAry = query.split('#')[0].split('&')
// console.log(askAry);
// askAry.forEach(item => {
//   let res = item.split('=');
//   obj[res[0]] = res[1]
// })
// obj.hash = hash
// console.log(obj)

/**
 *  quertURLparams:获取URL地址中问号传参和哈希值
 *  @params
 *    url [string] 要解析的URL字符串
 *  @return
 *    [obj] 包含参数和哈希对象的信息
*/
function quertURLparams(url) {
  let asIn = url.indexOf('?'),
    wellIn = url.indexOf('#'),
    askText = '',
    wellText = '';
    
  wellIn === -1 ? wellIn = url.length : null;
  asIn !== -1 ? askText = url.substring(asIn + 1, wellIn) : null;
  console.log(askText)
  wellText = url.slice(wellIn + 1);

  let result = {};

  wellText !== '' ? result['HASH'] = wellText : null;
  if (askText !== '') {
    let ary = askText.split('&');
    console.log(ary)
    ary.forEach(item => {
      let key = item.split('=')[0];
      let value = item.split('=')[1];
      result[key] = value
    })
  }
  return result
}

console.log(quertURLparams(str))