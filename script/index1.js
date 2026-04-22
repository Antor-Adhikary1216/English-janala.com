
// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }
// -----------------------------------------------------------------------==>
const lodDataFetch =()=>{
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
    .then((res)=> res.json())
    .then(json=> displayLasion(json.data))
};
const lodeLevel=(id)=>{
    const url2=`https://openapi.programming-hero.com/api/level/${id}`
    fetch (url2)
    .then(res=>res.json())
    .then(data=>{
    dssplyLaverWords(data.data)
    })    
};

const dssplyLaverWords=(word)=>{
const wordContainer=document.getElementById("wrod-container");
 wordContainer.innerHTML="";
 word.forEach(words => {
     console.log(words)
    const crad = document.createElement("div") 
    crad.innerHTML=`
    <div class="prant-card bg-white shadow-md rounded-2xl text-center p-5 w-[350px] h-[250px]">
              <div class="mx-auto space-y-3">
                <h1 class="text-[28px] font-bold">${words.word}</h1>
                <p class="text-[15px] font-medium">Meaning/Pronounciation</p>
                <p  class="text-[28px] text-[#434045]">"${words.meaning} / ${words.pronunciation}"</p>
              </div>
              <div class="flex justify-between items-center   mt-7">
                <button class="bg-gray-100 w-10 h-10 rounded-md cursor-pointer hover:bg-[#1A91FF90]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="bg-gray-100 w-10 h-10 cursor-pointer rounded-md hover:bg-[#1A91FF90]"><i class="fa-solid fa-volume-high"></i></button>
                  
              </div>
            </div>
    `; 
    wordContainer.append(crad)
 });

}

const displayLasion=(jsonData)=>{
const lesionContainer = document.getElementById("lesion-container")
 lesionContainer.innerHTML=""; 
jsonData.forEach(datas => {
    console.log(datas)
   const btnDiv = document.createElement("div")
  
   btnDiv.innerHTML=`
    <button onclick="lodeLevel(${datas.level_no})" class="btn btn-outline btn-primary"> <span><i class="fa-brands fa-leanpub"></i></span>Lesson-${datas.level_no}</button>
   `;
     lesionContainer.append(btnDiv)
    
});

}

lodDataFetch();


