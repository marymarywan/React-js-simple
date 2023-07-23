import axios from "axios";
import { useEffect, useState } from "react";


function CrudTable() {
    const [response, setResponse] = useState([]);

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
                response.map((data, index) =>(
                    <tr key={index}>
                        <th scope="row" key={index}>{data.id}</th>
                        <td key={index}>{data.name}</td>
                        <td key={index}>{data.address}</td>
                        <td key={index}>{data.post}</td>
                        <td key={index}>{data.phone}</td>
                        <td key={index}>{data.fax}</td>
                        <td key={index}>{data.email}</td>
                    </tr>
                ))
            }
           </tbody>
        </table>
    )
}

export default CrudTable;