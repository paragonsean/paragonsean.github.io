// js/slideshow.js
const slideShowContentDataUrl = 'data:text/html,' + encodeURIComponent(`

       <section id="slideshow" class="slideshow-section">
            <h2>A Revolution in Teleportation</h2>
            <div class="slideshow-container">
                <div class="mySlides fade">
                    <img src="teleporter_one.webp" style="width:100%" alt="Epsilon 3 Teleporter - Slide 1">
                    <div class="text">Meet Epsilon 3 – Teleport to your future.</div>
                </div>

                <div class="mySlides fade">
                    <img src="teleporter_two.webp" style="width:100%" alt="Epsilon 3 Teleporter - Slide 2">
                    <div class="text">Skip the traffic and arrive faster than ever.</div>
                </div>

                <div class="mySlides fade">
                    <img src="teleporter_three.webp" style="width:100%" alt="Epsilon 3 Teleporter - Slide 3">
                    <div class="text">Seamlessly integrate teleportation into your daily routine.</div>
                </div>

                <a class="prev" onclick="plusSlides(-1)">❮</a>
                <a class="next" onclick="plusSlides(1)">❯</a>
            </div>
            <br>

            <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </section>
  
`);

export function loadSlideshow() {
    fetch(slideShowContentDataUrl)
        .then(response => response.text())
        .then(html => document.getElementById('slideshow-content').innerHTML = html);
}