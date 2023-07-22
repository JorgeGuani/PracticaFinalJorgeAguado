import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloTarea = {
    id: 0,
    name: "",
    description: "",
    isCompleted: 0
}

const ModalTarea = ({ mostrarModal, setMostrarModal, guardarTarea, editar, setEditar, editarTarea }) => {

    const [tarea, setTarea] = useState(modeloTarea);

    const actualizaDato = (e) => {
        setTarea(
            {
                ...tarea,
                [e.target.name]: e.target.name != 'isCompleted' ? e.target.value : (e.target.checked ? 1 : 0)
            }
        )
    }

    const enviarDatos = () => {
        if (!tarea.name) {
            document.getElementById('name').focus();
            return;
        }
        if (!tarea.description) {
            document.getElementById('description').focus();
            return;
        }
        if (tarea.id == 0) {
            guardarTarea(tarea)
        } else {
            editarTarea(tarea)
        }

    }

    useEffect(() => {
        if (editar != null) {
            setTarea(editar)
        } else {
            setTarea(modeloTarea)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {tarea.id == 0 ? "Nueva Tarea" : "Editar Tarea"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="name" id="name" onChange={(e) => actualizaDato(e)} value={tarea.name} maxLength="50"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripción</Label>
                        <Input type="textarea" name="description" id="description" onChange={(e) => actualizaDato(e)} value={tarea.description} maxLength="255" />
                    </FormGroup>
                    <FormGroup>
                        <Label check>
                            <Input type="checkbox" name="isCompleted" id="isCompleted" onChange={(e) => actualizaDato(e)} checked={tarea.isCompleted} />{' '}
                            Esta completada?
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>

    )

}

export default ModalTarea;