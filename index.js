const prompt = require('prompt-sync')();
const { adicionarAtividade, listarAtividades, atualizarAtividade, removerAtividade } = require('./atividadeManager');

const menuPrincipal = () => {
    while (true) {
        console.log("\nMenu:");
        console.log("1. Adicionar Atividade");
        console.log("2. Listar Atividades");
        console.log("3. Atualizar Atividade");
        console.log("4. Remover Atividade");
        console.log("5. Sair");

        const escolha = parseInt(prompt("Escolha uma opção (1-5): "));

        switch (escolha) {
            case 1:
                const diaAdicionar = prompt("Digite o dia da atividade: ");
                const descricaoAdicionar = prompt("Digite a descrição da atividade: ");
                adicionarAtividade(diaAdicionar, descricaoAdicionar);
                break;

            case 2:
                listarAtividades();
                break;

            case 3:
                const diaAtualizar = prompt("Digite o dia da atividade a ser atualizada: ");
                const novaDescricao = prompt("Digite a nova descrição da atividade: ");
                atualizarAtividade(diaAtualizar, novaDescricao);
                break;

            case 4:
                const diaRemover = prompt("Digite o dia da atividade a ser removida: ");
                removerAtividade(diaRemover);
                break;

            case 5:
                console.log("Saindo...");
                return;

            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
};

menuPrincipal();