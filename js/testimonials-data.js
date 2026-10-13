// ============================================================
// Testimonial content. videoSrc points at self-hosted mp4 files in
// assets/videos/ when real reviews exist.
//
// Intentionally empty. Drive URLs were not provided (see
// EXPLAINER_DRIVE_URL and REVIEWS_DRIVE_URL in config.js). Do not
// point these at a fake file. renderTestimonials() draws six labeled
// placeholder cards until real video entries and ids are added.
// ============================================================
window.TESTIMONIALS = [];

// Explainer video on the homepage, thank-you page, and booking pages.
// An empty videoSrc keeps the section visible as a labeled placeholder
// (see renderExplainerVideo() in main.js).
window.EXPLAINER_VIDEO = {
  videoSrc: "",
  poster: "",
  caption: "",
};

// Landing page (index.html) hero testimonials, in order
window.HERO_TESTIMONIAL_IDS = [];
// Booking pages (book-tracked.html + book-untracked.html)
window.BOOKING_TESTIMONIAL_IDS = [];
// Homepage (index.html) review section
window.HOME_TESTIMONIAL_IDS = [];
// Thank-you page
window.THANK_YOU_TESTIMONIAL_IDS = [];

// Final single testimonial. Null hides renderClosingTestimonial().
window.CLOSING_TESTIMONIAL = null;
