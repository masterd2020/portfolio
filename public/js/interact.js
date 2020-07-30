// DOM ELEMENT
const cnt = Array.from(document.querySelectorAll('.projects__container'));

// SETUP EVENT LISTENERS
cnt.forEach((el, i) => {
  el.addEventListener('onmouseover', () => {
    const pjt = Array.from(document.querySelectorAll('.projects__container--description'));
    if(pjt[i].style.display === '')
      pjt[i].style.display = 'block';
    else if (pjt[i].style.display === 'block')
      pjt[i].style.display = 'none';
    else
      pjt[i].style.display = 'block';
 
  });
});