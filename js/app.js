//phân trang //

$(document).ready(function () {
  var currentPage = 1;
var itemsPerPage = 10;
var items = $('.list li');
var totalPages = Math.ceil(items.length / itemsPerPage);

function showPage(page) {
  var startIndex = (page - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  
  items.hide();
  
  items.slice(startIndex, endIndex).show();
}

function updatePagination() {
  var pagination = $('.site-news .pagination');
  pagination.empty();
  
  if (totalPages > 1) {
    var prev = $('<a href="#" class="prev"><i class="icofont-simple-left"></a>');
    
    var pages = $('<div>');
    
    for (var i = 1; i <= totalPages; i++) {
      var page = $('<a href="#" class="page">' + i + '</a>');
      
      if (i === currentPage) {
        page.addClass('active');
      }
      
      pages.append(page);
    }
    
    var next = $('<a href="#" class="next"><i class="icofont-simple-right"></a>');
    
    pagination.append(prev);
    pagination.append(pages);
    pagination.append(next);
  }
}

showPage(currentPage);
updatePagination();

$(document).on('click', '.prev', function() {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
  }
  showPage(currentPage);
  updatePagination();
});

$(document).on('click', '.next', function() {
  currentPage++;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  showPage(currentPage);
  updatePagination();
});

$(document).on('click', '.page', function() {
  currentPage = parseInt($(this).text());
  showPage(currentPage);
  updatePagination();
});
});

//phân trang product 

$(document).ready(function () {
  var currentPage = 1;
var itemsPerPage = 12;
var items = $('.site-product-lunch .col-md-4');
var totalPages = Math.ceil(items.length / itemsPerPage);

function showPage(page) {
  var startIndex = (page - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  
  items.hide();
  
  items.slice(startIndex, endIndex).show();
}

function updatePagination() {
  var pagination = $('.site-product-lunch .pagination');
  pagination.empty();
  
  if (totalPages > 1) {
    var prev = $('<a href="#" class="prev"><i class="icofont-simple-left"></a>');
    
    var pages = $('<div>');
    
    for (var i = 1; i <= totalPages; i++) {
      var page = $('<a href="#" class="page">' + i + '</a>');
      
      if (i === currentPage) {
        page.addClass('active');
      }
      
      pages.append(page);
    }
    
    var next = $('<a href="#" class="next"><i class="icofont-simple-right"></a>');
    
    pagination.append(prev);
    pagination.append(pages);
    pagination.append(next);
  }
}

showPage(currentPage);
updatePagination();

$(document).on('click', '.prev', function() {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
  }
  showPage(currentPage);
  updatePagination();
});

$(document).on('click', '.next', function() {
  currentPage++;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  showPage(currentPage);
  updatePagination();
});

$(document).on('click', '.page', function() {
  currentPage = parseInt($(this).text());
  showPage(currentPage);
  updatePagination();
});
});