import axios from "axios";
import { useEffect, useState,  React, createRef } from "react";
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import MyDocument from "../../utils/pdf";
import { Button } from "react-bootstrap";
import handleUpdate from "./CrudForm";

function CrudTable({updateUsestate}) {
    const [responseData, setResponse] = useState([]);
    const componentPDF = useRef().current;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/customer")
                setResponse(res.data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [])

    const deleteData = async (customerId) => {
        try {
            await axios.delete(`http://localhost:8800/api/customer/${customerId}`)
            console.log(`Data with Id ${customerId} has been deleted"`)
        } catch (err) {
            console.log(err)
        }
    }

    const updateData = (event, { dataId, dataName }) => {
        event.preventDefault();
           updateUsestate.forEach(element => {
               element.id(dataId),
               element.name(dataName)
           });
    
    }
    
    return (
        <div  style={{ width: '100%' }}>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">รหัสลูกค้า</th>
                        <th scope="col">ชื่อลูกค้า</th>
                        <th scope="col">ที่อยู่ลูกค้า</th>
                        <th scope="col">รหัสไปรษณีย์</th>
                        <th scope="col">เบอร์โทรศัพท์</th>
                        <th scope="col">เบอร์แฟกซ์</th>
                        <th scope="col">อีเมล์</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        responseData.map((data, index) => (
                            <tr key={index}>
                                <th scope="row" key={index}>{data.id}</th>
                                <td key={index}>{data.name}</td>
                                <td key={index}>{data.address}</td>
                                <td key={index}>{data.post}</td>
                                <td key={index}>{data.phone}</td>
                                <td key={index}>{data.fax}</td>
                                <td key={index}>{data.email}</td>
                                <td key={index}>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-warning" onClick={(event) => updateData(event, { dataId: data.id,  dataName : data.name })}> แก้ไข</button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-danger" onClick={() => deleteData(data.id)}> ลบ</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        <div>
        {}
        <ReactToPrint
          trigger={() => <Button className="btn btn-success"  >Print this out!</Button>}
          content={() => componentPDF}
        />
        {}
      </div>

        </div>

    )
}

export default CrudTable;