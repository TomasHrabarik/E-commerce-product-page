// Naviagation bar

const nav = document.querySelector(".navigation");
const navToggle = document.querySelector(".mobile-nav-toggle")


navToggle.addEventListener("click", () => {
    
    const visibility = nav.getAttribute("data-visible")
    // if the nav is closed, open it
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
       
        // if the nav is open, close it
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        
    }
  })





// Cart functionality


document.addEventListener("DOMContentLoaded", function () {
    let itemCount = 0;

    document.getElementById("btnAdd").addEventListener("click", function () {
        itemCount += 1;
        if (itemCount <= 99) {
            document.getElementById("badge").textContent = itemCount;
        } else {
            document.getElementById("badge").textContent = "99";
            itemCount = 99;
        }
    });

    document.getElementById("btnRemove").addEventListener("click", function () {
        itemCount -= 1;
        if (itemCount >= 0 && itemCount <= 99) {
            document.getElementById("badge").textContent = itemCount;
        } else if (itemCount < 0) {
            itemCount = 0;
        }
    });
});


document.getElementsByClassName("cart")[0].addEventListener("click", function () {
    let x = document.getElementsByClassName("cart-menu-show")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})



let addToCart = document.getElementsByClassName("button-cart")[0];
let deleteButton = document.getElementsByClassName("delete-icon")[0];

addToCart.addEventListener("click", function (e) {
    document.getElementsByClassName('cart-total-items')[0].innerHTML = document.getElementById('badge').textContent;
    deleteButton.addEventListener("click", function () {
        window.location.reload();

    })
    let cartShow = document.getElementsByClassName('cart-detail')[0];
    let itemDisplay = document.getElementsByClassName('cart-total-items')[0].innerHTML;
    let cartTotal = document.getElementsByClassName('cart-totals')[0];
    let checkOutButton = document.getElementsByClassName('checkout-button')[0];
    let cartEmpty = document.getElementsByClassName('cart-empty')[0];

    if (itemDisplay == 0) {
        cartShow.style.display = 'none';
        

    }
    if (itemDisplay > 0) {
        cartShow.style.display = 'flex';
        cartTotal.innerHTML = 125 * itemDisplay;
        checkOutButton.style.display = 'block';
        cartEmpty.style.display = 'none';


    }
    if (itemDisplay == 0) {
        document.getElementsByClassName("badge")[0].style.display = 'none';
    } else {
        document.getElementsByClassName("badge")[0].style.display = 'block';
        document.getElementsByClassName("badge")[0].innerHTML = itemDisplay;
    }
})



// Lightbox


// Get all the lightbox links
let lightboxLinks = document.querySelectorAll('.lightbox');

// Get the lightbox overlay and image elements
let lightboxOverlay = document.querySelector('.lightbox-overlay');
let lightboxImg = document.querySelector('.lightbox-img');

// Get the prev, next and close buttons
let lightboxPrev = document.querySelector('.lightbox-prev');
let lightboxNext = document.querySelector('.lightbox-next');
let lightboxClose = document.querySelector('.lightbox-close');

// Store the current index of the image being displayed
let currentIndex = 0;

// Loop through all the lightbox links and add event listeners
lightboxLinks.forEach(function (link, index) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        currentIndex = parseInt(this.dataset.index);
        openLightbox();
    });
});

// Open the lightbox function
function openLightbox() {
    lightboxOverlay.style.visibility = 'visible';
    lightboxImg.src = lightboxLinks[currentIndex].href;
    lightboxImg.alt = lightboxLinks[currentIndex].querySelector('img').alt;
}

// Close the lightbox function
lightboxClose.addEventListener('click', function () {
    lightboxOverlay.style.visibility = 'hidden';
});

// Previous button functionality
lightboxPrev.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = lightboxLinks.length - 1;
    }
    openLightbox();
});

// Next button functionality
lightboxNext.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= lightboxLinks.length) {
        currentIndex = 0;
    }
    openLightbox();
});