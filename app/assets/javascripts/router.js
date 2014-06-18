Employees.Router.reopen({
  location: 'history'
})

Employees.Router.map(function() {
  this.resource('employees', { path: '/' });
});
