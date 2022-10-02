
import { Link } from "react-router-dom"

const Header = () => {

  return (
    <div className = "navbar navbar-expand-ls navbar-dark bg-primary justify-content-between">
        <div className = "container">
            <h1>
                <Link
                    to = {'/'}
                    className = "text-light"
                >
                    CRUD - React, Redux, Rest API & Axios 
                </Link>
            </h1>
        </div>

        <Link
            to = {"/productos/nuevo"}
            className = "btn btn-danger nuevo-post d-block d-md-inline-block"
        >Agregar Producuto &#43; </Link>
      
    </div>
  )
}

export default Header
