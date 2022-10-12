import React, { useEffect, useState } from 'react';
import SearchUser from './SearchUser';
import Api from '../../Api.js';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Api.get('/usuario/listar').then((response) => {
            setUsers(response.data.data);
            console.log(users);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <div class="container">
                <div class="card mt-3 shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <SearchUser />

                        <div class="table-responsive">
                            <table class="table table-bordered border-black table-striped table-hover mt-2">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">CPF</th>
                                        <th scope="col">Data de Nascimento</th>
                                        <th scope="col">Gênero</th>
                                        <th scope="col">Telefone</th>
                                        <th scope="col">Rua/Av</th>
                                        <th scope="col">Bairro</th>
                                        <th scope="col">Cidade</th>
                                        <th scope="col">UF</th>
                                        <th scope="col">CEP</th>
                                        <th scope="col">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.map((user) =>
                                            <tr>
                                                <th scope="row">{user.usuarioId ? user.usuarioId : 0}</th>
                                                <td>{user.nome ? user.nome : ''}</td>
                                                <td>{user.cpf ? user.cpf : ''}</td>
                                                <td>{user.dataNascimento ? user.dataNascimento : ''}</td>
                                                <td>{user.genero ? user.genero : ''}</td>
                                                <td>(ddd)numero</td>
                                                <td>Rua/Av/: nome</td>
                                                <td>bairro</td>
                                                <td>cidade</td>
                                                <td>uf</td>
                                                <td>cep</td>
                                                <td>
                                                    <button type="submit" class="btn btn-outline-primary">Detalhes</button>
                                                    &nbsp;
                                                    <button type="submit" class="btn btn-outline-success">Editar</button>
                                                    &nbsp;
                                                    <button type="submit" class="btn btn-outline-danger">Remover</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;