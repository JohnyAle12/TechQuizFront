import React from 'react'

export const Users = () => {
  return (
    <div className="col-3">
        <div className="card text-center">
            <div className="card-header">
                Johny Prieto
            </div>
            <div className="card-body">
                <h5 className="card-title">Colombia</h5>
                <p className="card-text">
                    ID: 1031156901
                    johny@mailsx.com
                    Calle 123
                    3137881164
                </p>
                <div className="row">
                    <a href="#" className="col btn btn-outline-success m-1">Modificar</a>
                    <a href="#" className="col btn btn-outline-danger m-1">Eliminar</a>
                </div>
            </div>
            <div className="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>
    </div>
  )
}
