import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Users from "../User/Users";

function Sale() {
    const [show, setShowUsers] = useState(false);

    return (
        <div>
            <div class="container">
                <Button variant="primary" className="mt-3" onClick={() => setShowUsers(true)}>
                    Usuários
                </Button>

                <Modal
                    show={show}
                    onHide={() => setShowUsers(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="custom-modal-Users"
                    className="modal-dialog modal-xl"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="custom-modal-Users">
                            Usuários
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Users />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default Sale;