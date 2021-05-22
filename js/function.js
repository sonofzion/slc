
sermons = [
   {

       "title" : "Power of thanksgiving",
       "preacher" : "pastor Philip Olubakin",
       "date" : "jan.20",
       "link": "https://drive.google.com/file/d/1WLxCpJbFT6bnNA-FY4_Skfe-1HNENv9V/view?usp=drivesdk"
       
   },
   {
       "title" : "Witnessing with Power2",
       "preacher" : "pastor Philip Olubakin",
       "date" : "August 20",
       "link": "https://drive.google.com/file/d/16KbKdMuHEQ9EWTdBVhB9stI-kDk0tPu_/view?usp=drivesdk"
   },
   {
       "title" : "The person of the Holyspirit2",
       "preacher" : "pastor Philip Olubakin",
       "date" : "August 20",
       "link": "https://drive.google.com/file/d/1XYq-bCPQJEBKIyomD84WDlIMFFy4ma2D/view?usp=drivesdk"
   }
]

localStorage.setItem("sermons", JSON.stringify(sermons))
// get data from  local storage
sermons = JSON.parse(localStorage.getItem("sermons"))
originalSermons = JSON.parse(localStorage.getItem("sermons"))

// Creates new array if none exists in local storage
if (sermons == null) {
    sermons = []
}


function goBack(){
    window.location.reload();
}
  // declaring the search function for part matches
  function searchPart(){
      
    searchInput = document.getElementById("search-box").value.toLowerCase();
    
    sermons = originalSermons.filter(x=>x.title.toLowerCase().includes(searchInput));
    // conditional ternary operator

    (sermons.length <= 1)? document.getElementById("record").innerHTML = `${sermons.length} record found for ${searchInput}`:
    document.getElementById("record").innerHTML = `${sermons.length} records found for ${searchInput}`;
    document.getElementById("back-btn").style.display = "block";

 
        display();
    } 

    function display(){

cont = ''
for(i=0; i<sermons.length; i++)
{
cont += `	<div class="container">
<div class="row"><div class="col-lg-6"><div class="event-item"> <div><div class="ei-img">
<img src="img/event/1.jpg" alt="">
</div><div id="sContainer" class="event-item" >


<strong>Title</strong> : <a href="${sermons[i].link}">${sermons[i].title} </a><br>
<strong>Preacher</strong> : ${sermons[i].preacher} <br>
<strong>Date</strong> : ${sermons[i].date} <br>
</div> </div></div></div></div></div>`
}
document.getElementById("Msg-cont").style.display = "none";
document.getElementById("found").innerHTML = cont
}

// display();       

