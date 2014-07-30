search = function(text){
  $('#search-results').html("<div></div>");
  var arr = $.grep(list, function(e){ return e.keyword == text;});
   $.each(arr, function(index,element){

   	var row = $("<div></div>").addClass("row");

    var name = element.member;
    var id = element.id;
    var keyword = element.keyword;
    var link = "<a href='#' data-reveal-id='"+id+"'>"+name+"</a>";
    var keyword_column = $("<div></div>").addClass("large-6 columns").append(keyword);
   	var member_column = $("<div></div>").addClass("large-6 columns").append(link);
   	row.append(keyword_column);
   	row.append(member_column);

   	$('#search-results').append(row);
  }); 
   $("#search-results-row").fadeIn("slow");
}


$(document).ready(function(){
	//retrieve data in an array from the directory listings
	list = Array();
 	$(".directory-items li span").each(function(index,element){
 		var member = $(element).data().member;
 		var id = $(element).data().id;
 		var keyword = $(element).data().keyword; //should this be forced lowercase
 		list.push({member: member, id: id, keyword: keyword});
 	});

   $("#search-results-row").hide();

   //add a click event to the search keywords box
   $("#search-keywords").on('click', function(){
   		var text = $("#keywords-text").val();
   		search(text);
   	});
});