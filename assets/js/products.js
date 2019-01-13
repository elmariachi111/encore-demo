import _ from "lodash";

import "bulma/css/bulma.css";
import '@fortawesome/fontawesome-free/css/all.css';

import "../css/simple.css";

var jquery = require('jquery');

function filterDepartment(dpt) {

    if (dpt === 'all') {
      jquery('#product-list .column').removeClass('is-hidden');
    } else {
      jquery('#product-list .product').each(function(idx,product) {
        var $product = $(product);
        var $column = $(product).parent(".column");
        if ($product.data('department') === dpt) {
          $column.removeClass('is-hidden')
        } else {
          $column.addClass('is-hidden')
        }
      })
    }
}

function activateDepartmentMenu(dpt) {
  jquery('#department-chooser .menu-list a').removeClass('is-active');
  jquery('#department-chooser .menu-list a#dpt-' + dpt).addClass('is-active');
}

(function departmentFilter() {
  jquery('#department-chooser .menu-list a,.product.card .card-header a').on('click', function(a) {
    a.preventDefault();
    var dpt = $(a.currentTarget).attr('href').substr(1);
    filterDepartment(dpt);
    activateDepartmentMenu(dpt);
    return false
  })
})();

