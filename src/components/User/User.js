import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Api from '../../Api.js';

function User() {
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState([]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    useEffect(() => {
        Api.get('/usuario/listar/5').then((response) => {
            setUser(response.data.data);
            console.log(user);
        });
    }, []);

    return (
        <div class="container">
            <div class="card mt-3 shadow p-3 mb-5 bg-white rounded">
                <div class="card-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        Dados Pessoais
                        <hr />
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <Form.Group md="4" controlId="validationMatricula">
                                        <Form.Label>
                                            Nome
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nome"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Campo obrigatório.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <Form.Group md="4" controlId="validationCPF">
                                        <Form.Label>
                                            CPF
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="cpf"
                                            maxLength="14"
                                            pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Campo obrigatório.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <Form.Group md="4" controlId="validationDataNascimento">
                                        <Form.Label>
                                            Data De Nascimento
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="DataNascimento"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Campo obrigatório.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <Form.Group md="4" controlId="validationMatricula">
                                        <Form.Label>
                                            Gênero
                                        </Form.Label>
                                        <Form.Select required>
                                            <option value="M">Masculino</option>
                                            <option value="F">Feminio</option>
                                            <option value="I">Prefiro não dizer</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Campo obrigatório.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-outline-primary" type="submit">Cadastrar</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default User;