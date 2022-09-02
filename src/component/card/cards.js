import React from 'react';
import {Meta} from "antd/es/list/Item";

const Card = (props) => {
    return(
        <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

export default Card;
