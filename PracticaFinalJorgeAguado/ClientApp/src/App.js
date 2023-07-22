import { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalTarea from "./components/ModalTarea"
import TablaTarea from "./components/TablaTarea"
import './App.css';

const App = () => {

    const [tareas, setTareas] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null)

    const mostrarTareas = async () => {

        const response = await fetch("api/tarea/Lista");

        if (response.ok) {
            const data = await response.json();
            setTareas(data)
        } else {
            console.log("Error en los datos de la lista")
        }

    }

    useEffect(() => {
        mostrarTareas()
    }, [])

    const guardarTarea = async (tarea) => {

        const response = await fetch("api/tarea/Guardar", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(tarea)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarTareas();
        }

    }

    const editarTarea = async (tarea) => {

        const response = await fetch("api/tarea/Editar", {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(tarea)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarTareas();
        }

    }

    const eliminarTarea = async (id) => {

        var respuesta = window.confirm("Desea eliminar la tarea?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/tarea/Eliminar/" + id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarTareas();
        }

    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Tareas</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)}>Nueva Tarea</Button>
                            <hr></hr>
                            <TablaTarea data={tareas}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarTarea={eliminarTarea}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalTarea
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarTarea={guardarTarea}
                editar={editar}
                setEditar={setEditar}
                editarTarea={editarTarea}
            />
        </Container>
    )
}

export default App;