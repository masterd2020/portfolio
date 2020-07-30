const cnt = document.querySelector('.projects__container');
cnt.addEventListener('click', () => {
  const pjt = document.querySelector('.projects__container--description');
  if(pjt.style.display === '')
    pjt.style.display = 'block';
  else if (pjt.style.display === 'block')
    pjt.style.display = 'none';
  else
    pjt.style.display = 'block';
});