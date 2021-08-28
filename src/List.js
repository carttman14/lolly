
import React,{useState} from 'react'

import data from './data';

const List = () => {


    const [faces,setFaces]=useState(data);

    const davyData=[
           {
        id:7,
        name:'davy',
        description:'I love you so much!!!',
        img:'https://scontent.fclo5-1.fna.fbcdn.net/v/t1.18169-9/15193683_1751751161753009_1527656728522201649_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFNg5Ip9u-SsudigQR0sc4cPtjyVqn29Dk-2PJWqfb0OVssI0LQSgpSqf1qL8X-7Wj3VZ50ihd8WNlOTWbh_oq3&_nc_ohc=fMrGT9vQIUUAX_uPcXd&_nc_ht=scontent.fclo5-1.fna&oh=674e40eee2c6763415e09ca99be5aee3&oe=614FF6CF'
    }
    ]

    return (
        <div className='pic-container'>
            {
             faces.map((face)=>{
                 const {id,name,description,img,}=face;

                 return (


                     <div key={id}>
                     <h3>{name}</h3>
                     <h4>{description}</h4>
                     <img src={img} alt={name}/>

                 </div>

                )
             })
            }
            <button className='btn btn-danger btn-block mt-3 mb-3' onClick={()=>{setFaces(davyData)}}>Click me</button>
        </div>
    )
}

export default List;
