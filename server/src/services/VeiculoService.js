import test from 'node:test';
import { Prisma } from '../database/client.js'

class AppError extends Error {
    constructor(message, code = null) {
        super(message);
        this.code = code;
    }
}

class VeiculoService { 

    static async registrarVeiculo(dadosVeiculo){
        let tipos = [ 'MOTO', 'CARRO']
        if(!(tipos.includes((dadosVeiculo.tipo).toUpperCase()))){
            throw new Error(`Tipo: ${(dadosVeiculo.tipo).toUpperCase()} não existe`)
        }

        const cliente = await Prisma.cliente.findUnique({
            where: {
                cpf: dadosVeiculo.cpf_responsavel
            }
        })

        if (!cliente){
            throw new AppError(`Cliente de cpf '${dadosVeiculo.cpf_responsavel} não registrado'`, '1')
        }

        try{
            const novocarro = await Prisma.veiculo.create({
                data: {
                    placa: dadosVeiculo.placa,
                    quilometragem: dadosVeiculo.quilometragem,
                    cor: dadosVeiculo.cor,
                    modelo: dadosVeiculo.modelo,
                    marca: dadosVeiculo.marca,
                    cpf_responsavel: dadosVeiculo.cpf_responsavel,
                    tipo: (dadosVeiculo.tipo).toUpperCase()
                }
            })

            return novocarro      

        } catch(erro){
            console.log(erro)
            if (erro.code == 1){
                throw new Error(erro)
            }
            if (erro.code == 'P2002'){
                throw new Error(`Veículo de placa '${dadosVeiculo.placa}' já registrado`)
            } 

            if (erro.cause.code == '23514') {
                throw new Error(`Violação de restrição`);      
            }

            throw new Error('Erro interno ao registrar veículo');

        }
    }

    static async listarveiculos(dados){
        try{

            if(dados.tipo == 'FUNCIONARIO' || dados.tipo == 'ADMIN'){
                return await Prisma.veiculo.findMany({
                    include: {
                        revisao: true
                    }
                })
            }

            return await Prisma.veiculo.findMany({
                where: {
                    cpf_responsavel: dados.cpf
                },
                include: {
                    revisao: true
                }
            })

        } catch(erro){
            throw new Error(erro)
        }
    }

    static async deletarveiculo(dadosVeiculo){
        try{
            
            return await Prisma.veiculo.delete({
                where: {
                    placa:  dadosVeiculo.placa
                }
            })

        }catch(erro){
            console.log(erro)
            throw new Error('Falha no serviço para deletar veiculo')
        }
    }

}

export default VeiculoService