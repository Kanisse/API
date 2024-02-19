
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
        const trtable = content.createElement("tr");
        const tdname = content.createElement("td");
        const tdprice = content.createElement("td");
        const tddescription = content.createElement("td");

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
