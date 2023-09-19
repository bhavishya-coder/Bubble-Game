var timer = 60;
    var score = 0;
    var rn = 0;
    function makebubble(){
        var clutter = "";
    for(var i=1;i<=110;i++){
        var r = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${r}</div>`;
     }
    document.querySelector("#pbtm").innerHTML = clutter;
    }
    function runtimer(){
       var time = setInterval(function(){
            if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
            }else{
                clearInterval(time);
                document.querySelector("#pbtm").innerHTML = `<h2>Game Over!!<h2>`
            }

        },1000)
    }
    function getnewhit(){
         rn = Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent = rn;
    }
    function increasescore(){
        score += 10;
        document.querySelector("#scoreval").textContent=score;
    }
    
    document.querySelector("#pbtm").addEventListener("click",function(dets){
        var clickednum = dets.target.textContent;
        if(clickednum==rn){
           increasescore();
           makebubble();
           getnewhit(); 
        }
    })
    makebubble();
    runtimer();
    getnewhit();