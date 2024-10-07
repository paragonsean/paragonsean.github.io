// js/header.js
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

export function loadHeader() {
    fetch(headerDataUrl)
        .then(response => response.text())
        .then(html => document.getElementById('header').innerHTML = html);
}