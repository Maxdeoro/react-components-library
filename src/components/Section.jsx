import Button from './Button';

function Section({handleClick,children}) {
    return (
        <section className='component-group'>
            <h2>Sizes</h2>
            <div className='component-card'>
                <Button variant='primary' size='small' text='Small' onClick={handleClick}/>
                <Button variant='secondary' size='medium' text='Medium' onClick={handleClick}/>
                <Button variant='danger' size='large' text='Large' onClick={handleClick}/>
                {children}
            </div>
        </section>
    )
};

export default Section;