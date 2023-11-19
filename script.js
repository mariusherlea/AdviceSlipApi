// your code
const btn = document.getElementById("btn-advice");
const adviceId = document.getElementById("advice-id"); 
const adviceContainer = document.querySelector(".advice");

function addAdvise(data1,data2) {
  adviceContainer.textContent = data2;
  adviceId.textContent = data1;
}

async function getDataFromApi() {
  const url = 'https://api.adviceslip.com/advice';

  try {
    const response = await fetch(url);
    const data = await response.json();

    addAdvise(data.slip.id,'"'+data.slip.advice+'"');
    
  } catch (error) {
    console.log("Api error", error);
  }
}

btn.addEventListener("click", getDataFromApi);