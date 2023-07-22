import { Button, Table } from "reactstrap"

const TablaTarea = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarTarea }) => {

    const enviarDatos = (tarea) => {
        setEditar(tarea)
        setMostrarModal(!mostrarModal)
    }

    return (

        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th className="mobile-hidden-column">Descripción</th>
                    <th className="columnIsCompleted">Esta completada?</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td className="mobile-hidden-column">{item.description}</td>
                                <td>{item.isCompleted ? 'Yes' : 'No'}</td>
                                <td>
                                    <div className="d-flex flex-nowrap gap-2">
                                        <Button color="primary" size="sm" onClick={() => enviarDatos(item)}>Editar</Button>
                                        <Button color="danger" size="sm" onClick={() => eliminarTarea(item.id)}>Eliminar</Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )

}

export default TablaTarea;