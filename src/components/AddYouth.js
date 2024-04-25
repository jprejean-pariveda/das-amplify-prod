import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddYouthButton, YouthCreateForm } from '../ui-components';
import useStore from '../store/store';
import { addYouths } from '../services/api.service';
import { EntityStatus } from '../enums/entity-status.enum';

function AddYouth({youth, refreshData}) {
  const [show, setShow] = React.useState(false);
  const store = useStore();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updatedFields, setUpdatedFields] = React.useState(); 

  const onSubmitClick = async () => {
    const youthData = {
      ...updatedFields,
      createdDate: new Date(),
      status: EntityStatus.Active,
    };
    console.log(youthData);
    try {
      await addYouths([youthData], store.currentSite.id);
    } catch (error) {
      console.log('creation error', error);
    }
    await refreshData();
    setShow(false);
  }

  const onFieldUpdate = (event) => {
    setUpdatedFields(event);
  }

  const formOverrides = {
    SubmitButton: {
      type: 'button',
      onClick: onSubmitClick,
    },
  };

  return (
    <>
      <AddYouthButton overrides={{ AddYouthButton: { onClick: handleShow, justifyContent: "flex-end" }}}></AddYouthButton>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Youth</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouthCreateForm onCancel={handleClose} youth={youth} overrides={formOverrides} onChange={onFieldUpdate}></YouthCreateForm>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddYouth;