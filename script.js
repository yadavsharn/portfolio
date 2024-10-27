function downloadResume() {
    window.open('assets/resume.pdf');
  }
  
  function submitForm(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for your message, ' + name + '!');
    } else {
      alert('Please fill out all fields.');
    }
  }
  document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  
  function submitForm(event) {
    event.preventDefault();
    alert("Your message has been sent!");
  }
  