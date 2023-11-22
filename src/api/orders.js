const API_URL = import.meta.env.VITE_API_URL;

export const postOrderFn = async (data) =>{

    const res = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!res.ok){
        throw new Error('An error occured while posting an order')
    }
}