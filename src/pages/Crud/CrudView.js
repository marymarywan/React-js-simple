import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

function CrudView() {
    return(
        <center>
            <div className="container pe-5 ps-5">
                <CrudForm />
                <div className="mt-5" />
                <CrudTable />
            </div>
        </center>
    )
}

export default CrudView;