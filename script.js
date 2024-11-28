var time=120;
var score=0;
var hs=0;

function MakeBubble()
{
    var clutter=" ";
   for(var i=1; i<=175;i++)
  {   
    var rn= Math.floor(Math.random()*10)
    var clutter = clutter + ` <div id="bubble">${rn}</div> ` ;
  }

    document.querySelector("#pbottom").innerHTML= clutter;
}

function newHit()
{
    hs=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hs;
}


function runtimer()
{
    var timee=setInterval(function()
    {
        if(time>0)
        {
            time--;
            document.querySelector("#timerval").textContent=time;
        }
        else
        {
           clearInterval(timee);
           document.querySelector("#pbottom").innerHTML=`<h1>Game Over </h1>`;
        }

    } ,1000 ) ;
}


function scoreIncrease()
{
   score += 10;
   document.querySelector("#scoreVal").textContent=score;
}

document.querySelector("#pbottom").addEventListener("click",function(details)
{
   var clicknum = Number(details.target.textContent);    
   if(clicknum === hs)
   {
     scoreIncrease();
     MakeBubble();
     newHit();
   }
});


newHit();
runtimer();
MakeBubble();
