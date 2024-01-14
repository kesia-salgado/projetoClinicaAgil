// Array para armazenar pacientes cadastrados
const pacientesCadastrados = [];
// Array para armazenar agendamentos
const agendamentos = [];

// Função para cadastro de paciente
function cadastro() {
    const nome = document.getElementById("nomePaciente").value;
    const telefone = document.getElementById("telefonePaciente").value;

    // Verifica se o paciente já está cadastrado pelo nome e telefone
    const pacienteExistente = pacientesCadastrados.find(paciente => paciente.nome === nome && paciente.telefone === telefone);

    if (!pacienteExistente) {
        const paciente = { nome: nome, telefone: telefone };
        pacientesCadastrados.push(paciente);
        alert("Paciente cadastrado com sucesso!");
    } else {
        alert("Paciente já cadastrado anteriormente.");
    }
}

// Função para listar pacientes e agendar consulta
function listaPacientes() {
    let listaPacientes = "Selecione um paciente:\n";

    pacientesCadastrados.forEach(function (paciente, index) {
        listaPacientes += `${index + 1}. ${paciente.nome}\n`;
    });

    const escolha = prompt(listaPacientes);
    const indexEscolhido = parseInt(escolha) - 1;

    if (!isNaN(indexEscolhido) && indexEscolhido >= 0 && indexEscolhido < pacientesCadastrados.length) {
        const pacienteSelecionado = pacientesCadastrados[indexEscolhido];
        alert(`Você selecionou: ${pacienteSelecionado.nome}`);
        escolherEspecialidade(pacienteSelecionado);
    } else {
        alert("Escolha inválida. Tente novamente.");
    }
}

// Função para escolher especialidade e exibir disponibilidade
function escolherEspecialidade(pacienteSelecionado) {
    const especialidadeEscolhida = document.getElementById("especialidadeMedica").value;

    if (especialidadeEscolhida) {
        const disponibilidade = document.getElementById("disponibilidadeConsulta");
        const data = "20-01-2024";
        const hora = "10:00";

        disponibilidade.innerHTML = `Disponibilidade para ${especialidadeEscolhida}:\nData: ${data}, Hora: ${hora}\n`;
        confirmarAgendamento(pacienteSelecionado, especialidadeEscolhida, data, hora);
    } else {
        alert("Especialidade inválida. Tente novamente.");
    }
}

// Função para confirmar agendamento e adicionar à lista de agendamentos
function confirmarAgendamento(paciente, especialidade, data, hora) {
    const confirmacao = confirm(`Confirme o agendamento:\nPaciente: ${paciente.nome}\nEspecialidade: ${especialidade}\nData: ${data}, Hora: ${hora}`);

    if (confirmacao) {
        const agendamento = {
            paciente: paciente,
            especialidade: especialidade,
            data: data,
            hora: hora,
        };

        agendamentos.push(agendamento);
        alert("Consulta agendada com sucesso!");
    }
}

// Função para listar consultas agendadas e cancelar consulta
function listaConsultas() {
    let listaConsultas = "Escolha uma consulta para cancelar:\n";

    agendamentos.forEach(function (agendamento, index) {
        listaConsultas += `${index + 1}. Paciente: ${agendamento.paciente.nome}, Especialidade: ${agendamento.especialidade}, Data: ${agendamento.data}, Hora: ${agendamento.hora}\n`;
    });

    const escolha = prompt(listaConsultas);
    const indexEscolhido = parseInt(escolha) - 1;

    if (!isNaN(indexEscolhido) && indexEscolhido >= 0 && indexEscolhido < agendamentos.length) {
        const consultaCancelada = agendamentos[indexEscolhido];
        cancelarConsulta(indexEscolhido, consultaCancelada);
    } else {
        alert("Escolha inválida. Tente novamente.");
    }
}

// Função para cancelar consulta
function cancelarConsulta(index, consultaCancelada) {
    const confirmacao = confirm(`Você deseja cancelar a consulta:\nPaciente: ${consultaCancelada.paciente.nome}\nEspecialidade: ${consultaCancelada.especialidade}\nData: ${consultaCancelada.data}, Hora: ${consultaCancelada.hora}`);

    if (confirmacao) {
        agendamentos.splice(index, 1);
        alert("Consulta cancelada com sucesso!");
    }
}

// Função para encerrar o programa
function encerrar() {
    alert("O programa foi encerrado.");
}
