//store the products array in localstorage as "products"
var arr=JSON.parse(localStorage.getItem("products"))||[]
//console.log(arr)

function pord(a,b,c,d){
this.type=a;
this.desc=b;
this.price=c;
this,image=d
}


function adddata(event){
event.preventDefault();

let form=document.getElementById('products')
let image=products.image.value
let type=products.type.value
let desc=products.desc.value
let price=products.price.value


//console.log(type,description,price,image)

let productdata=new pord(type,desc,price,image)
arr.push(productdata)
console.log(arr)

localStorage.setItem("products",JSON.stringify(arr))
}