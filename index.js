$(".success").hide();
$(".error").hide();
$("#update_product").hide();

var product = [];
// Taking the values from the user and setting the css of input feild  
$("#add_product").click(()=>{
    var P_skn = $("#product_sku").val();
    var P_name = $("#product_name").val();
    var P_price = $("#product_price").val();
    var P_quantity =$("#product_quantity").val();
var html="";
    if(P_skn == "" ){
        $("#product_sku").css({"border": "1px solid red"});
        html="Product SKN is null please enter some text";
    }else if(P_name == ""){
          $("#product_sku").css({"border": "1px solid black"});
        $("#product_name").css({"border": "1px solid red"});
        html="Product Name is null please enter some text";
    } else if(P_price == ""){
         $("#product_sku").css({"border": "1px solid black"});
         $("#product_name").css({"border": "1px solid black"});
        $("#product_price").css({"border": "1px solid red"});
        html="Product Price is null please enter some text";
    } else if (P_quantity == ""){
         $("#product_sku").css({"border": "1px solid black"});
         $("#product_price").css({"border": "1px solid black"});
         $("#product_name").css({"border": "1px solid black"});
        $("#product_quantity").css({"border": "1px solid red"});
        
        html="Product Quantity is null please enter some text";
    } else{
        $("#product_quantity").css({"border": "1px solid black"});
        var data = {
        "sn":P_skn,
        "name":P_name,
        "price":P_price,
        "quantity":P_quantity,
        }
        product.push(data);
        
        $(".success").show();
        setInterval(() => {
            $(".success").hide();
        }, 1000);
        $("#product_sku").val("");
        $("#product_name").val("");
        $("#product_price").val("");
        $("#product_quantity").val("");
        display();
    }
    $("#demo").html(html);
    
    
});

//  creating table header
var table = `<table>
<tr>
    <th>SKU</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Action</th>
</tr>`

//  Displaying input data into table
function display(){
    var row = ""
    product.forEach((element,index) => {
       
        row += `<tr>
        <td>${element.sn}</td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.quantity}</td>
        <td><a href="#" id="${index}" class="edit">Edit</a><a href="#"  class="delete">Delete</a></td>
        </tr>`
    });
    $("#product_list").empty();
    $("#product_list").append(table+row+"</table>");
}

// Delete particular row 
$(document).on('click','.delete',function(){
    console.log("working")
    console.log(this.id)
    $(this).parent('td').parent("tr").remove();
    
})
//  Edit particular row
$(document).on("click", '.edit', function(){
    
    var i = this.id;
    $(this).parent('td').parent("tr").css({"color": "red"});
    var data = product[i];
    
    $("#id").val(`${i}`);
    $("#product_sku").val(`${data.sn}`);
    $("#product_name").val(`${data.name}`);
    $("#product_price").val(`${data.price}`);
    $("#product_quantity").val(`${data.quantity}`);
    $("#update_product").show();
    $("#add_product").hide();
});


// Updating the edited data 
$("#update_product").click(()=>{
    var id = $("#id").val();
  
    var product_update = product[id];
    product_update.sn = $("#product_sku").val();
    product_update.name = $("#product_name").val();
    product_update.price = $("#product_price").val();
    product_update.quantity = $("#product_quantity").val();

 //  Again displaying updated data into table
    display()
    $("#product_sku").val("");
    $("#product_name").val("");
    $("#product_price").val("");
    $("#product_quantity").val("");
    $("#update_product").hide();
    $("#add_product").show();
    
});