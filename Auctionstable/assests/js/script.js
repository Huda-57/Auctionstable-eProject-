// bid-process
function placeBid(cardId) {
  const currentBid = parseFloat(document.getElementById("highestBid" + cardId).innerHTML);

  const bidAmount = parseFloat(document.getElementById('bidAmount' + cardId).value);
  if (bidAmount > currentBid) {
      document.getElementById('highestBid' + cardId).innerHTML = bidAmount;
      alert('Bid placed successfully!');
  } 
  else {
      alert('Bid amount should be higher than the current bid');
  }
      document.getElementById('bidAmount' + cardId).value = '';
  } 


// Search-functionality
function filter() {
  var filterValue, input, productList, title, i;
  input = document.getElementById("search");
  filterValue = input.value.toUpperCase();
  productList = document.getElementById("product-list");
  title = productList.getElementsByClassName("col-lg-3");

  for (i = 0; i < title.length; i++) {
      var h6 = title[i].getElementsByTagName("h6")[0];
      if (h6.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
          title[i].style.display = "";
      } 
      else {
          title[i].style.display = "none";
      }
  }
}


// newsletter submission
const form = document.querySelector('.box-2 form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email.trim() === '') {
        alert('Please enter your email');
    } else {
        alert('You have subscribed to our newsletter successfully! ' + email);
        emailInput.value = '';
    }
});


// Enable dropdown on hover
document.addEventListener("DOMContentLoaded", function() {
  // Get all dropdowns
  let dropdowns = document.querySelectorAll('.dropdown');

  // Add event listeners for hover
  dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('mouseover', function() {
          this.classList.add('show');
          this.querySelector('.dropdown-menu').classList.add('show');
      });

      dropdown.addEventListener('mouseout', function() {
          this.classList.remove('show');
          this.querySelector('.dropdown-menu').classList.remove('show');
      });
  });
});


// Contact form validation
function validate() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
  
    if (name.length < 3) {
      text = "Please Enter a valid Name (Minimum 3 characters)";
      error_message.innerHTML = text;
      return false;
    }

    if (email.trim() === '') {
      text = "Please Enter a valid email";
      error_message.innerHTML = text;
      return false;
    }
  
    if (isNaN(phone) || phone.length !== 10) {
      text = "Please Enter a valid 10-digit Phone Number";
      error_message.innerHTML = text;
      return false;
    }
  
    if (message.length <= 20) {
      text = "Please enter more than 20 Characters";
      error_message.innerHTML = text;
      return false;
    }
  
    if (message.length >= 100) {
      text = "Please enter less than 100 Characters";
      error_message.innerHTML = text;
      return false;
    }
  
    // This alert message will appear if all form fields are filled correctly
    alert("Form submitted successfully! Thank you for contacting us");
    return true;
  }


  // for Animation revealing effect
  window.addEventListener('load', function() {
    reveal();
    window.addEventListener('scroll', revealOnScroll);
  });
  
  function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;
  
      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;
  
      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }