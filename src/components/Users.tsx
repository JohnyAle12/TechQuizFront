import { User } from '../interfaces/types'

type Props = {
    user: User,
    removeUser: (id: number) => void
}

export const Users = (props: Props) => {
    const user = props.user;

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
                        <a onClick={() => props.removeUser(user.id)} className="col btn btn-outline-danger m-1">
                            <i className="fa fa-trash-o" aria-hidden="true"></i> Eliminar
                        </a>
                    </div>
                </div>
                <div className="card-footer text-body-secondary">
                    { new Date(user.created_at).toLocaleString('en-US') }
                </div>
            </div>
        </div>
    )
}
