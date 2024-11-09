// // // const title = document.getElementById("title");
// // // // title.innerText = "my Js Power"
// // // // console.log(title.innerText);
// //
// //
// // const title2 = document.querySelector('p');
// // title2.textContent = "I am done by Selector";
// // console.log(p);
//
//
// const items = document.getElementsByClassName('li-items');
// // for (let i = 0; i < items.length; i++) {
// //     const element = items[i];
// //     // console.log(element);
// //     element.style.color = "red";
// //     element.innerText = "আমার খুশি";
// // }
// // console.log(items)
//
// // const myArray = Array.from(items);
// //
// // console.log(myArray);

// const items2 = document.getElementsByTagName("li");
// // console.log(items2);
//
// for (const items2Element of items2) {
//     console.log(items2Element);
//     items2Element.style.fontSize = "40px";
//     items2Element.style.backgroundColor ="yellow";
//
// }

// const items3 = document.querySelectorAll("li");
// console.log(items3);

// const bodyName = document.querySelector('body');
// console.log(bodyName.children);

// const ul = document.getElementById('li-container');
// console.log(ul.previousElementSibling);
// const ul = document.querySelector("ul");
// console.log(ul.textContent);

// const ul = document.querySelector("ul");
//
// const li = document.createElement("li");
// li.innerText = "Hello World!";
// ul.appendChild(li);

// const h2  = document.querySelector('h2');
// h2.classList.add('play');

//  const ul = document.querySelector("ul");
// const second = document.getElementById("second");
// const li = document.createElement("li");
// li.innerText = "hello";
//
// ul.insertBefore(li ,second)

// const ul = document.querySelector("ul");
// ul.remove();


// Functionality to highlight the second item
const highlightButton = document.getElementById('highlight-btn');
const resetButton = document.getElementById('reset-btn');
const secondItem = document.getElementById('second');

// Highlight the second list item
highlightButton.addEventListener('click', () => {
    secondItem.classList.toggle('bg-accent');
    secondItem.classList.toggle('text-white');
    secondItem.classList.toggle('shadow-glow');
});

// Reset the highlight on the second item
resetButton.addEventListener('click', () => {
    secondItem.classList.remove('bg-accent', 'text-white', 'shadow-glow');
});

// Add subtle hover effect to list items
const listItems = document.querySelectorAll('.li-item');
listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.02)';
        item.style.transition = 'transform 0.2s ease-in-out';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
