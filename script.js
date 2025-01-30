// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for booking! We will contact you shortly.');
    this.reset();
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});