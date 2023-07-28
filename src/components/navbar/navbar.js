import './navbar.css'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import GradeView from '../../pages/GradeView/Grade'
import ErrorView from '../../pages/ErrorView/ErrorView'
import CalculatorView from '../../pages/CalculatorView/CalculorView'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import CrudView from '../../pages/CrudView/CrudView'
import PdfViewer from '../../utils/pdfViewer'

function NavbarApplication() {
    let activeClassName = "nav-link active"
    let unactiveClassName = "nav-link"
    return (
        <BrowserRouter>
            <div className='container-fluid m-0 p-0'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Nav className='me-auto'>
                        <NavbarCollapse id="basic-navbar-nav">

                            <NavbarBrand className='pr-3'>marymarywan</NavbarBrand>
                            <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : unactiveClassName}>Grade</NavLink>
                            <NavLink to="Calculator" className={({ isActive }) => isActive ? activeClassName : unactiveClassName}>Calculator</NavLink>
                            <NavLink to="Crud" className={({ isActive}) => isActive ? activeClassName : unactiveClassName}>Crud</NavLink>
                            

                        </NavbarCollapse>
                    </Nav>

                </Navbar>
            </div>

            <Routes>
                <Route path='Pdf' element={<PdfViewer/> } />
                <Route path='/' element={<GradeView />} />
                <Route path='Calculator' element={<CalculatorView />} />
                <Route path='Crud' element={<CrudView />} />
                <Route path='*' element={<ErrorView />} />
            </Routes>
        </BrowserRouter>


    )

}

export default NavbarApplication