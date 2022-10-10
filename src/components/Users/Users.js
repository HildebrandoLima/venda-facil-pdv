import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Api.get('/usuario/listar').then((response) => {
            setUsers(response.data.data);
            console.log(users);
        });
    }, []);

    return (
        <div>
            <div class="container">
                <div class="card mt-3 shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <h1>Usuários</h1>
                        <div class="table-responsive">
                            <table class="table table-bordered border-black table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">CPF</th>
                                        <th scope="col">Data de Nascimento</th>
                                        <th scope="col">Genêro</th>
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
                                                <td>
                                                    <button type="submit" class="btn btn-outline-primary">Editar</button>
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