/*------------------------------------------*/
/*        header button configuration       */
/*------------------------------------------*/

function exit(){
    window.location.href = "/login.html" //envia devolta para login.html
}

/*------------------------------------------*/
/*        footer button configuration       */
/*------------------------------------------*/

function back_start() {
    window.scrollTo({ //função que move o scrool da tela
        top: 0, //volta para o topo da pagina
        behavior: 'smooth' // rola a tela devagar
    });
}

/*------------------------------------------*/
/*   function to open Modal configuration   */
/*------------------------------------------*/
// Função para abrir o modal
function openModal(propertyId) {
    // Dados fictícios para exemplo
    const property = {
        id: propertyId,
        image: '/src/images/properties1.png',  // Caminho da imagem
        price: 'R$ 2.000.000',
        area: '132 m²',
        rooms: '5 quartos',
        bathrooms: '4 banheiros',
    };

    // Preencher as informações no modal
    document.getElementById('modal-image').src = property.image;
    document.getElementById('modal-price').textContent = property.price;
    document.getElementById('modal-area').textContent = property.area;
    document.getElementById('modal-rooms').textContent = property.rooms;
    document.getElementById('modal-bathrooms').textContent = property.bathrooms;

    // Exibir o modal
    document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
