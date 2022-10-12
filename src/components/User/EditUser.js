import React, { useEffect, useState } from 'react';
import Api from '../../Api.js';

function EditUser() {
    const [users, setUsers] = useState([]);
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

        await Api.put('/usuario/editar/5', data).then((response) => {
            console.log(response.data.data);
        }).catch((error) => {
            if (error.response.data.data) {
                console.log(error.response.data.data);
            }
        });
    }

    useEffect(() => {
        Api.get('/usuario/listar/5').then((response) => {
            setUsers(response.data.data);
            console.log(users);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div class="container">
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded">
                <div class="card-body">
                    Dados Pessoais
                    <hr />
                    {users?.map((user) =>
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
                                            placeholder={user.nome}
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
                                            placeholder={user.cpf}
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
                                            value={user.dataNascimento}
                                            onChange={(e) => handleDatanascimento(e)}
                                            required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="cpf" class="form-label">Gênero</label>
                                        <select class="form-select" name="genero" id="genero" onChange={(e) => handleGenero(e)} required>
                                            <option value={user.genero} selected>{user.genero}</option>
                                            <option value="M">Masculino</option>
                                            <option value="F">Feminio</option>
                                            <option value="I">Prefiro não dizer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3">
                                <button class="btn btn-outline-primary" type="submit">Editar</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EditUser;