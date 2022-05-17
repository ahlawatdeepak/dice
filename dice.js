function rollDice(){
        
    var p1=document.getElementById("member-1")
    p1.textContent=Math.floor(((Math.random()*6)+1))
   
   var p2=document.getElementById("member-2")
   p2.textContent=Math.floor(((Math.random()*6)+1))

    var p3=document.getElementById("member-3")
    p3.textContent=Math.floor(((Math.random()*6)+1))

   var win=document.getElementById("winner")
    
  if(p1.textContent>p2.textContent && p1.textContent>p3.textContent){
      win.textContent=p1.textContent
      p1.style.backgroundColor="green"
      if(p2.textContent>p3.textContent){
          p2.style.backgroundColor="yellow"
          p3.style.backgroundColor="red"
      }
      else{
          p3.style.backgroundColor="yellow"
          p2.style.backgroundColor="red"
      }
      
  }

  else if(p2.textContent>p1.textContent && p2.textContent>p3.textContent){
      win.textContent=p2.textContent
      p2.style.backgroundColor="green"
      if(p1.textContent>p3.textContent){
          p1.style.backgroundColor="yellow"
          p3.style.backgroundColor="red"
      }
      else{
          p3.style.backgroundColor="yellow"
          p1.style.backgroundColor="red"
      }
      
  }
  else if(p3.textContent>p2.textContent && p3.textContent>p1.textContent){
      win.textContent=p3.textContent
      p3.style.backgroundColor="green"
      if(p2.textContent>p3.textContent){
          p2.style.backgroundColor="yellow"
          p1.style.backgroundColor="red"
      }
      else{
          p1.style.backgroundColor="yellow"
          p2.style.backgroundColor="red"
      }
      
  }
  else{
      p1.style.backgroundColor="blue"
      p2.style.backgroundColor="blue"
      p3.style.backgroundColor="blue"

  }
}