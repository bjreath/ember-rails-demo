Employees.EmployeesRoute = Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.find('employee', params);
  }
});
