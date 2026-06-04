import '../index.css';
import Button from './Button';
import Section from './Section';

function Main({handleClick,children}){
    return (
      <main className="component-showcase">
        <section className="component-group">
          <h2>Variants</h2>
          <div className="component-card">
            <Button ><span>:-((</span></Button>
            <Button variant='primary' text='primary' onClick={handleClick}/>
            <Button variant='secondaty' text='secondary' />
            <Button variant='danger' text='Danger' />
            <Button variant='gradient' text='gradient' />
            <Button variant='outline' text='Outline' />
          </div>
        </section>
        {children}
        <section className="component-group">
          <h2>Button States</h2>
          <div className="component-card">
            <Button variant='primary' text='Default' />
            <Button variant='secondary' text='Disabled' isDisabled />
          </div>
        </section>

        <section className="component-group">
          <h2>Full Width Button</h2>
          <div className="component-card">
            <Button variant='outline' text='Full width' fullWidth />
          </div>
        </section>
      </main>
    )
};

export default Main;