import React, {Component} from 'react';
import {SelectButton} from '../../components/selectbutton/SelectButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SelectButtonDemo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value1: null,
            value2: null
        };
    }
    
    render() {
        let options = [
            {label: 'Apartment', value: 'Apartment'},
            {label: 'House', value: 'House'},
            {label: 'Studio', value: 'Studio'}
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single</h3>
                    <SelectButton value={this.state.value1} options={options} onChange={(event) => this.setState({value1: event.value})} />
                    <p>Selected Value: {this.state.value1}</p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.value2} multiple={true} options={options} onChange={(event) => this.setState({value2: event.value})} />
                    <p>Selected Values: {this.state.value2 && this.state.value2.map((val) => val)}</p>
                </div>

                <SelectButtonDoc></SelectButtonDoc>
            </div>
        );
    }
}

class SelectButtonDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {SelectButton} from 'primereact/components/selectbutton/SelectButton';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>SelectButton requires a value, collection of options with label-value pairs and an onChange event to provide the selected value.</p>
                    
<CodeHighlight className="html">
{`
<SelectButton value={this.state.val} options={this.options} onChange={(e) => this.setState({val: event.value})}></SelectButton>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
constructor(props) {
    super(props);
    this.state = {
        val: null
    };
    
    this.options = [
        {label: 'Apartment', value: 'Apartment'},
        {label: 'House', value: 'House'},
        {label: 'Studio', value: 'Studio'}
    ];
}
`}
</CodeHighlight>

            <h3>Multiple</h3>
            <p>SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. In multiple case, model property should be an array.</p>
<CodeHighlight className="html">
{`
<SelectButton value={this.state.values} options={this.options} onChange={(e) => this.setState({val: event.value})}></SelectButton>

`}
</CodeHighlight>

            <h3>Attributes</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                        </tr>
                         <tr>
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display as the available options.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, allows selecting multiple values.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be disabled.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>dataKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td>A property to uniquely identify a value in options.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onChange</td>
                            <td>event.originalEvent: browser event <br />
                                event.value: single value or an array of values that are selected.</td>
                            <td>Callback to invoke on state change.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/selectbutton" className="btn-viewsource" target="_blank">
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="javascript">
{`
import React, {Component} from 'react';
import {SelectButton} from 'primeng/components/selectbutton/SelectButton';

export class SelectButtonDemo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value1: null,
            value2: null
        };
    }
    
    render() {
        let options = [
            {label: 'Apartment', value: 'Apartment'},
            {label: 'House', value: 'House'},
            {label: 'Studio', value: 'Studio'}
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single</h3>
                    <SelectButton value={this.state.value1} options={options} onChange={(event) => this.setState({value1: event.value})} />
                    <p>Selected Value: {this.state.value1}</p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.value2} multiple={true} options={options} onChange={(event) => this.setState({value2: event.value})} />
                    <p>Selected Values: {this.state.value2 && this.state.value2.map((val) => val)}</p>
                </div>
            </div>
        );
    }
}

`}
</CodeHighlight>
        </TabPanel>
    </TabView>
</div>
        );
    }
}