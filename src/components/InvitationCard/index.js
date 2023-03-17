import React from 'react'

const InvitationCard = (props) => {
    const { flower, flower2 } = props;
    return (
        <section>
            
            <div className='sub__title'>
                <h2>Save the date</h2>
            </div>
            <div className='dv__img2'>
                <img src={flower2} alt="" />
            </div>
            <div className='content'>
                <p>wedding ceremony</p>
                <p>5:00 PM - 7.00 PM April 29, 2023</p>
                <p><a href="https://goo.gl/maps/b9Pf9MpzqQMHhs7t5">Hung Loc Phat Restaurant</a> </p>
            </div>
        </section>
    )
}

export default InvitationCard