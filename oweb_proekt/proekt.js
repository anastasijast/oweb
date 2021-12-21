function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function komentar1(){
    var x = document.getElementById("com1");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("kom1").className="fas fa-comment";
    } else {
      x.style.display = "none";
      document.getElementById("kom1").className="fal fa-comment";
    }
}
function komentar2(){
    var x = document.getElementById("com2");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("kom2").className="fas fa-comment";
    } else {
      x.style.display = "none";
      document.getElementById("kom2").className="fal fa-comment";
    }
}
function komentar3(){
    var x = document.getElementById("com3");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("kom3").className="fas fa-comment";
    } else {
      x.style.display = "none";
      document.getElementById("kom3").className="fal fa-comment";
    }
}
function komentar4(){
    var x = document.getElementById("com4");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("kom4").className="fas fa-comment";
    } else {
      x.style.display = "none";
      document.getElementById("kom4").className="fal fa-comment";
    }
}
function komentar5(){
    var x = document.getElementById("com5");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("kom5").className="fas fa-comment";
    } else {
      x.style.display = "none";
      document.getElementById("kom5").className="fal fa-comment";
    }
}
function komentar6(){
    var x = document.getElementById("com6");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("kom6").className="fas fa-comment";
    } else {
      x.style.display = "none";
      document.getElementById("kom6").className="fal fa-comment";
    }
}
function like1(){
    var x=document.getElementById("srce1");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    document.getElementById("lajk1").innerHTML++;
}
function like2(){
    var x=document.getElementById("srce2");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    document.getElementById("lajk2").innerHTML++;
}
function like3(){
    var x=document.getElementById("srce3");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    document.getElementById("lajk3").innerHTML++;
}
function like4(){
    var x=document.getElementById("srce4");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    document.getElementById("lajk4").innerHTML++;
}
function like5(){
    var x=document.getElementById("srce5");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    document.getElementById("lajk5").innerHTML++;
}
function like6(){
    var x=document.getElementById("srce6");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    document.getElementById("lajk6").innerHTML++;
}
function postiraj1(){
    var x=document.getElementById("tekst_kom1").value;
    const d = new Date();
    document.getElementById("site_kom1").innerHTML+="<p class='cel'>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
}
function pokazi_kom1(){
    var x=document.getElementById("site_kom1");
    if(x.style.display==="none"){
        x.style.display="block";
        document.getElementById("skrij_kom1").innerHTML="Hide Comments";
    }
    else{
        x.style.display="none";
        document.getElementById("skrij_kom1").innerHTML="Show Comments";
    }
}
function postiraj2(){
    var x=document.getElementById("tekst_kom2").value;
    const d = new Date();
    document.getElementById("site_kom2").innerHTML+="<p class='cel'>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
}
function pokazi_kom2(){
    var x=document.getElementById("site_kom2");
    if(x.style.display==="none"){
        x.style.display="block";
        document.getElementById("skrij_kom2").innerHTML="Hide Comments";
    }
    else{
        x.style.display="none";
        document.getElementById("skrij_kom2").innerHTML="Show Comments";
    }
}
function postiraj3(){
    var x=document.getElementById("tekst_kom3").value;
    const d = new Date();
    document.getElementById("site_kom3").innerHTML+="<p class='cel'>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
}
function pokazi_kom3(){
    var x=document.getElementById("site_kom3");
    if(x.style.display==="none"){
        x.style.display="block";
        document.getElementById("skrij_kom3").innerHTML="Hide Comments";
    }
    else{
        x.style.display="none";
        document.getElementById("skrij_kom3").innerHTML="Show Comments";
    }
}
function postiraj4(){
    var x=document.getElementById("tekst_kom4").value;
    const d = new Date();
    document.getElementById("site_kom4").innerHTML+="<p class='cel'>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
}
function pokazi_kom4(){
    var x=document.getElementById("site_kom4");
    if(x.style.display==="none"){
        x.style.display="block";
        document.getElementById("skrij_kom4").innerHTML="Hide Comments";
    }
    else{
        x.style.display="none";
        document.getElementById("skrij_kom4").innerHTML="Show Comments";
    }
}
function postiraj5(){
    var x=document.getElementById("tekst_kom5").value;
    const d = new Date();
    document.getElementById("site_kom5").innerHTML+="<p class='cel'>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
}
function pokazi_kom5(){
    var x=document.getElementById("site_kom5");
    if(x.style.display==="none"){
        x.style.display="block";
        document.getElementById("skrij_kom5").innerHTML="Hide Comments";
    }
    else{
        x.style.display="none";
        document.getElementById("skrij_kom5").innerHTML="Show Comments";
    }
}
function postiraj6(){
    var x=document.getElementById("tekst_kom6").value;
    const d = new Date();
    document.getElementById("site_kom6").innerHTML+="<p class='cel'>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
}
function pokazi_kom6(){
    var x=document.getElementById("site_kom6");
    if(x.style.display==="none"){
        x.style.display="block";
        document.getElementById("skrij_kom6").innerHTML="Hide Comments";
    }
    else{
        x.style.display="none";
        document.getElementById("skrij_kom6").innerHTML="Show Comments";
    }
}
function golema1(){
    var div=document.getElementById("div_slika1");
    var slika_m=document.getElementById("sl_m1");
    var slika_g=document.getElementById("sl_g1");
    div.style.display="block";
    slika_g.src=slika_m.src;
    var span = document.getElementsByClassName("close1")[0];
    span.onclick = function() { 
        div.style.display = "none";
    }
}
function golema2(){
    var div=document.getElementById("div_slika2");
    var slika_m=document.getElementById("sl_m2");
    var slika_g=document.getElementById("sl_g2");
    div.style.display="block";
    slika_g.src=slika_m.src;
    var span = document.getElementsByClassName("close2")[0];
    span.onclick = function() { 
        div.style.display = "none";
    }
}
function golema3(){
    var div=document.getElementById("div_slika3");
    var slika_m=document.getElementById("sl_m3");
    var slika_g=document.getElementById("sl_g3");
    div.style.display="block";
    slika_g.src=slika_m.src;
    var span = document.getElementsByClassName("close3")[0];
    span.onclick = function() { 
        div.style.display = "none";
    }
}
function golema4(){
    var div=document.getElementById("div_slika4");
    var slika_m=document.getElementById("sl_m4");
    var slika_g=document.getElementById("sl_g4");
    div.style.display="block";
    slika_g.src=slika_m.src;
    var span = document.getElementsByClassName("close4")[0];
    span.onclick = function() { 
        div.style.display = "none";
    }
}
function golema5(){
    var div=document.getElementById("div_slika5");
    var slika_m=document.getElementById("sl_m5");
    var slika_g=document.getElementById("sl_g5");
    div.style.display="block";
    slika_g.src=slika_m.src;
    var span = document.getElementsByClassName("close5")[0];
    span.onclick = function() { 
        div.style.display = "none";
    }
}
function golema6(){
    var div=document.getElementById("div_slika6");
    var slika_m=document.getElementById("sl_m6");
    var slika_g=document.getElementById("sl_g6");
    div.style.display="block";
    slika_g.src=slika_m.src;
    var span = document.getElementsByClassName("close6")[0];
    span.onclick = function() { 
        div.style.display = "none";
    }
}
function recept1(){
    var x=document.getElementById("strelka-desno1");
    var y=document.getElementById("tekst_r1");
    if(y.style.display==="none"){
        x.className="fal fa-angle-double-down";
        x.style.color="gray";
        document.getElementById("show_r1").innerHTML="Healthy Pancakes";
        y.style.display="block";
    }
    else{
        x.className="fal fa-angle-double-right";
        x.style.color="gray";
        document.getElementById("show_r1").innerHTML="Show Recipe";
        y.style.display="none";
    }
}
function recept2(){
    var x=document.getElementById("strelka-desno2");
    var y=document.getElementById("tekst_r2");
    if(y.style.display==="none"){
        x.className="fal fa-angle-double-down";
        x.style.color="gray";
        document.getElementById("show_r2").innerHTML="Buttery Garlic Herb Chicken With Zucchini";
        y.style.display="block";
    }
    else{
        x.className="fal fa-angle-double-right";
        x.style.color="gray";
        document.getElementById("show_r2").innerHTML="Show Recipe";
        y.style.display="none";
    }
}
function recept3(){
    var x=document.getElementById("strelka-desno3");
    var y=document.getElementById("tekst_r3");
    if(y.style.display==="none"){
        x.className="fal fa-angle-double-down";
        x.style.color="gray";
        document.getElementById("show_r3").innerHTML="Caesar Salad";
        y.style.display="block";
    }
    else{
        x.className="fal fa-angle-double-right";
        x.style.color="gray";
        document.getElementById("show_r3").innerHTML="Show Recipe";
        y.style.display="none";
    }
}
function postiraj(){
    var srci=document.getElementById("myFile").value;
    const Niza=srci.split("\\");
    var source="./images/"+Niza[Niza.length-1];
   document.getElementById("blog_sliki").innerHTML+="<li>"+"<div class='blog_div' id='novo'>"+"<img src="+source+" class='sl2'>"+"</div>"+"</li>";
}
function postiraj_recept(){
    var x=document.getElementById("recept").value;
    document.getElementById("novo").innerHTML+="<div class='recipe'>"+"<p style='background-color: white'>"+x+"</p>"+"</div>";
}
function pokazi_impresii(){
    var el=document.getElementById("impresii");
    el.style.display="block";
    var new_com=document.createElement("div");
    el.appendChild(new_com);
    new_com.className="prebaraj";
    new_com.style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    new_com.style.padding="0 20px";
    new_com.style.backgroundColor="white";
    new_com.style.color="black";
    new_com.style.borderRadius="15px";
    var ime=document.getElementById("ime").value;
    var email=document.getElementById("email").value;
    var tekst=document.getElementById("tekst").value;
    var ocenka=document.getElementById("ocenka").value;
    new_com.innerHTML+="<p><b>Name:"+ime+"</b></p>"+"<p>Email:"+email+"</p>"+"<p>"+tekst+"</p>"+"<p> Rating:"+ocenka+"</p>";

}
function hide_blog(){
    document.getElementById("impresii").style.display="none";
}