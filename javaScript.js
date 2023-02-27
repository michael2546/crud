let title=document.getElementById("title");
let price=document.getElementById("price");
let taxes=document.getElementById("taxes");
let ads=document.getElementById("ads");
let discount=document.getElementById("discount");
let total=document.getElementById("total");
let count=document.getElementById("count");
let category=document.getElementById("category");
let submit=document.getElementById("submit");




// getTotal
function getTotal(){
    if(price.value !=""){
        // add + to convert to int
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value
        total.innerHTML=result;
        total.style.cssText="background-color: rgb(73, 103, 199);";

    }else{
        total.innerHTML="";
        total.style.cssText="background-color: rgb(120, 38, 184);";
    }
}


//create product

let datapro =[]  //data product

//لو اللوكال ستورادجي فيها داتا حطهالي في الاراي و لو مفيهاش كمل زي مانت و الاراي فاضيه
if (localStorage.product !=null){

    // convert from string to a data to strore it in the array 
    datapro=JSON.parse(localStorage.product)
}else{
    datapro=[]
}


//create data
submit.onclick = function(){

    //new product
    let newPro ={
        title : title.value,
        price : price.value,
        taxes : taxes.value,
        ads : ads.value,
        discount : discount.value,
        total : total.innerHTML,
        count : count.value,
        category : category.value
    }
    if(count.value>0){
        for(let i=0 ; i<count.value ; i++){
            datapro.push(newPro)
        }
    }else{
        datapro.push(newPro)
    }
    

    //product is a new item 
    //data must be saved as a string so we add JSON.stringify to convert it to string
    localStorage.setItem('product',JSON.stringify(datapro))

    //call clearData() function to delete the data from the text boxes after save
    clearData();  
    showData();



    console.log(datapro)
}



// delete input values after click create

function clearData(){
    title.value="";
    price.value="";
    taxes.value="";
    ads.value="";
    discount.value="";
    total.innerHTML="";
    total.value="";
    count.value="";
    category.value="";
}


// read data 
function showData(){
    let table='';
    for(let i=0 ; i<datapro.length ; i++){
        table+=
        `
        <tr>

        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button id="update" onclick="updataData(${i})">update</button></td>
        <td><button id="delete" onclick="deleteData(${i})">delete</button></td>

        </tr>
        `
    }
    document.getElementById("tbody").innerHTML=table;

    let btnDelete= document.getElementById("deleteAll");
    if(datapro.length>0){
        btnDelete.innerHTML=
        `
        <button onclick="deleteAll()">Delete All(${datapro.length})</button>
        `
    }else{
        btnDelete.innerHTML=``;
    }
}
showData();


// delete column

function deleteData(i){
    datapro.splice(i,1)   //delete from array
    localStorage.product=JSON.stringify(datapro) //delete from local storage
    showData() //call show data method to update the html with the deleted data
}


// delete all data

function deleteAll(){
    localStorage.clear;
    datapro.splice(0); //clear from 0 to end
    showData()
}


//update data
function updataData(i){
    
}





