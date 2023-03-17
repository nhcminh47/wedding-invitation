import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Events = (props) => {
    const { flower, flower2 } = props;
    return (
        <section>
            <div className='sub__title'>
                <h2>Events</h2>
            </div>
            <div className='dv__img2'>
                <img src={flower2} alt="" />
            </div>
            <div className='content'>
                <VerticalTimeline lineColor={'rgb(247, 236, 226)'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(247, 236, 226)', color: '#a2b678' }}
                        contentArrowStyle={{ borderRight: '7px solid  #f7e3d1' }}
                        date="2011 - present"
                        iconStyle={{ background: '#a2b678', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faStar} />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(247, 236, 226)', color: '#a2b678' }}
                        contentArrowStyle={{ borderRight: '7px solid  #f7e3d1' }}
                        date="2010 - 2011"
                        iconStyle={{ background: '#a2b678', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faStar} />}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(247, 236, 226)', color: '#a2b678' }}
                        contentArrowStyle={{ borderRight: '7px solid  #f7e3d1' }}
                        date="2008 - 2010"
                        iconStyle={{ background: '#a2b678', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faStar} />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Events