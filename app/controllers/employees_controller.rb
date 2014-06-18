class EmployeesController < ApplicationController

  respond_to :json

  def index
    @employees = Employee.order(:name).page(params[:page])
    render json: @employees,
      meta: {
        total_pages: @employees.total_pages, page: @employees.current_page
      }
  end

end
