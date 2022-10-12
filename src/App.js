import React, { useState } from 'react';
import logo from './assets/logo.png';
import Form from 'react-bootstrap/Form';

function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <div class="container">
        <center><img src={logo} alt="logo" className="img-responsive mt-5" />
          <h4 class="mt-3">Acesso ao Sistema</h4>
        </center>

        <div class="card mt-3 shadow p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div class="form-group">
                <div class="col-md-6 offset-md-3">
                  <Form.Group md="4" controlId="validationMatricula">
                    <Form.Label>
                      Matrícula
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
                      Senha
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
          </div>
        </div>
        <p class="text-center mt-3"><span><a href="">Entrar em contato com o suporte.</a></span></p>
      </div>
    </div>
  );
}

export default App;
