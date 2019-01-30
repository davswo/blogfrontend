import React, {Component} from 'react';
import Blogs from './blog/Blogs'
import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faIgloo} from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
    render() {
        return (
            <div>
                <Blogs/>
            </div>
        );
    }
}

export default App;
