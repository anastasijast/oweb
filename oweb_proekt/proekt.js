let p;
function person(){
    var pom1=getSavedValuePost("lajkovi1");
    document.getElementById("lajk1").innerHTML=pom1;
    pom1=getSavedValuePost("lajkovi2");
    document.getElementById("lajk2").innerHTML=pom1;
    pom1=getSavedValuePost("lajkovi3");
    document.getElementById("lajk3").innerHTML=pom1;
    pom1=getSavedValuePost("lajkovi4");
    document.getElementById("lajk4").innerHTML=pom1;
    pom1=getSavedValuePost("lajkovi5");
    document.getElementById("lajk5").innerHTML=pom1;
    pom1=getSavedValuePost("lajkovi6");
    document.getElementById("lajk6").innerHTML=pom1;
    p=prompt("Please enter your Email!");
    if(p==null){
        p="guest";
    }
    document.getElementById("first").innerHTML+=p;

}
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
    var pom1=getSavedValuePost("lajkovi1");
    pom1=++document.getElementById("lajk1").innerHTML;
    localStorage.setItem("lajkovi1",pom1);
}
function like2(){
    var x=document.getElementById("srce2");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    var pom1=getSavedValuePost("lajkovi2");
    pom1=++document.getElementById("lajk2").innerHTML;
    localStorage.setItem("lajkovi2",pom1);
}
function like3(){
    var x=document.getElementById("srce3");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    var pom1=getSavedValuePost("lajkovi3");
    pom1=++document.getElementById("lajk3").innerHTML;
    localStorage.setItem("lajkovi3",pom1);
}
function like4(){
    var x=document.getElementById("srce4");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    var pom1=getSavedValuePost("lajkovi4");
    pom1=++document.getElementById("lajk4").innerHTML;
    localStorage.setItem("lajkovi4",pom1);
}
function like5(){
    var x=document.getElementById("srce5");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    var pom1=getSavedValuePost("lajkovi5");
    pom1=++document.getElementById("lajk5").innerHTML;
    localStorage.setItem("lajkovi5",pom1);
}
function like6(){
    var x=document.getElementById("srce6");
    x.className="fas fa-heart";
    setTimeout(function(){x.className="far fa-heart";}, 500);
    var pom1=getSavedValuePost("lajkovi6");
    pom1=++document.getElementById("lajk6").innerHTML;
    localStorage.setItem("lajkovi6",pom1);
}
function getSavedValuePost(v) {
    if (!localStorage.getItem(v)) {
        localStorage.setItem(v, "");
        return "";
    }
    return localStorage.getItem(v);
  }
  var pom1;
  //ke ja koristam za localStorage
function postiraj1(){
    var x=document.getElementById("tekst_kom1").value;
    const d = new Date();
    var pom="<p class='cel'>"+p+":<br>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
    document.getElementById("site_kom1").innerHTML+=pom;
    pom1=getSavedValuePost("komentari");
    pom1=pom1+pom;
    localStorage.setItem("komentari",pom1);
}
function pokazi_kom1(){
    var x=document.getElementById("site_kom1");
    if(x.style.display==="none"){
        x.style.display="block";
        var pom1=getSavedValuePost("komentari");
        x.innerHTML+=pom1;
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
    var pom="<p class='cel'>"+p+":<br>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
    document.getElementById("site_kom2").innerHTML+=pom;
    pom1=getSavedValuePost("komentari2");
    pom1=pom1+pom;
    localStorage.setItem("komentari2",pom1);}
function pokazi_kom2(){
    var x=document.getElementById("site_kom2");
    if(x.style.display==="none"){
        x.style.display="block";
        var pom1=getSavedValuePost("komentari2");
        x.innerHTML+=pom1;
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
    var pom="<p class='cel'>"+p+":<br>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
    document.getElementById("site_kom3").innerHTML+=pom;
    pom1=getSavedValuePost("komentari3");
    pom1=pom1+pom;
    localStorage.setItem("komentari3",pom1);}
function pokazi_kom3(){
    var x=document.getElementById("site_kom3");
    if(x.style.display==="none"){
        x.style.display="block";
        document.getElementById("skrij_kom3").innerHTML="Hide Comments";
        var pom1=getSavedValuePost("komentari3");
        x.innerHTML+=pom1;
    }
    else{
        x.style.display="none";
        document.getElementById("skrij_kom3").innerHTML="Show Comments";
    }
}
function postiraj4(){
    var x=document.getElementById("tekst_kom4").value;
    const d = new Date();
    var pom="<p class='cel'>"+p+":<br>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
    document.getElementById("site_kom4").innerHTML+=pom;
    pom1=getSavedValuePost("komentari4");
    pom1=pom1+pom;
    localStorage.setItem("komentari4",pom1);}
function pokazi_kom4(){
    var x=document.getElementById("site_kom4");
    if(x.style.display==="none"){
        x.style.display="block";
        var pom1=getSavedValuePost("komentari4");
        x.innerHTML+=pom1;
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
    var pom="<p class='cel'>"+p+":<br>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
    document.getElementById("site_kom5").innerHTML+=pom;
    pom1=getSavedValuePost("komentari5");
    pom1=pom1+pom;
    localStorage.setItem("komentari5",pom1);}
function pokazi_kom5(){
    var x=document.getElementById("site_kom5");
    if(x.style.display==="none"){
        x.style.display="block";
        var pom1=getSavedValuePost("komentari5");
        x.innerHTML+=pom1;
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
    var pom="<p class='cel'>"+p+":<br>"+x+"<p class='data'>"+d.toLocaleTimeString()+"</p>"+"</p>";
    document.getElementById("site_kom6").innerHTML+=pom;
    pom1=getSavedValuePost("komentari6");
    pom1=pom1+pom;
    localStorage.setItem("komentari6",pom1);}
function pokazi_kom6(){
    var x=document.getElementById("site_kom6");
    if(x.style.display==="none"){
        x.style.display="block";
        var pom1=getSavedValuePost("komentari6");
        x.innerHTML+=pom1;
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
    /*
    ova za postiranje na slika, ograniceno e da bide od 1 folder
    ama moze da se stavaat poveke edna pod druga:)
    */
   var srci=document.getElementById("myFile").value;
   const Niza=srci.split("\\");
    var source="./images/"+Niza[Niza.length-1];
   document.getElementById("blog_sliki").innerHTML+="<li>"+"<div class='blog_div' id='novo'>"+"<img src="+source+" class='sl2'>"+"</div>"+"</li>";
}
function postiraj_recept(){
    var x=document.getElementById("recept").value;
    $("div.blog_div:last").append("<div class='recipe'>"+"<p style='background-color: white'>"+x+"</p>"+"</div>");
}
function pokazi_impresii(){
    var el=document.getElementById("impresii");
    // el.style.display="block";
    var ime=document.getElementById("ime").value;
    var email=document.getElementById("email").value;
    var tekst=document.getElementById("tekst").value;
    var ocenka=document.getElementById("ocenka").value;
    // pom1=getSavedValuePost("oceni");
    // el.innerHTML+=pom1;
    if(p=="guest"){
        var pom="<div class='new_com'>"+"<p><b>"+email+"</b></p>"+"<hr>"+"<p>Name:"+ime+"</p>"+"<p>"+tekst+"</p>"+"<p> Rating:"+ocenka+"</p>"+"</div>";
        el.innerHTML+=pom;
        pom1=pom1+pom;
        localStorage.setItem("oceni",pom1);
        //dokolku na pocetok ne pisal email, ke pise sega.
    }
    else{
        var pom="<div class='new_com'>"+"<p><b>"+p+"</b></p>"+"<hr>"+"<p>Name:"+ime+"</p>"+"<p>"+tekst+"</p>"+"<p> Rating:"+ocenka+"</p>"+"</div>";
        //ako na pocetok pisal email, vo poleto ke se vpise toj sto go pisal na pocetok a toa sto ke go pise vo poleto email ke se ignorira:)
        el.innerHTML+=pom;
        pom1=pom1+pom;
        localStorage.setItem("oceni",pom1);
    }

}
function hide_blog(){
    var x=document.getElementById("impresii");
    if(x.style.display==="none"){
        x.style.display="block";
        var pom1=getSavedValuePost("oceni");
        x.innerHTML+=pom1;
        document.getElementById("hide").innerHTML="Hide";
        $("#search").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("div.new_com").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)    });
            })
    }
    else{
        x.style.display="none";
        document.getElementById("hide").innerHTML="Show";
    }
}