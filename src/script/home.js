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
/*          data.json configuration         */
/*------------------------------------------*/

// Função para carregar as propriedades dinamicamente do data.json
function loadProperties() {
    fetch('/data.json')  // Certifique-se de que o caminho está correto
        .then(response => response.json())  // Converte a resposta em JSON
        .then(data => {
            const propertyList = document.getElementById('property-list');
            data.serviços.forEach(propriedade => {
                const li = document.createElement('li');
                li.classList.add('properties');
                li.innerHTML = `
                    <article onclick="openModal('${propriedade.price}')">
                        <img src="${propriedade.image}" alt="Property image">
                        <h3>${propriedade.price}</h3>
                        <p>${propriedade.size} m²</p>
                        <div class="property-buttons">
                            <button disabled="disabled">${propriedade.bedrooms} quartos</button>
                            <button disabled="disabled">${propriedade.bathrooms} banheiros</button>
                        </div>
                    </article>
                `;
                propertyList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Chame a função para carregar as propriedades quando a página carregar
window.onload = loadProperties;

// Função para abrir o modal
function openModal(propertyId) {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            const propertyDetails = data.serviços.find(propriedade => propriedade.price === propertyId); // Busca a propriedade pelo preço (use um ID único se possível)

            if (propertyDetails) {
                document.getElementById('modal-image').src = propertyDetails.image;
                document.getElementById('modal-price').textContent = propertyDetails.price;
                document.getElementById('modal-area').textContent = propertyDetails.size + ' m²';
                document.getElementById('modal-rooms').textContent = propertyDetails.bedrooms + ' quartos';
                document.getElementById('modal-bathrooms').textContent = propertyDetails.bathrooms + ' banheiros';

                document.getElementById('modal').style.display = 'block';
            } else {
                console.error('Propriedade não encontrada:', propertyId);
            }
        })
        .catch(error => console.error('Erro ao carregar detalhes da propriedade:', error));
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Adicionar eventos para fechar o modal ao clicar fora ou no "X"
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

// Ao clicar no "X"
closeBtn.addEventListener('click', closeModal);

// Ao clicar fora do modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});