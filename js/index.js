// js/index.js
import { loadHeader } from './header.js';
import { loadMainContent } from './mainContent.js';
import { loadSlideshow } from './slideshow.js';
import { loadFooter } from './footer.js';

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadMainContent();
    loadSlideshow();
    loadFooter();
});