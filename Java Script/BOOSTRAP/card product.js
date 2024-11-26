let item={
    id:101,
    imgUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSRfe3U3sQgFpe9n-MPInxsAR49B1kZo8k89pxbC_SS2wQflf6iEvP-8hFo624NMLXmcILBaCeb9lNzlHirrCwJtmKc8YBKJP77uBCiUxv_Oi8a7zgwd3V7_5_I_rhXUutOGDwbwDw&usqp=CAc",
    name:"Iphone",
    price:70000,
    qty:1
};
let htmlCode=`<tr>
            <td>${item.id}</td>
                <td>
                    <img src="${item.imgUrl}" alt=""width="30" height="30"/>
                </td>
                <td>${item.name}</td>
                <td>${item.price}&#8377;</td>
                <td>
                    <i class="bi bi-dash-circle-fill"
                    onclick="decQty();"></i>
                    <span id="qty-count">${item.qty}</span>
                    <i class="bi bi-plus-circle-fill"
                    onclick="incQty();"></i>
                </td>
                <td><span id="total">${item.price*item.qty}</span>&#8377;</td>
            </tr>`;
let tBody=document.getElementById('display-data');
tBody.innerHTML=htmlCode;
let qtyTag=document.getElementById('qty-count');
let totalTag=document.getElementById('total');

function incQty()
{
    item.qty++;
    qtyTag.innerText=item.qty;
    totalTag.innerText=(item.price*item.qty);
}

function decQty()
{
    if(item.qty>1)
    {
        item.qty--;
        qtyTag.innerText=item.qty;
        totalTag.innerText=(item.price*item.qty);
    }
    else
    {
      qty.Tag.innerText=item.qty;
      totalTag.innerText=(item.price*item.qty);  
    }
}
            

