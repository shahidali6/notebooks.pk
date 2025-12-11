document.addEventListener('DOMContentLoaded', function() {
    // 1. Select Elements
    const minusBtn = document.getElementById('btn-minus');
    const plusBtn = document.getElementById('btn-plus');
    const display = document.getElementById('qty-display');
    const orderBtn = document.getElementById('order-btn');

    // 2. Set Limits
    let quantity = 1;
    const min = 1;
    const max = 100;

    // 3. Store the original WhatsApp link (from the Python script)
    // We assume the initial href is like: https://wa.me/...?text=I want to buy Blue Notebook
    const baseLink = orderBtn.getAttribute('href');

    // Function to update the Display and the WhatsApp Link
    function updateState() {
        // Update the visual number
        display.textContent = quantity;
        
        // Update the WhatsApp Link dynamically
        // It appends " (Qty: 5)" to the end of your message
        if (baseLink) {
            const newLink = baseLink + "%20(Qty:%20" + quantity + ")";
            orderBtn.setAttribute('href', newLink);
        }
    }

    // 4. Event Listeners
    minusBtn.addEventListener('click', function() {
        if (quantity > min) {
            quantity--;
            updateState();
        }
    });

    plusBtn.addEventListener('click', function() {
        if (quantity < max) {
            quantity++;
            updateState();
        }
    });
});