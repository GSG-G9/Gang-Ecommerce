const deleteBtn = document.getElementById('delete-product');
const deleteInput = document.getElementById('delete-item');
const products = localStorage.getItem('allProducts');



deleteInput.style.display = 'none';

deleteBtn.addEventListener('click',() => {
    deleteInput.style.display = 'block';
  });