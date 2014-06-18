Employees.PaginationMixin = Ember.Mixin.create({
  page: 1,

  totalPages: function() {
    return this.get('content.meta').total_pages;
  }.property('content.[]'),

  nextPage: function() {
    return this.get('page') + 1;
  }.property('page'),

  previousPage: function() {
    return this.get('page') - 1;
  }.property('page'),

  isFirstPage: function() {
    return this.get('page') == 1;
  }.property('page'),

  showPreviousLink: function() {
    return this.get('page') > 2;
  }.property('page', 'totalPages'),

  showNextLink: function() {
    return this.get('page') < (this.get('totalPages') - 1)
  }.property('page', 'totalPages'),

  isLastPage: function() {
    return this.get('page') == this.get('totalPages');
  }.property('page')
})

Employees.EmployeesController = Ember.ArrayController.extend(Employees.PaginationMixin, {
  queryParams: ['page']
});
