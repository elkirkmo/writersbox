$.fn.wordCount = function(params)
{
   var p =  {
   counterElement:"display_count"
   };
  var total_words;

  if(params) {
      $.extend(p, params);
 }

  //for each keypress function on text areas
 this.keypress(function()
  {
    total_words=this.value.split(/[\s\.\?]+/).length;
   $('#'+p.counterElement).html(total_words);
  });
};

function openPopup() {
    var left = ($(window).width()/2)-(200/2),
         top = ($(window).height()/2)-(150/2),
         width = screen.availWidth,
         height = screen.availHeight;
         pop = window.open("http://localhost:8888/wordcount/writersbox.html", "popup", "width="+width+", height="+height+", top="+top+", left="+left+", location=no");
}

  window.onbeforeunload = confirmExit;
    function confirmExit() {
        return "You have attempted to leave this page. Are you sure?";
    }

$(document).ready(function(){
	$("textarea").hide();
	$("h2, h3").hide();
	
	$("a.enter").click(function(e){
	openPopup();
		});
	
	$("a.next").click(function(e){
	var wordCount = $(".wordcount").val();
		e.preventDefault();
		
		$(this).hide();
		$("input").hide();
		$("h2 span#word_count").html(wordCount);
		$("textarea").show();
		$("h2").show();
		$(document).keypress(function(){
		if (parseInt($("h2 span#word_count").html())<= parseInt($("h2 span#display_count").html())){
		$("h3").show();
		}
		});
	});
	
	$('textarea').bind("paste",function(e) {
      e.preventDefault();
      alert("trying to paste, eh?");
  });
    
    $('textarea').wordCount();  
	
}); //end ready();