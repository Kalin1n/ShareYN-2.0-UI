import React from "react";
import Basicpage from "../Basicpage/index.js";
import SigninContainer from "./Signin/signInContainer.js"
import RegisterContainer from "./Register/registerContainer.js"
import {Row, Col} from "antd"


function Authpage(){
    return(
        <Basicpage>
            <Row>
                <Col span={10} offset={1}>
                    <SigninContainer/>
                </Col>
                <Col span={10} offset={2}>
                    <RegisterContainer/>
                </Col>        
            </Row>
        </Basicpage>
    )
}

export default Authpage;