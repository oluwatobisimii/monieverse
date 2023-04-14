import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoutes = () => {

    let isAuthenticated = JSON.parse(localStorage.getItem('isLogged'))

    return (
        isAuthenticated === true ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectedRoutes