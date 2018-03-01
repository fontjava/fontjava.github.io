function shared() {
 var x = document.getElementById("aksaraLokal").value;
var y = "bbmi://api/share?id=username&message=";
var z = y + x;
 document.location = z;
} 
function share() {
 var x = document.getElementById("aksaraLokal").value;
var y = "whatsapp://send?abid=username&text=";
var z = y + x;
 document.location = z;
}    
function sms() {
 var x = document.getElementById("aksaraLokal").value;
var y = "sms://send?id=username&body=";
var z = y + x;
 document.location = z;
}
function mail() {
 var x = document.getElementById("aksaraLokal").value;
var y = "mailto:?subject=L.K.J%20by%20SNJ%20GROUP&body=";
var z = y + x;
 document.location = z;
} 
function hideBanner(){$("#iBanner").slideUp("slow");goPageTop();$("#hide_banner").text("Show Top Banner")}function get_back_pane(){var a=document.getElementById("ListBox_Types_fonts");var b=a.length;var c=a.selectedIndex;if(c>0)c-=1;else c=b-1;a.selectedIndex=c;var d=a.options[c].value;update_fonts(d)}function get_next_pane(){var a=document.getElementById("ListBox_Types_fonts");var b=a.length;var c=a.selectedIndex;if(c<b-1)c+=1;else c=0;a.selectedIndex=c;var d=a.options[c].value;update_fonts(d)}function get_active_language(){var a=document.getElementById("ListBox_Languages");var b=a.selectedIndex;var c=a.options[b].value;return c}function update_fonts(a){$("#aksaraLokal").css({"font-family":a})}


$("#font_plus").live("click",function(){if(_font_size<=40){_font_size+=2;$("#aksaraLokal").css({"font-size":_font_size})}});$("#font_minus").live("click",function(){if(_font_size>=13){_font_size-=2;$("#aksaraLokal").css({"font-size":_font_size})}});$("#clear_btn").live("click",function(){_editor="";$("#preview").val("");updateCharCount()});$("#learning_check").live("click",function(a){LEARNING=$(this).attr("checked");animateKeyboard(1)})
   