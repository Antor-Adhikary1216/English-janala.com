
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


const removeActive=()=>{
  const remove = document.querySelectorAll(".lesson-btn")
  // console.log(remove)
  remove.forEach(element => {
     element.classList.remove("active")
  });
}

const lodeLevel=(id)=>{
    const url2=`https://openapi.programming-hero.com/api/level/${id}`
    fetch (url2)
    .then(res=>res.json())
    .then(data=>{
      removeActive()
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      // console.log(clickBtn);
      clickBtn.classList.add("active");
    dssplyLaverWords(data.data);
    })  
};

const lodeWordDetelis = (id)=>{
  const url3 =`https://openapi.programming-hero.com/api/word/${id}`;
// console.log(url3);
fetch(url3)
.then((res)=>res.json())
.then(jsonData=>console.log(jsonData))
  
}
// ------------------------------------------
const dssplyLaverWords=(word)=>{
const wordContainer=document.getElementById("wrod-container");
 wordContainer.innerHTML="";
 if(word.length == 0){
 wordContainer.innerHTML=`
  <div class="col-span-full text-center ">
               <img src="assets/alert-error.png" class="mx-auto mt-2">
              <p class="mt-2">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
              <p class=" font-medium text-[25px] cursor-pointer mt-2">নেক্সট Lesson এ যান</p>
            </div>
 `;
  return
 }
 word.forEach(words => {
    //  console.log(words)
    const crad = document.createElement("div") 
    crad.innerHTML=`
    <div class="prant-card bg-white shadow-md rounded-2xl text-center p-4 w-[350px] h-[250px]">
              <div class="mx-auto space-y-3">
                <h1 class="text-[28px] font-bold">${words.word ? words.word :"শব্দটি পাওয়া যায়নি"}</h1>
                <p class="text-[15px] font-medium">Meaning/Pronounciation</p>
                <p  class="text-[28px] text-[#434045]">"${words.meaning ? words.meaning :"অর্থ পাওয়া যায়নি"} 
                / ${words.pronunciation ? words.pronunciation :"উচ্চারণ পাওয়া যায়নি" }"</p>
              </div>
              <div onclick="lodeModal(${words.id})" class="flex justify-between items-center   mt-7">
                <button class="bg-gray-100 w-10 h-10 rounded-md cursor-pointer hover:bg-[#1A91FF90]" ><i class="fa-solid fa-circle-info"></i></button>
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
    // console.log(datas)
   const btnDiv = document.createElement("div")
  
   btnDiv.innerHTML=`
    <button id="lesson-btn-${datas.level_no}" 
     onclick="lodeLevel(${datas.level_no})" class="btn btn-outline btn-primary lesson-btn"> <span><i class="fa-brands fa-leanpub"></i></span>Lesson-${datas.level_no}</button>
   `;
     lesionContainer.append(btnDiv)
    
});

}

lodDataFetch();




