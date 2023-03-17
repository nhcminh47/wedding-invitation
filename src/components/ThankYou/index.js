import React from 'react'

const ThankYou = (props) => {
    const { flower, flower2 } = props;
    return (
        <section>
            <div className='head'>
                <h2 className='sub-title'>Thank You!</h2>
                <img className='img-block' src={flower2} alt="" width={'15%'} />
            </div>

        </section>
    )
}

export default ThankYou