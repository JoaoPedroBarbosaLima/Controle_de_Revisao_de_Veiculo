import { prisma } from '../database/client.js'
class VeiculoService {
    static async registrarVeiculo(dadosVeiculo){
        try{
            const novocarro = await prisma.veiculo.create({
                data: {
                    placa: dadosVeiculo.placa,
                    quilometragem: dadosVeiculo.quilometragem,
                    cor: dadosVeiculo.cor,
                    modelo: dadosVeiculo.modelo,
                    marca: dadosVeiculo.marca,
                    tipo: (dadosVeiculo.tipo).toUpperCase()
                }
            })

            return novocarro

        } catch(erro){

            let tipos = [ 'MOTO', 'CARRO']
            if(!(tipos.includes((dadosVeiculo.tipo).toUpperCase()))){
                 throw new Error(`Tipo: ${(dadosVeiculo.tipo).toUpperCase()} não existe`)
            } else if (erro.code == 'P2002'){
                throw new Error(`Veículo de placa: ${dadosVeiculo.placa} já registrado`)
            } else if (erro.cause.code == '23514') {
                console.log(erro.cause.code)
                throw new Error(erro)        
            }
        }
    }
}

export default VeiculoService