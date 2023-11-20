//Funções de rotas
async function getData(route) {
    try {
      const response = await fetch(route);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
async function postData(route, data) {
    try {
      const response = await fetch(route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Erro ao criar novo registro');
      }
      const createdData = await response.json();
      return createdData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
async function putData(route, data) {
    try {
      const response = await fetch(route, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar registro');
      }
      const updatedData = await response.json();
      return updatedData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
async function deleteData(route) {
    try {
      const response = await fetch(route, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir registro');
      }
      return true; // Indica que a exclusão foi bem-sucedida
    } catch (error) {
      console.error(error);
      return false; // Indica que a exclusão falhou
    }
  }


//Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Automaticamente busca dados da rota /pacientes durante o carregamento da página
  document.getElementById('getDataButton').click();

});


document.getElementById('getDataButton').addEventListener('click', async () => {
  const routeSelect = document.getElementById('routeSelect');
  const selectedRoute = routeSelect.value;
  
  try {
      const data = await getData(selectedRoute);

      // Limpa a tabela atual
      const dataTableBody = document.querySelector('#dataTable tbody');
      dataTableBody.innerHTML = '';

      // Calculate the number of empty rows needed
      const numRows = Math.max(5, data.length); // Ensure at least 5 rows

      // Create empty rows
      for (let i = 0; i < numRows; i++) {
          const row = document.createElement('tr');
          dataTableBody.appendChild(row);
      }

      // Verifica se há dados
      if (data.length === 0) {
          console.log('Nenhum dado encontrado.');
          return;
      }

      // Obtém as chaves do primeiro objeto da resposta
      const keys = Object.keys(data[0]);

      // Cria a primeira linha da tabela com cabeçalhos de coluna dinâmicos
      const headerRow = dataTableBody.insertRow();
      keys.forEach(key => {
          const th = document.createElement('th');
          th.textContent = key;
          headerRow.appendChild(th);
      });

      // Preenche a tabela com os dados da resposta
      data.forEach(item => {
          const row = dataTableBody.insertRow();
          keys.forEach(key => {
              row.insertCell().textContent = item[key];
          });
      });
  } catch (error) {
      console.error(error);
      // Lide com erros, por exemplo, exibindo uma mensagem de erro na página
  }
});


function postPaciente() {
  const nome = document.getElementById('nomePaciente').value;
  const usuario = document.getElementById('usuarioPaciente').value;
  const senha = document.getElementById('senhaPaciente').value;

  const pacienteData = {
      nome,
      usuario,
      senha,
  };

  
  const route = '/pacientes'; // A rota para a qual você deseja enviar a solicitação POST

  postData(route, pacienteData)
    .then(createdPaciente => {
      console.log('Nova Data:', createdPaciente);
    })
    .catch(error => {
      console.error('Erro ao criar nova Data:', error);
    });


}

function postSecretaria() {
  const nome = document.getElementById('nomeSecretaria').value;
  const RG = document.getElementById('rgSecretaria').value;

  const secretariaData = {
      nome,
      RG,
  };

  const route = '/secretarias'; // A rota para a qual você deseja enviar a solicitação POST

  postData(route, secretariaData)
    .then(createdSecretaria => {
      console.log('Nova Data:', createdSecretaria);
    })
    .catch(error => {
      console.error('Erro ao criar nova Data:', error);
    });

}

function postAgenda() {

  const data1 = document.getElementById('dataAgenda').value;
  const data = data1 + ":00.000Z";
  const agendaData = {
    data,
  };

  const route = '/agendas'; // A rota para a qual você deseja enviar a solicitação POST

  postData(route, agendaData)
    .then(createdAgenda => {
      console.log('Nova Data:', createdAgenda);
    })
    .catch(error => {
      console.error('Erro ao criar nova Data:', error);
    });

}

function postConsulta() {
  const data1 = document.getElementById('dataConsulta').value;
  const data = data1 + ":00.000Z";
  const dentista = document.getElementById('dentistaConsulta').value;
  const pacienteId = parseInt(document.getElementById('pacienteIdConsulta').value);
  const secretariaId = parseInt(document.getElementById('secretariaIdConsulta').value);
  const agendaId = parseInt(document.getElementById('agendaIdConsulta').value);

  const consultaData = {
      data,
      dentista,
      pacienteId,
      secretariaId,
      agendaId,
  };

  const route = '/consultas'; // A rota para a qual você deseja enviar a solicitação POST

  postData(route, consultaData)
    .then(createdConsulta=> {
      console.log('Nova Data:', createdConsulta);
    })
    .catch(error => {
      console.error('Erro ao criar nova Data:', error);
    });

}
  
