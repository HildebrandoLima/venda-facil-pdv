import React, { useEffect, useState } from 'react';
import Api from '../../Api';
import SearchUser from './SearchUser';

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Api.get('/usuario/listar').then((response) => {
            setUsers(response.data.data);
            console.log(users);
        });
    }, []);

    return (
        <div>
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
    );
}

export default User;