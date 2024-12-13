const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();

            if (result.success) {
                alert('Login successful');
                window.location.href = 'listings.html';
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

const propertyList = document.getElementById('property-list');

if (propertyList) {
    fetch('http://localhost:3000/properties')
        .then(response => response.json())
        .then(properties => {
            properties.forEach(property => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h3>${property.title}</h3>
                    <p>${property.description}</p>
                    <p>Price: $${property.price}</p>
                `;
                propertyList.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching properties:', error));
}