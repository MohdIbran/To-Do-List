function fun1() {
   let list=document.createElement("li");
   let span=document.createElement("span");
   
   span.textContent = document.querySelector("#inputtask").value;
   document.querySelector("#inputtask").value = "";
   list.appendChild(span);
   let ulist = document.querySelector("#tasklist");
   ulist.appendChild(list);

   let completeBtn = document.createElement("button");
   completeBtn.textContent = "Done";
   list.appendChild(completeBtn);

   completeBtn.addEventListener("click", function() {
      span.style.textDecoration = "line-through";  // Strike effect
   });
   
   let deletebtn=document.createElement("button");
   deletebtn.textContent ="Delete";
   list.appendChild(deletebtn);
   deletebtn.addEventListener("click",function() {
      list.remove();
       })
       let reset= document.createElement("button");
      reset.textContent = "Edit";
      list.appendChild(reset);
      reset.addEventListener("click",function() {
         let keey = prompt("Enter your New Task");
         if(keey){
            span.textContent = keey;

         }
         
     
      
   })

  


   

}