import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

function CrudView() {
    return(
        <center>
        <div className="container pe-5 ps-5" style={{width:"60%"}}>
                <CrudForm />
                <div className="mt-5" />
            </div>
        </center>
    )
}

export default CrudView;