let serialCount = 1;

document.getElementById('submit-btn').addEventListener('click',function (){


    const inputField = document.querySelector("textarea").value;

    const container  = document.getElementById('review');

    const p = document.createElement('p');

    p.innerText = serialCount + "." + inputField;

    container.appendChild(p);

    serialCount++;

    document.querySelector("textarea").value = '';
})