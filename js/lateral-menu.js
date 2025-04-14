/**Change (navigate) - lateral menu */
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent load page
    document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});