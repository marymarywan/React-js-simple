import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pdfFile from "../../utils/pdf";
import CrudTable from "./CrudTable";

function CrudForm() {
    const [customerId, setCustomerId] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerPostNumber, setCustomerPostNumber] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [customerFaxNumber, setCustomerFaxNumber] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();


    const deleteData = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8800/api/customer/${customerId}`)
            navigate('/Crud')
            console.log(`Data with Id ${customerId} has been deleted"`)
        } catch (err) {
            console.log(err)
        }
    }

    const handleData = (e) => {
        e.preventDefault();
        console.log(customerId)
    }



    const saveCustomer = async (e) => {
        e.preventDefault();

        const data = {
            id: customerId,
            name: customerName,
            address: customerAddress,
            post: customerPostNumber,
            phone: customerPhoneNumber,
            fax: customerFaxNumber,
            email: customerEmail,
        }

        try {
            await axios.post(`http://localhost:8800/api/customer`, data)
            navigate('/Crud')
            console.log(`Data has been added"`)
        } catch (error) {
            console.log(error)
        }

    }

    const handleUpdate = ({ customerId }) => {
        setCustomerId = customerId
    }

    return (
        <form>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="customerId" className="col-form-label">รหัสลูกค้า</label>
                        <input className='form-control' id="customerId" placeholder="รหัสลูกค้า" type="text" onChange={(e) => setCustomerId(e.target.value)} name="customerId" value={customerId} />
                    </div>
                    <div className="col">
                        <label htmlFor="customerName" className="col-form-label">ชื่อลูกค้า</label>
                        <input className='form-control' id="customerName" placeholder="ชื่อลูกค้า" type="text" onChange={(e) => setCustomerName(e.target.value)} value={customerName} />
                    </div>

                </div>
                <div className="col mt-3">
                    <label htmlFor="customerAddress" className="col-form-label">ที่อยู่ลูกค้า</label>
                    <textarea className='form-control' id="customerAddress" placeholder="ที่อยู่ลูกค้า" type="text" onChange={(e) => setCustomerAddress(e.target.value)} value={customerAddress} />
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="customerPostNumber" className="col-form-label">รหัสไปรษณีย์</label>
                        <input className='form-control' id="customerPostNumber" placeholder="รหัสไปรษณีย์" type="text" onChange={(e) => setCustomerPostNumber(e.target.value)} value={customerPostNumber} />
                    </div>
                    <div className="col">
                        <label htmlFor="customerPhoneNumber" className="col-form-label">เบอร์โทรศัพท์</label>
                        <input className='form-control' id="customerPhoneNumber" placeholder="เบอร์โทรศัพท์" type="text" onChange={(e) => setCustomerPhoneNumber(e.target.value)} value={customerPhoneNumber} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="customerFax" className="col-form-label">เบอร์แฟกซ์</label>
                        <input className='form-control' id="customerFax" placeholder="เบอร์แฟกซ์" type="text" onChange={(e) => setCustomerFaxNumber(e.target.value)} value={customerFaxNumber} />
                    </div>
                    <div className="col">
                        <label htmlFor="customerEmail" className="col-form-label">อีเมล์</label>
                        <input className='form-control' id="customerEmail" placeholder="อีเมล์" type="text" onChange={(e) => setCustomerEmail(e.target.value)} value={customerEmail} />
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col">
                        <button type="submit" className="btn btn-primary" style={{ width: "15rem" }} onClick={saveCustomer}>บันทึก</button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-warning" style={{ width: "15rem", color: "white" }} onClick={() => handleUpdate()}>แก้ไข</button>
                    </div>
                    <div className="col">
                        <button type="submit" style={{ width: "15rem" }} onClick={pdfFile} className="btn btn-danger">ลบ</button>
                    </div>
                </div>
            </div>
            <CrudTable updateUsestate={[{ "id": setCustomerId, "name": setCustomerName, "address": setCustomerAddress, "postnumber": setCustomerPostNumber, "fax": setCustomerFaxNumber, "email": customerEmail, }]} />
        </form>


    )
}

export default CrudForm;