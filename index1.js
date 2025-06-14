        fetch('https://dummyjson.com/products', {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector('#products tbody');
            tbody.innerHTML = "";

            data.products.forEach(pro => {
                const row = `
                    <tr>
                        <td><img src="${pro.images[0]}" width="100"></td>
                        <td>${pro.title}</td>
                        <td>${pro.description}</td>
                        <td><button type="button" onclick='view_pro(${JSON.stringify(pro)})'>View Product</button></td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });
        });

        function view_pro(product) {
            localStorage.setItem("Prod_Name", product.title);
            localStorage.setItem("Prod_Description", product.description);
            localStorage.setItem("Prod_Image", product.images[0]);
            window.location.href = "details.html";
        }