import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productAction';

function HomeScreen () {
     
    const dispatch = useDispatch();
     
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;

      
    useEffect(() => {
         
        dispatch(listProducts());
  
    }, []);

    return (
        <div>
            {
                loading ? <LoadingBox />
                    : error ? <MessageBox variant="danger"> {error} </MessageBox> 
                        : ( <div className='row center'>
			    	{ products.map(product => <Product key={product._id} product={product} />)}
			    </div> )
            }
			 
        </div>
    );
}

export default HomeScreen;