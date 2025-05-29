let loginBtn = document.querySelector('.login');
let body = document.body;

loginBtn.addEventListener('click', () => {
  
  let mydiv = document.createElement('div');
  mydiv.style.position = 'fixed';
  mydiv.style.top = '0';
  mydiv.style.left = '0';
  mydiv.style.width = '100vw';
  mydiv.style.height = '100vh';
  mydiv.style.zIndex = '999';
  mydiv.style.backgroundColor = 'transparent'; 

  
  let modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#fff';
  modal.style.color = '#37373F';
  modal.style.padding = '30px';
  modal.style.border = '4px solid #CE1212';
  modal.style.borderRadius = '10px';
  modal.style.minWidth = '340px';
  modal.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
  modal.style.zIndex = '1000';


  let closeButton = document.createElement('span');
  closeButton.textContent = '✖';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '-5px';
  closeButton.style.right = '12px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.color = '#CE1212';
  closeButton.style.fontSize = '20px';
  closeButton.title = 'Close';


  let emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Email';
  emailInput.style.display = 'block';
  emailInput.style.marginBottom = '15px';
  emailInput.style.padding = '12px';
  emailInput.style.width = '100%';
  emailInput.style.fontSize = '16px';
  emailInput.style.border = '1px solid #ccc';
  emailInput.style.borderRadius = '5px';


  let passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Password';
  passwordInput.style.display = 'block';
  passwordInput.style.marginBottom = '20px';
  passwordInput.style.padding = '12px';
  passwordInput.style.width = '100%';
  passwordInput.style.fontSize = '16px';
  passwordInput.style.border = '1px solid #ccc';
  passwordInput.style.borderRadius = '5px';
  let loginButton = document.createElement('button');
  loginButton.textContent = 'Login';
  loginButton.style.backgroundColor = '#CE1212';
  loginButton.style.color = '#fff';
  loginButton.style.padding = '12px';
  loginButton.style.width = '100%';
  loginButton.style.border = 'none';
  loginButton.style.fontSize = '16px';
  loginButton.style.borderRadius = '5px';
  loginButton.style.cursor = 'pointer';
  modal.appendChild(closeButton);
  modal.appendChild(emailInput);
  modal.appendChild(passwordInput);
  modal.appendChild(loginButton);
  body.appendChild(mydiv);
  body.appendChild(modal);
  closeButton.addEventListener('click', () => {
    modal.remove();
    mydiv.remove();
  });
});
  //^ HADI DYAL MENU 
 const items = document.querySelectorAll(".menu-item");
  const title = document.querySelector(".selected-title");
  items.forEach(item => {
    item.addEventListener("click", () => {
      title.textContent = item.textContent;
    });
  });
  //^CAROUSELLE
document.addEventListener('DOMContentLoaded', () => {
  let carousel = document.querySelector('.allcaroussel')
  let items = document.querySelectorAll('.sec6-main');
  let totalItems = items.length;

  let currentIndex = 0;
  let itemWidth = items[0].offsetWidth;
  function moveCarousel() {
    currentIndex++;
    if (currentIndex >= totalItems) currentIndex = 0;
    carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }
  setInterval(moveCarousel, 3000);
});
let navToggle = document.querySelector('.fa-bars');
let navMenu = document.querySelector('.nav ul');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});





  



