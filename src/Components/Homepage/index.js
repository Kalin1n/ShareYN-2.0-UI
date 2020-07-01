import React from "react";
import Basicpage from "../Basicpage/index";
import {Typography, Divider} from "antd"
const {Title, Text} = Typography;
 
function Homepage(){
    return(
        <Basicpage>
            <section> 
              <Title>Share YN 2.0 </Title>  
              <Text mark>На данный момент всё что здесь есть, находится в разработке и может работать по разному.</Text>
            </section>
              <Divider/>
            <Text>Markdown rules : <a href="https://www.markdownguide.org/basic-syntax/" target="__blank">https://www.markdownguide.org/basic-syntax/ </a> </Text>
            <div> 
                <Text>If you had some trouble or advice for this app Contact me : </Text>   
            </div>
        </Basicpage>
    )
}

export default Homepage