let fila = [];

do {
    let menu = `
    Fila de Espera:
    ${fila.length === 0 ? "Nenhum paciente na fila." : fila.map((paciente, index) => `${index + 1}º ${paciente}`).join("\n")}

    Escolha uma opção:
    1 - Novo paciente
    2 - Consultar paciente
    3 - Sair
    `;
    
    let chose = prompt(menu);

    if (chose === "1") {
        let patientName = prompt("Escreva o nome do paciente");
        if (patientName && patientName.trim() !== "") {
            fila.push(patientName.trim());
            alert(`Paciente ${patientName} adicionado à fila.`);
        } else {
            alert("Nome inválido! O paciente não foi adicionado.");
        }
    } else if (chose === "2") {
        if (fila.length > 0) {
            let consultedPatient
            = fila.shift();
            alert(`O paciente ${consultedPatient} foi consultado e removido da fila.`);
        } else {
            alert("Nenhum paciente na fila para consulta.");
        }
    } else if (chose === "3") {
        alert("Saindo...");
        break;
    } else {
        alert("Opção inválida! Tente novamente.");
    }
} while (true);

alert("Programa encerrado.");
