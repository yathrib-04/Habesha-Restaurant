interface Order {
    name: string;
    email: string;
    meal: string;
    quantity: number;
    specialRequest?: string;
}

async function createOrder(order: Order): Promise<Order> {
    const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        throw new Error('Failed to create order');
    }
    return response.json();
}

document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm') as HTMLFormElement;

    bookingForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(bookingForm);
        const order: Order = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            meal: formData.get('meal') as string,
            quantity: Number(formData.get('quantity')),
            specialRequest: formData.get('specialRequest') as string
        };

        try {
            const response = await createOrder(order);
            alert('Order successful!');
        } catch (error) {
            console.error('Error:', error);
            alert('Order failed.');
        }
    });
});
