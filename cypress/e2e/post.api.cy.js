/// <reference types="cypress"/>

describe('Cadastrar dispositivos', () => {
  it('Cadastrar dispositivo específico', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.restful-api.dev/objects/',
      body: {
        "name": "PC GAMER DA CAMILA",
	      "data": {
        "year": 2023,
        "price": 25499.99,
        "CPU model": "Intel Core i12",
        "Hard disk size": "5 TB",
        "Dono do produto": "Camila Ribeiro"
	}
},
  failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).equal(200)
    })

  });
});