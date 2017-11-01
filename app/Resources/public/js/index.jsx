import React from 'react';
import ReactDOM from 'react-dom';
import FortuneCookie from './FortuneCookie.jsx';
import MadeWith from './MadeWith.jsx';

import '../scss/main.scss';

class App extends React.Component {
    render() {
        return(
            <div>
                <MadeWith name="Bulma.io" />
                <FortuneCookie fortune="" />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

if (module.hot) {
      module.hot.accept('./index.js', function() {
           console.log('Accepting the updated index module!');
        })
}