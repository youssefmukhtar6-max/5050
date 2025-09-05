const proCards = document.getElementById('pro-cards');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollLeftBtn.addEventListener('click', () => {
  proCards.scrollBy({ left: -1017, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', () => {
  proCards.scrollBy({ left: 1017, behavior: 'smooth' });
});
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

// لما اضغط علي MORE
document.querySelectorAll(".more").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    modalBody.innerHTML = this.getAttribute("data-details"); // يحط التفاصيل
    modal.style.display = "flex"; // يظهر المودال
  });
});

// زرار القفل
closeBtn.onclick = () => modal.style.display = "none";

// لو ضغطت برة المودال
window.onclick = e => { 
  if (e.target === modal) modal.style.display = "none";
};