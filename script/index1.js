
const lodDataFetch =()=>{
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
    .then((res)=> res.json())
    .then(json=> displayLasion(json.data))
}

const displayLasion=(jsonData)=>{
const lesionContainer = document.getElementById("lesion-container")
 lesionContainer.innerHTML="";
jsonData.forEach(datas => {
    console.log(datas)
   const btnDiv = document.createElement("div")
  
   btnDiv.innerHTML=`
    <button class="btn btn-outline btn-primary"> <span><i class="fa-brands fa-leanpub"></i></span>Lesson-${datas.level_no}</button>
   `;
     lesionContainer.append(btnDiv)
    
});

}

lodDataFetch();


