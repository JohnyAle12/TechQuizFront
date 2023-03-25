import { User } from '../interfaces/types'

export const Users = (user: User) => {
  return (
    <div className="col-3 mt-3">
        <div className="card text-center">
            <div className="card-header">
                { user.name } { user.lastname }
            </div>
            <div className="card-body">
                <h5 className="card-title">Colombia</h5>
                <p className="card-text">
                    <i className="fa fa-id-card-o" aria-hidden="true"></i> { user.identification } <br/>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i> { user.email }<br/>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> { user.address } <br/>
                    <i className="fa fa-mobile" aria-hidden="true"></i> { user.mobile }
                </p>
                <div className="row">
                    <a href="#" className="col btn btn-outline-success m-1">Modificar</a>
                    <a href="#" className="col btn btn-outline-danger m-1">Eliminar</a>
                </div>
            </div>
            <div className="card-footer text-body-secondary">
                { new Date(user.created_at).toLocaleString('en-US') }
            </div>
        </div>
    </div>
  )
}
