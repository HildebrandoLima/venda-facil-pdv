import React, { useState } from 'react';
import Api from '../../Api.js';

function CreateUser() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');

    const handleNome = (event) => {
        const nome = event.target.value;
        console.log(nome);
        setNome(nome);
    }

    const handleCpf = (event) => {
        const cpf = event.target.value;
        console.log(cpf);
        setCpf(cpf);
    }

    const handleDatanascimento = (event) => {
        const dataNascimento = event.target.value;
        console.log(dataNascimento);
        setDataNascimento(dataNascimento);
    }

    const handleGenero = (event) => {
        const genero = event.target.value;
        console.log(genero);
        setGenero(genero);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            genero: genero
        };

        await Api.post('/usuario/salvar', data).then((response) => {
            console.log(response.data.data);
        }).catch((error) => {
            if (error.response.data.data) {
                console.log(error.response.data.data);
            }
        });
    }

    return (
        <div class="container">
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded">
                <div class="card-body">
                    Dados Pessoais
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="nome" class="form-label">Nome</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        onChange={(e) => handleNome(e)}
                                        required />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="cpf" class="form-label">CPF</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        name="cpf"
                                        id="cpf"
                                        maxlength="14"
                                        onChange={(e) => handleCpf(e)}
                                        required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="dataNascimento" class="form-label">Data de Nascimento</label>
                                    <input
                                        class="form-control"
                                        type="date"
                                        name="dataNascimento"
                                        id="dataNascimento"
                                        onChange={(e) => handleDatanascimento(e)}
                                        required />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="cpf" class="form-label">Gênero</label>
                                    <select class="form-select" name="genero" id="genero" onChange={(e) => handleGenero(e)} required>
                                        <option value="M">Masculino</option>
                                        <option value="F">Feminio</option>
                                        <option value="I">Prefiro não dizer</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-outline-primary" type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;