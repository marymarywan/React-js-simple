import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { ReactDOM } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';


const styles = StyleSheet.create({
    page: {
        width: 80,
        height: 100,
        textAlign: 'center',
        marginTop: 30,
        fontSize: 30,
    },
    text: {
        color: '#228b22',
    }
});

const MyDocument = ({responseData, ref}) => (
    <div style={{ width: '100%' }} ref={ref}>
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

);

export default MyDocument;
