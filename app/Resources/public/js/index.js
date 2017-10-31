import _ from 'lodash';

import '../scss/main.scss';

import {fetchJson} from './remote.js';

function showFramework() {
    const frameworkName = _.join(['Bulma', 'io'], '.');
    $('#framework').html(frameworkName);
}

$(() => {
    showFramework();
    fetchJson('/api/fortune').then(text => {
        $('#fortune').html(text);
    });
})


if (module.hot) {
      module.hot.accept('./index.js', function() {
           console.log('Accepting the updated index module!');
        })
}