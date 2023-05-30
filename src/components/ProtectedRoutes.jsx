import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoutes = () => {

    let accessToken = JSON.parse(localStorage.getItem('accessToken'))

    return (
        accessToken ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectedRoutes