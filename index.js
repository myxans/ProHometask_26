let liTwo = document.createElement('li');
let liThree = liTwo.cloneNode(true)

one.append(liTwo, liThree);

liTwo.innerHTML = '2';
liThree.innerHTML = '3';
