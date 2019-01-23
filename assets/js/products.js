import {sortBy as _sortBy} from "lodash-es";

import "../scss/products.scss";

import jquery from 'jquery';

const treeshakingDemo = arr => {
  return _sortBy(arr => arr.idx)
}

const filterDepartment = dpt => {

    treeshakingDemo([{v:'a',i:2}, {v:'b', i:1}]);

    if (dpt === 'all') {
      jquery('#product-list .column').removeClass('is-hidden');
    } else {
      jquery('#product-list .product').each( (idx,product) => {
        const $product = $(product);
        const $column = $(product).parent(".column");
        if ($product.data('department') === dpt) {
          $column.removeClass('is-hidden')
        } else {
          $column.addClass('is-hidden')
        }
      })
    }
};

const activateDepartmentMenu = dpt => {
  jquery('#department-chooser .menu-list a').removeClass('is-active');
  jquery('#department-chooser .menu-list a#dpt-' + dpt).addClass('is-active');
};

(() => {
  jquery('#department-chooser .menu-list a,.product.card .card-header a').on('click', function(a) {
    a.preventDefault();
    var dpt = $(a.currentTarget).attr('href').substr(1);
    filterDepartment(dpt);
    activateDepartmentMenu(dpt);
    return false
  })
})();

