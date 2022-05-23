var arr=JSON.parse(localStorage.getItem("products"))||[]
//console.log(arr)
console.log(arr)

let iamge=document.createElement('img')
iamge.src=arr[0].iamge
let type=document.createElement('h2')

let desc=document.createElement('h3')

let price=document.createElement('p')

