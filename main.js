const scroll_down = document.getElementById('scroll_below');
scroll_down.onclick = ()=>{
    const scroll_height = document.body.scrollHeight;
        window.scrollTo({
            top: scroll_height / 2,
            behaviour :'smooth'
        })
}
// Select all elements with class 'program'
const programs = document.querySelectorAll('.program');
const sermon = document.querySelectorAll('.sermon');
const footer = document.querySelectorAll('.footer');
const line = document.querySelector('.line');
// Define the Intersection Observer callback function
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class when in viewport
      observer.unobserve(entry.target); // Unobserve the element once it's visible
    }
  });
}, { threshold: 0.5 }); // Use a threshold of 0.5 (50% visible)

// Observe each 'program' element
programs.forEach(program => {
  observer.observe(program);
});
sermon.forEach(program=>{
    observer.observe(program)
})
footer.forEach(program=>{
    observer.observe(program)
})