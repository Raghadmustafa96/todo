import { PaginationContext } from '../context/paginationPage'
import React, { useContext } from 'react';
import {Form} from 'react-bootstrap';


function ChangePage() {

    const pagination = useContext(PaginationContext);

    // handle item/page value
    let ChangePageHandler = (e) => {
        pagination.setItem(e.target.value)
    }


    return (
        <>
            <Form.Control as="select" size="lg" style={{width:'10rem'}} custom onChange={ChangePageHandler}>
                <option> items/page </option>
                <option value='3'> 3 </option>
                <option value='4'> 4 </option>
                <option value='5'> 5 </option>
            </Form.Control>
        </>
    );

}

export default ChangePage;