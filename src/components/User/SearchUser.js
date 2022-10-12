import Form from 'react-bootstrap/Form';

function SearchUser() {
  return (
    <div>
      <Form>
        <div class="row">
          <div class="col">
            <Form.Group md="4">
              <Form.Control
                type="text"
                name="cpf"
                placeholder="Digite o CPF"
                required
              />
            </Form.Group>
          </div>
          <div class="col">
            <button class="btn btn-outline-primary" type="submit">Buscar</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default SearchUser;