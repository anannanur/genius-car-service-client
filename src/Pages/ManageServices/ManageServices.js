import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services,setServices] = useServices();
    const handleButton = id =>{
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            fetch((`http://localhost:5000/service/${id}`),{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div className='mx-auto w-50'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={()=> handleButton(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;