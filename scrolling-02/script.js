
const bankAccounts = document.getElementById('bank-accounts');

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

bankAccounts.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - bankAccounts.offsetLeft;
  startY = e.pageY - bankAccounts.offsetTop;
  scrollLeft = bankAccounts.scrollLeft;
  scrollTop = bankAccounts.scrollTop;
  bankAccounts.style.cursor = 'grabbing';
});

bankAccounts.addEventListener('mouseleave', () => {
  isDown = false;
  bankAccounts.style.cursor = 'grab';
});

bankAccounts.addEventListener('mouseup', () => {
  isDown = false;
  bankAccounts.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - bankAccounts.offsetLeft;
  const y = e.pageY - bankAccounts.offsetTop;
  const walkX = (x - startX) * 1; 
  const walkY = (y - startY) * 1; 
  bankAccounts.scrollLeft = scrollLeft - walkX;
  bankAccounts.scrollTop = scrollTop - walkY;
});

const scrollLeftButton = document.getElementById(
  'action-button--previous');
const scrollRightButton = document.getElementById(
  'action-button--next');

scrollLeftButton.addEventListener('click', () => {
    bankAccounts.scrollBy({
        top: 0, 
        left: -200, 
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    bankAccounts.scrollBy({
        top: 0, 
        left: 200, 
        behavior: 'smooth'
    });
});

bankAccounts.addEventListener('scroll', (e) => {
    const position = bankAccounts.scrollLeft;
    if (position === 0) {
      scrollLeftButton.disabled = true;
    } else {
      scrollLeftButton.disabled = false;
    }

    if (
      Math.round(position) === 
      bankAccounts.scrollWidth - 
      bankAccounts.clientWidth
    ) {
      scrollRightButton.disabled = true;
    } else {
      scrollRightButton.disabled = false;
    }
});