import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function CreateUser() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div class="form-group">
            <div class="col-md-6 offset-md-3">
                <Form.Group md="4" controlId="validationMatricula">
                    <Form.Label>
                        Matrícula &nbsp;&nbsp;&nbsp;
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Matricula">
                            ?
                        </span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="matricula"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Campo obrigatório.
                    </Form.Control.Feedback>
                </Form.Group>
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6 offset-md-3">
                <Form.Group md="4" controlId="validationSenha">
                    <Form.Label>
                        Senha &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Matricula">
                            ?
                        </span>
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name="senha"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Campo obrigatório.
                    </Form.Control.Feedback>
                </Form.Group>
            </div>
        </div>
        <div class="col-md-6 offset-md-3 mt-3">
            <button class="btn btn-outline-primary" type="submit">Fazer Login</button>
        </div>
    </Form>
}

export default CreateUser;