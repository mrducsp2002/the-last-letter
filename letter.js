const openLetterButtons = document.querySelectorAll('[data-letter-target]');
const closeLetterButtons = document.querySelectorAll('[data-close-button]');
const overlays = document.querySelectorAll(".overlay");
const audio = document.querySelector("audio")
const carouselButtons = document.querySelectorAll('[data-bs-target="#carouselExampleControls"]');


function scrollToSection(direction) {
    const windowHeight = window.innerHeight;
    const scrollAmount = direction === 'down' ? windowHeight : -windowHeight;
    window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
        duration: 1000 // set the duration to 1000ms
    });
}
// carouselButtons.forEach(button => {
//             button.disabled = true;
//             button.classList.add("d-none")
//         })

window.addEventListener('wheel', event => {
    const direction = event.deltaY > 0 ? 'down' : 'up';
    scrollToSection(direction);
});

openLetterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const letter = document.querySelector(button.dataset.letterTarget);
        console.log("I made it")
        openLetter(letter);
        overlays.forEach(overlay => {
            overlay.classList.add("active"); // assign the overlay to all buttons that open letters
        });
        if (button.getAttribute('data-letter-target') === '#letter-16' || button.getAttribute('data-letter-target') === '#letter-final') {
            audio.currentTime = 0;
            audio.play(); //Play audio in letter;
        }
        carouselButtons.forEach(button => {
            button.disabled = true;
            button.classList.add("d-none")
        });
    })
});


closeLetterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const letter = button.closest(".letter");
        closeLetter(letter);
        overlays.forEach(overlay => {
            overlay.classList.remove("active"); // remove the overlay when closing letters
        });
        audio.pause(); //Play audio in letter
        carouselButtons.forEach(button => {
            // button.disabled = false;
            // button.classList.remove("d-none")
        });
    });
});

overlays.forEach(overlay => {
    overlay.addEventListener("click", () => {
        const letters = document.querySelectorAll(".letter.active");
        letters.forEach(letter => {
            closeLetter(letter);
        });
        overlays.forEach(overlay => {
            overlay.classList.remove("active"); // remove the overlay when clicking outside the letters
        });
        audio.pause(); //Play audio in letter
        carouselButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove("d-none")
        });
    });
});

function openLetter(letter) {
    // if (letter == null) return;
    letter.classList.add("active");
    document.body.style.position = 'fixed';
    document.scrollTop = `-${window.scrollY}px`;
}

function closeLetter(letter) {
    if (letter == null) return;
    letter.classList.remove("active");
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

const tableCells = document.querySelectorAll("td");

tableCells.forEach(cell => {
    const firstChild = cell.firstChild;
    if (firstChild && firstChild.dataset && firstChild.dataset.letterTarget) {
        // this cell has a data-letter-target attribute, so do nothing
        firstChild.classList.add("active");
    } else if (firstChild) {

    }
});


function scrollToSection(direction) {
    const windowHeight = window.innerHeight;
    const scrollAmount = direction === 'down' ? windowHeight : -windowHeight;
    window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
        duration: 1000 // set the duration to 1000ms
    });
}

window.addEventListener('wheel', event => {
    const direction = event.deltaY > 0 ? 'down' : 'up';
    scrollToSection(direction);
});






