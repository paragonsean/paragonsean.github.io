// js/footer.js
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

export function loadFooter() {
    fetch(footerDataUrl)
        .then(response => response.text())
        .then(html => document.getElementById('footer').innerHTML = html);
}