import '../index.css';
import Button from './Button';

function Main(){
    return (
        <main className="component-showcase">
        <section className="component-group">
          <h2>Variants</h2>
          <div className="component-card">
            {/* <Button variant='secondary' size='large'/>
            <Button icon=':-)' isDisabled text='oupps!'/> */}
            <Button variant='primary' text='primary' />
            <Button variant='secondaty' text='secondary' />
            <Button variant='danger' text='Danger' />
            <Button variant='gradient' text='gradient' />
            <Button variant='outline' text='Outline' />
            {/* <button className="button primary">Primary</button> */}
            {/* <button className="button secondary">Secondary</button> */}
            {/* <button className="button danger">Danger</button> */}
            {/* <button className="button gradient">Gradient</button> */}
            {/* <button className="button outline">Outline</button> */}
          </div>
        </section>

        <section className="component-group">
          <h2>Sizes</h2>
          <div className="component-card">
            <Button variant='primary' size='small' text='Small' />
            <Button variant='secondary' size='medium' text='Medium' />
            <Button variant='danger' size='large' text='Large' />
            {/* <button className="button small primary">Small</button> */}
            {/* <button className="button medium primary">Medium</button> */}
            {/* <button className="button large primary">Large</button> */}
          </div>
        </section>

        <section className="component-group">
          <h2>Button States</h2>
          <div className="component-card">
            <Button variant='primary' text='Default' />
            <Button variant='secondary' text='Disabled' isDisabled />
            {/* <button className="button primary">Default</button>
            <button className="button primary disabled">Disabled</button> */}
          </div>
        </section>

        <section className="component-group">
          <h2>Full Width Button</h2>
          <div className="component-card">
            <Button variant='outline' text='Full width' fullWidth />
            {/* <button className="button secondary full-width">Full Width</button> */}
          </div>
        </section>
      </main>
    )
};

export default Main;