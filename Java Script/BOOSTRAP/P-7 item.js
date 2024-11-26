let item_1={id:101,img:"BOOSTRAP/download (1).jpg",name:"Laptop",price:210000,qty:2};
let item_2={id:102,img:"BOOSTRAP/download (2).jpg",name:"Smart watch",price:120000,qty:4};
let item_3={id:103,img:"BOOSTRAP/download.jpg",name:"Iphone",price:28900,qty:3};
let item_4={id:104,img:"BOOSTRAP/download (3).jpg",name:"Airpods",price:50999,qty:4};
let items=[item_1,item_2,item_3,item_4];
function displayProducts(products)
{
    let eachItem='';
    products.forEach(function(item)
    {
        eachItem+= `div class="col-md-3">
            <div class="card">
                <div class="card-header">
                    <img src="${item.img}" alt="" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h2>${item.name}</h2>
                    <h4>${item.price} &#8377;</h4>
                    <small class="text-success">stock is available</small>
                    <h3>
                        <i class="bi bi-dash-circle-fill" onclick="decQty(${item.id})"></i>
                        <span id="qty-count">${item.qty}</span>
                        <i class="bi bi-plus-circle-fill" onclick="incQty(${item.id})"></i>
                    </h3>
                </div>
            </div>`;
                
    });
    document.querySelector('#products-data').innerHTML=eachItem;
}
displayProducts(items);

function incQty(id)
{
    let updatedItems=[];
    for (let item of items)
    {
        if(item.id==id)
        {
            let obj={...item,qty:++item.qty};
            updatedItems.push(obj);
        }
        else
        {
            updatedItems.push(item);

        }
    }
    items=updatedItems;
    displayProducts(updatedItems);
}
function decQty(id)
{
    let updatedItems=[];
    for (let item of items)
    {
        if(item.id===id)
        {
            let obj={...item,qty:--item.qty};
            updatedItems.push(obj);
        }
        else
        {
            updatedItems.push(item);

        }
    }
    items=updatedItems;
    displayProducts(updatedItems);
}



