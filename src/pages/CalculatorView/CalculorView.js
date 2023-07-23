import { useState } from "react"

function CalculatorView() {

    const [numberOne, setNumberOne] = useState('');
    const [numberTwo, setNumberTwo] = useState('');
    const [selectedOperator, setSelectedOperator] = useState('');
    const [result, setResult] = useState('');


    const handleData = (e) =>{
      e.preventDefault();
      
      for (let i =0; i < selectedOperator.length; i++){
        const operator = [
            "1", "2", "3", "4", "5"
          ]
        if (operator.includes(selectedOperator[i])){
            console.log(selectedOperator);
            setResult(calculator(numberOne, numberTwo, selectedOperator));
        } else {
            alert("กรุณาเลือกสิ่งที่อยู่ใน Menu เท่านั้น!");
            return
        }
      }
    }

    function calculator(numberOne, numberTwo, operator){
        numberOne = parseInt(numberOne);
        numberTwo = parseInt(numberTwo);
        switch(operator){
            case "1":
                return numberOne + numberTwo;
            case "2":
                return numberOne - numberTwo;
            case "3":
                return numberOne * numberTwo;
            case "4":
                return numberOne / numberTwo;
            case "5":
                return numberOne % numberTwo;
            default:
                return "Incorrect";
        }
    }

    return (
        <form>
            <div className="container m-5">
                <div className="row mt-3" >
                    <div className="col-2">
                        <label htmlFor="numberOneInput" className="col-form-label">Number 1 : </label>
                    </div>
                    <div className="col-3">
                        <input className='form-control' id='numberOneInput' onChange={(e)=>setNumberOne(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <label htmlFor="numberTwoInput" className="col-form-label">Number 2 : </label>
                    </div>
                    <div className="col-3">
                        <input className='form-control' id='numberTwoInput' onChange={(e)=>setNumberTwo(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <p>Calculator Menu : </p>
                        <p>1. +</p>
                        <p>2. -</p>
                        <p>3. *</p>
                        <p>4. /</p>
                        <p>5. %</p>
                    </div>
                    <div className="col" />
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <p>Choose Menu : </p>
                    </div>
                    <div className="col-3" >
                        <input className='form-control' id='nameInput' onChange={(e)=>setSelectedOperator(e.target.value)}/>
                    </div>
                </div>
                <div className="mt-3">
                <button type="button" className="btn btn-primary" onClick={handleData}>Calculate</button>
                </div>
                <div className="mt-3">
                   <p>
                    Result : {result}
                   </p>
                </div>
            </div>
        </form>
    )
}

export default CalculatorView