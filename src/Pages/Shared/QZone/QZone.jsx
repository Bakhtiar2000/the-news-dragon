import React from 'react';
import qZone1 from'../../../assets/qZone1.png'
import qZone2 from'../../../assets/qZone2.png'
import qZone3 from'../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center my-4 p-3 rounded'>
            <h3>Q-Zone</h3>
            <div>
                <img className='img-fluid' src={qZone2} alt="" />
                <img className='img-fluid' src={qZone3} alt="" />
                <img className='img-fluid' src={qZone1} alt="" />
            </div>
        </div>
    );
};

export default QZone;