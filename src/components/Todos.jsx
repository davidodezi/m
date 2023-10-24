import Card from "../shared/card";
import SecondaryButton from "./Secondary";
import { useState } from "react";

function Todos({beShown,deletedHandler}) {
    const [done,setDone] = useState(false);

    const doneHandler = () => {
        setDone(!done);
    }



    return (
        <Card addin={true}>
            <h3 className={done?'lined':undefined}>{beShown.textTodo}</h3>
            <div className="btnDiv">
                <SecondaryButton onClick={doneHandler} btnClass={'done'}>Done</SecondaryButton>
                <SecondaryButton onClick={()=>deletedHandler(beShown.id)} btnClass={'deleted'}>Delete</SecondaryButton>
            </div>
        </Card>
    );
}

export default Todos;