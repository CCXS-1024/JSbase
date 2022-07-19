const divBox = document.querySelector('.divBox');
const mid = document.querySelector('.mid');
/**
 *   mychlider:获取所有元素节点
 *  @params
 *  @return
 *    [Arry] :后代所有元素节点
*/
function mychlider(element) {
  var ary = [],
    n = element.childNodes;
  for (var i = 0; i < n.length; i++) {
    var item = n[i];
    item.nodeType === 1 ? ary.push(item) : null;

  }
  return ary
}
console.log(mychlider(divBox))

/**
 *  myPrv:实现查找上一个元素节点
 *  
 *  @params
 *    接受一个元素节点
 *  @return
 *    返回上一个兄弟元素节点
 * 
*/
function myPrv(elementNode) {
  var pre = elementNode.previousSibling
  while (pre.nodeType !== 1) {
    pre = pre.previousSibling
  }
  return pre
}

// function myPreAll(elementNode) {
//   var All = [],
//     pre = elementNode.previousSibling;

//   while (1) {
//     if (pre.nodeType === 1) {
//       All.push(pre)
//     }
//     pre = pre.previousSibling
//   }

