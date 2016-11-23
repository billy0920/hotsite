$(document).ready(function(){
	data = $.ajax("data.json",{"async":false,"dataType":"json"});
	sales = data.responseJSON;
	for(var message in sales){
		console.log(message);
		var sale = sales[message];
		console.log(sales[message].content);
				
		$("#app").append("<div class='col-xs-6 col-lg-4'>"+
              "<h2>"+sale.mingzi+"</h2>"+
              "<p>"+sale.jieshao+"</p>" +
			  "<img class='b-lazy' width='100%' src='"+sale.tupian+"'></img>"+
			  "<div class='price' style='width:100%;background-color:deeppink'>"+
			  "<span class='text' style='margin-left: 5px; font-size: 12px;color: #ffe4ed;'>券后价&nbsp;￥<span class='price'>"+sale.quanhoujia+"</span></span>"+
			  "<span class='text' style='margin-left: 15px; font-size: 12px;color: #ffe4ed;'><del>原价&nbsp;￥"+sale.yuanjia+" </del></span></div>"+
              "<p><a class='btn btn-default' target='_blank' href='"+sale.lingquan+"' role='button'>领券</a>"+
			  "<a class='btn btn-default' target='_blank' href='"+sale.xiadan+"' role='button'>下单</a></p>"+
              "</div>")
	}
});
