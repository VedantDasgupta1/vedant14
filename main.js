pizza_mania_array =[];
function submit() { var name_1 = document.getElementById("pizza_mania_1").value;
 var name_2 = document.getElementById("pizza_mania_2").value; 
 var name_3 = document.getElementById("pizza_mania_3").value; 
 var name_4 = document.getElementById("pizza_maina_4").value; 
 Pizza_mania_.push(name_1); 
 pizza_mania_array.push(name_2);
  pizza_mania_array.push(name_3); 
  pizza_mania_array.push(name_4);
   console.log(pizza_mania_array);
    document.getElementById("display_name").innerHTML = pizza_mania_array; 
  document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block"; }
    function sorting()
     { pizza_mania_array.sort(); 
       console.log(pizza_mania_array); 
        document.getElementById("display_name").innerHTML = pizza_mania_array;
     }
        