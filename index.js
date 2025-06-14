const name = localStorage.getItem("Prod_Name");
        const description = localStorage.getItem("Prod_Description");
        const image = localStorage.getItem("Prod_Image");

        const container = document.getElementById('details');
        container.innerHTML = `
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
            <p>${description}</p>
        `;