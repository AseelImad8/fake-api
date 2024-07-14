
const getProduct = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}

const displayProducts = async () => {

    const data = await getProduct();
    const images = data.images.map((img) => {
        return `<img src = ${img} />`;
    }).join('');

    const result = `
    <h2> Title : ${data.title}</h2>
    <p>  Description : ${data.description}</p>
    <p>  Price : ${data.price}</p>
    `;

    document.querySelector(".product").innerHTML= result;
    document.querySelector(".product-img").innerHTML= images;


}

displayProducts();
