// Get the required elements
const buttons = document.getElementsByClassName('img-button');
const tooltip = document.getElementById('tooltip');

// Iterate over the buttons to add the event-listener and there associated arrow functions
for (const button of buttons) {
    button.addEventListener('mouseenter', () => {
        tooltip.innerHTML = button.getAttribute('data-description') ?? ''; // Set description from attribute
        tooltip.classList.add('active'); // Show tooltip
    })
    button.addEventListener('mouseleave', () => {
        tooltip.classList.remove('active'); // Hide tooltip
    })
    button.addEventListener('click', () => {
        let href = button.getAttribute('data-href') ?? ''; // Get href from attribute
        href = href.replace('{hostname}', location.hostname)
        window.location.href = `${window.location.href}app.html?href=${href}&prev=${window.location.href}` // Go to url with query params
    })
}