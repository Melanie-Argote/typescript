type Rating = {
    rate: number;
    count: number;

};
type Product = {
    id: number;
    description: string;
    category: string;
    image: string;
    price: number;
    rating: Rating;
    title: string;
};

fetch('https://fakestoreapi.com/products')
    .then(res=> res.json())
    .then ((products: Product []) => {
        //prepare table html
        let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
        products.forEach((p:Product) => {
            tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;

        });
        //Close table body
        tableHTML+= '</tbody';
        //Grab table element to set its inner html
        document.querySelector('#tableElement')!.innerHTML = tableHTML;
        //Hide spinner
        const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
        spinnerElement.style.display = 'none'; 
    });
    
    

