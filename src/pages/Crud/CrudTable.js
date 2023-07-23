import axios from "axios";
import { useEffect, useState } from "react";


function CrudTable() {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/customer/get")
                setResponse(res.data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [])

    return(
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
            </tr>
           </thead>
           <tbody>
            {
                response.map((data) =>(
                    <tr>
                        <th scope="row">{data.id}</th>
                        <td>{data.name}</td>
                        <td>{data.address}</td>
                        <td>{data.post}</td>
                        <td>{data.phone}</td>
                        <td>{data.fax}</td>
                        <td>{data.email}</td>
                    </tr>
                ))
            }
           </tbody>
        </table>
    )
}

export default CrudTable;