 let age=document.querySelector(".age");
let submit= document.querySelector(".submit");
let movie = document.querySelector(".movie");
let result1 = document.querySelector (".result1");
let result2 = document.querySelector (".result2");
let result3 = document.querySelector (".result3");
let result4 = document.querySelector (".result4");



submit.onclick = function() {
  let agevalue = age.value;
  let movievalue = movie.value;
  console.log(agevalue);
  console.log(movievalue);
  
  if (agevalue >= 16 && movievalue === "option1") 
  {result3.style.display= "block";
  }

  else if (agevalue <16 && movievalue === "option1") 
  {result1.style.display= "block";
  }
  else if (agevalue >= 16 && movievalue === "option2") 
  {result4.style.display= "block";
  }
   else if (agevalue <16 && movievalue === "option2") 
  {result2.style.display= "block";
  }  

}