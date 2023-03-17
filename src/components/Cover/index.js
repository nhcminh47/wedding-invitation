import React from 'react'

const Cover = (props) => {
    const { cover, flower } = props;
    return (
        <section id='cover'>
            <h1 className='cover__title'>
                Phương Anh
                <img className='cover__title--img' src={flower} alt=""/>
                Công Minh
            </h1>
            {/* <nav className='cover__nav'>
                <ul className='cover__nav__menu'>
                    <li className='cover__nav__menu--item'><a href="#welcome">Welcome</a></li>
                    <li className='cover__nav__menu--item'><a href="#ourstory">Our Story</a></li>
                    <li className='cover__nav__menu--item'><a href="events">Events</a></li>
                    <li className='cover__nav__menu--item'><a href="party">Wedding Party</a></li>
                </ul>
            </nav> */}
            <div className='cover__img'>
                <img src={cover} alt="" />
            </div>
        </section>
    )
}

export default Cover