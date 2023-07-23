import './Grade.css'
import React, { useState, useFecth, useEffect } from 'react'
import { grader } from '../../utils/Grade';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/input/input';

function GradeView() {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [score, setScore] = useState('');

  const [nameResult, setNameResult] = useState('');
  const [studentIdResult, setStudentIdResult] = useState('');
  const [scoreResult, setScoreResult] = useState('');
  const [gradeResult, setGradeResult] = useState('');

  useEffect(() => {
    const grade = grader(scoreResult);
    setGradeResult(grade);
  }, [scoreResult]);

  const handleData = () =>{
    setNameResult(name);
    setStudentIdResult(studentId);
    setScoreResult(score);

    setName('');
    setStudentId('');
    setScore('');
  }

  const validation =(e)=> {
    e.preventDefault();
    if (name.length == 0  || studentId.length == 0  || score.length == 0 ) {
      alert('กรุณาป้อนข้อมูล');
      return
    } else {
      handleData();
    }
  }

  return (
    <center>
      <div className='Grade mt-5'>
        <form  >
          <h1>คำนวนเกรด</h1>
          <label htmlFor="nameInput" className="col-form-label">ชื่อนามสกุล</label>
          <input className='form-control' id='nameInput' onChange={(e) => setName(e.target.value)} />
          <label htmlFor="studentIdInput" className="col-form-label">รหัสนักศึกษา</label>
          <input className='form-control' id='studentIdInput' onChange={(e) => setStudentId(e.target.value)} />
          <label htmlFor="scoreInput" className="col-form-label">คะแนน</label>
          <input className='form-control' id='scoreInput' onChange={(e) => setScore(e.target.value)} />
          <button type="submit" className="btn btn-success mt-2" onClick={validation}>คำนวน</button>
          <div className='m-3'></div>
          <p>ชื่อของคุณคือ : {nameResult}</p>
          <p>รหัสนักศึกษาของคุณคือ : {studentIdResult} </p>
          <p>คะแนนของคุณคือ : {scoreResult} </p>
          <p>เกรดของคุณคือ : {gradeResult} </p>
        </form>
      </div>
    </center>


  )
}

export default GradeView
