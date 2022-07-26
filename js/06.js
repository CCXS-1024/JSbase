let newDiv = document.createElement('div'); //动态创建元素节点
const haha = document.querySelector('.haha');

newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'red'

let text = document.createTextNode('游戏人生')//创建文本节点

newDiv.appendChild(text) // 添加文本节点

// document.body.appendChild(newDiv) // 把newDiv 插入到body最后

document.body.insertBefore(newDiv, haha) // 把newDiv 插入到hahah之前


let i= 20;   //18 18


i =19 //16

i =18 // 14

i =19 //14

 //19