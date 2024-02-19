
function getdata(){
    const content = document.getElementById("content");
    const url =  "http://localhost:3000/products";

    fetch(url).then( data => {
        return data.json();
})
.then( dataJson =>{
    console.log(dataJson);
    dataJson.forEach( item  =>{
        const listItem = document.createElement("li");
        listItem.textContent=item.name;
        const  b =document.createElement('button');
        b.textContent = "Détails";
        b.className="btn btn-primary";
        listItem.appendChild(b);
        content.appendChild(listItem) ;

} );

});
}


function settable(){
    const content = document.getElementById("contenttable");
    const url =  "http://localhost:3000/products";

    fetch(url).then( data => {
        return data.json();
})
.then( dataJson =>{
    console.log(dataJson);
    dataJson.forEach( item  =>{
        const trtable = document.createElement("tr");
        const tdname = document.createElement("td");
        const tdprice = document.createElement("td");
        const tddescription = document.createElement("td");

        tdname.textContent=item.name;
        tdprice.textContent=item.price;
        tddescription.textContent=item.description;

        trtable.appendChild(tdname);
        trtable.appendChild(tdprice);
        trtable.appendChild(tddescription);

        content.appendChild(trtable);
} );

});
}
