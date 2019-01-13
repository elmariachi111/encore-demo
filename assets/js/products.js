import _ from "lodash-es";

import "../scss/common.scss";
import "../scss/products.scss";

import jquery from 'jquery';

const filterDepartment = dpt => {

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

