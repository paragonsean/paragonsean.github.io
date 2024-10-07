// js/mainContent.js
const mainContentDataUrl = 'data:text/html,' + encodeURIComponent(`
    <main>
        <section id="story" class="story-section">
            <div class="story-container">
                <!-- Story Items (Example) -->
                <div class="story-item">
                    <img src="BlackHole.webp" alt="Mega Wire" class="rounded-image">
                    <h3>Power Beyond Imagination</h3>
                    <p>With our revolutionary 1-e14 AWG Mega Wire, you'll have the ultimate power solution for your wildest energy demands!</p>
                </div>
            </div>
        </section>
    </main>
`);

export function loadMainContent() {
    fetch(mainContentDataUrl)
        .then(response => response.text())
        .then(html => document.getElementById('main-content').innerHTML = html);
}