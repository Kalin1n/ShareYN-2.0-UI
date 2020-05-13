import React from 'react';
import BasicPage from "../Basicpage/index.js";

import WritePageEditor from "./index.js"
function WritePageContainer (props){

    return(
        <BasicPage>
            <WritePageEditor/>
        </BasicPage>
    )
}

export default WritePageContainer;