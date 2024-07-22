let atividades = [];

const adicionarAtividade = (dia, descricao) => {
    atividades.push({ dia, descricao });
    console.log(`Atividade adicionada para o dia ${dia}: ${descricao}`);
};

const listarAtividades = () => {
    if (atividades.length === 0) {
        console.log("Nenhuma atividade encontrada.");
        return;
    }

    atividades.forEach(atividade => {
        console.log(`Dia: ${atividade.dia}, Atividade: ${atividade.descricao}`);
    });
};

const atualizarAtividade = (dia, novaDescricao) => {
    let encontrado = false;

    atividades.forEach(atividade => {
        if (atividade.dia === dia) {
            atividade.descricao = novaDescricao;
            encontrado = true;
            console.log(`Atividade atualizada para o dia ${dia}: ${novaDescricao}`);
        }
    });

    if (!encontrado) {
        console.log(`Nenhuma atividade encontrada para o dia ${dia}.`);
    }
};

const removerAtividade = (dia) => {
    const tamanhoInicial = atividades.length;
    atividades = atividades.filter(atividade => atividade.dia !== dia);

    if (atividades.length < tamanhoInicial) {
        console.log(`Atividade do dia ${dia} removida.`);
    } else {
        console.log(`Nenhuma atividade encontrada para o dia ${dia}.`);
    }
};

module.exports = {
    adicionarAtividade,
    listarAtividades,
    atualizarAtividade,
    removerAtividade
};