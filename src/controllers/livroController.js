const array = [];

class LivroController {

    // retorna valor de dentro da constante "array"
    async index(req, res) {
        return res.json(array);
    }

    // Adiciona os dados dentro da constatnte "array" vindo da requisição
    async create(req, res) {
        const {nome, descricao} = req.body;
        
        const id = "_" + Math.random().toString(36).substr(2, 9);

        // usando push dentro do array para adicionar as infos
        const format = {
            id,
            nome,
            descricao
        }

        array.push(format);
        return res.json(format);
    }

    // Busca um objeto especifico através do Id
    async details(req, res) {
        const { id } = req.params;
        const arrayById = array.find(x => x.id === id);
        return res.json(arrayById);
    }

    // Busca o index pelo id e atualiza as infos
    async update(req, res) {
        const { id } = req.params;
        const {nome, descricao} = req.body;

        const index = array.findIndex(x => x.id === id);
        array[index].nome = nome;
        array[index].descricao = descricao;
        return res.json(array[index]);
    }

    // Busca o index pelo id e remove o objeto
    async delete(req, res) {
        const { id } = req.params;
        const index = array.findIndex(x => x.id == id);
        array.splice(index, 1);
        return res.json("Deleta");
    }

}

module.exports = new LivroController();