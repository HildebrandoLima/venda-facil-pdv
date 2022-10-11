import Form from 'react-bootstrap/Form';

function SearchUser() {
  return (
    <div>
      <Form>
        <div class="form-group">
          <div class="col-md-6 offset-md-3">
            <Form.Group md="4">
              <Form.Control
                type="text"
                name="cpf"
                placeholder="Digite o CPF"
                required
              />
            </Form.Group>
          </div>
        </div>
        <div class="col-md-6 offset-md-3 mt-3">
          <button class="btn btn-outline-primary" type="submit">Buscar</button>
        </div>
      </Form>
    </div>
  );
}

export default SearchUser;