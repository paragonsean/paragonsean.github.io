document.addEventListener("DOMContentLoaded", () => {
    // Data URL for header content

        // Data URL for header content
        const headerDataUrl = 'data:text/html,' + encodeURIComponent(`
            <header>
                <div class="logo">
                    <h1>Epsilon 3 Teleporter</h1>
                    <p>Teleport Yourself Anywhere, Instantly</p>
                </div>
                <nav>
                    <ul>
                        <li><a href="#story">The Story</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#models">Models</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `);

    // Data URL for main content
    const mainContentDataUrl = 'data:text/html,' + encodeURIComponent(`
         <!-- Main Content Section -->
    <main>
        <section id="story" class="story-section">
            <div class="story-container">
                <!-- BlackHole.webp (about the mega wire) -->
                <div class="story-item">
                    <img src="images/BlackHole.webp" alt="Mega Wire" class="rounded-image">
                    <h3>Power Beyond Imagination</h3>
                    <p>With our revolutionary 1-e14 AWG Mega Wire, you'll have the ultimate power solution for your wildest energy demands! Whether it's powering a black hole generator or a galactic-sized arc reactor, the Omega Wire ensures you’re equipped for even the most intense energy challenges.</p>
                    <p>Constructed from an exotic alloy of unobtainium and dark matter, it’s a technological marvel. This wire can handle temperatures hotter than the sun itself (while staying as cool as F14).</p>
                    <p>With the Omega Wire, your neighbor’s Tesla charger can't save the environment half as fast as ours. Let your city know you care, and do it in a big way with a lot of noise!</p>
                </div>
    
                <!-- Blackholetwo.webp (about blackhole to power your teleporter) -->
                <div class="story-item">
                    <img src="images/Blackholetwo.webp" alt="Blackhole Power" class="rounded-image">
                    <h3>Safe Blackhole Energy</h3>
                    <p>Imagine tapping into the power of a black hole—without any danger to yourself or your surroundings. That’s exactly what our Blackhole-in-a-Bottle technology provides, giving you limitless energy at home. With this system, you can power your Epsilon 3 Teleporter without worrying about grid overloads or blackouts.</p>
                    <p>It’s safe, sustainable, and harnesses the raw energy of the cosmos in a way that’s entirely controlled. The bottle is designed with advanced safety mechanisms to ensure no radiation leaks, no gravitational anomalies, and no rips in the space-time continuum.</p>
                    <p>Instead of relying on traditional energy grids, you’re effectively producing enough energy to power an entire city—right from your garage. Welcome to the future of power generation, where black holes are not just for astrophysicists but for the everyday homeowner.</p>
                </div>
    
    
                <!-- latetocourt.webp (get to work on time) -->
                <div class="story-item">
                    <img src="images/latetocourt.webp" alt="Get to Work On Time" class="rounded-image">
                    <h3>Never Be Late Again</h3>
                    <p>Forget the stress of being stuck in traffic or delayed by public transportation. With the Epsilon 3 Teleporter, your days of running late are over. Whether you're heading to work, an important meeting, or even court, the teleporter ensures you arrive on time, every time.</p>
                    <p>Just set your destination, step into the teleporter, and let quantum technology do the rest. It’s faster than driving, flying, or any traditional form of transportation—by light-years. Plus, the teleportation process is so smooth and efficient, you'll feel like you're stepping from one room to the next.</p>
                    <p>This is the future of commuting, where the concept of 'being late' simply doesn't exist anymore.</p>
                </div>
    
                <!-- eatenbyblackhole.webp (what competitors' models will do) -->
                <div class="story-item">
                    <img src="images/eatenbyblackhole.webp" alt="Competitor Failure" class="rounded-image">
                    <h3>Our Competitors Can't Compete</h3>
                    <p>When it comes to teleportation technology, not all devices are created equal. While our competitors are still struggling with basic teleportation safety, Epsilon 3 is light-years ahead.</p>
                    <p>Their outdated systems might just land you in the middle of a black hole or worse—lost in the vastness of space. But with Epsilon 3, safety is our top priority, and you'll never have to worry about glitches, power failures, or unintended destinations.</p>
                    <p>Stick with Epsilon 3 and avoid the black hole of regret.</p>
                </div>
            </div>
        </section>
    
        <!-- Why Choose Epsilon 3 Content with Detailed Descriptions -->
        <section id="why-epsilon" class="why-epsilon-section">
            <h2>Why Choose the Epsilon 3 Teleporter?</h2>
            <p>The Epsilon 3 Teleporter is not just a device – it's a revolution in how you experience travel. Forget about the mundane hassles of commuting and embrace the future of teleportation. Our cutting-edge quantum technology ensures secure, fast, and seamless travel between pre-set destinations, giving you freedom like never before.</p>
            <p>Imagine stepping into a teleporter and arriving at your destination instantly, whether it's across town or on the other side of the world. The Epsilon 3 makes this possible, with customizable travel routes that adapt to your personal needs. Whether you're heading to work, a meeting, or a vacation spot, Epsilon 3 is designed for ultimate convenience.</p>
        </section>
    </main>`);
    
    const SlideShowContentDataUrl = 'data:text/html,' + encodeURIComponent(`
       <section id="slideshow" class="slideshow-section">
            <h2>A Revolution in Teleportation</h2>
            <div class="slideshow-container">
                <div class="mySlides fade">
                    <img src="images/teleporter_one.webp" style="width:100%" alt="Epsilon 3 Teleporter - Slide 1">
                    <div class="text">Meet Epsilon 3 – Teleport to your future.</div>
                </div>

                <div class="mySlides fade">
                    <img src="images/teleporter_two.webp" style="width:100%" alt="Epsilon 3 Teleporter - Slide 2">
                    <div class="text">Skip the traffic and arrive faster than ever.</div>
                </div>

                <div class="mySlides fade">
                    <img src="images/teleporter_three.webp" style="width:100%" alt="Epsilon 3 Teleporter - Slide 3">
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
    // Data URL for footer content
 // Data URL for footer content
const contactDataUrl = 'data:text/html,' + encodeURIComponent(`   <section id="contact" class="contact-section">
            <h2>Get in Touch</h2>
            <p>Got questions? Want to learn more about the Epsilon 3 Teleporter? We're here to help. Fill out the form below to get in touch with us.</p>
            <form action="/submit-contact" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>`);

 const footerDataUrl = 'data:text/html,' + encodeURIComponent(`
    <section id="contact" class="contact-section">
        <h2>Get in Touch</h2>
        <p>Got questions? Want to learn more about the Epsilon 3 Teleporter?</p>
        <form action="/submit-contact" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
    <footer>
        <p>&copy; 2024 Epsilon 3 Teleporter. All rights reserved.</p>
    </footer>
`);



// Fetch the content from the data URLs and inject it into the DOM
fetch(headerDataUrl)
    .then(response => response.text())
    .then(html => document.getElementById('header').innerHTML = html);

fetch(mainContentDataUrl)
    .then(response => response.text())
    .then(html => document.getElementById('main-content').innerHTML = html);

fetch(slideShowContentDataUrl)
    .then(response => response.text())
    .then(html => document.getElementById('slideshow-content').innerHTML = html);
fetch(contactDataUrl)
    .then(response => response.text())
    .then(html => document.getElementById('contact').innerHTML = html);

fetch(footerDataUrl)
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);
});