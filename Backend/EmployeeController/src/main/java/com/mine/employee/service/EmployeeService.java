package com.mine.employee.service;
import com.mine.employee.exception.UserNotFoundException;
import com.mine.employee.model.Employee;
import com.mine.employee.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmployeeService{
    private final EmployeeRepo employeeRepo;
    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee)
    {
        Optional<Employee> employee1 = employeeRepo.findByEmail(employee.getEmail());
        if(employee1.isPresent()){
            return employee1.get();
        }
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployee(){
        return employeeRepo.findAll();
    }
    public Employee updateEmployee(Employee employee)
    {
        return employeeRepo.save(employee);
    }
    public Optional<Employee> findEmployeeById(Long id)
    {
        return Optional.ofNullable(employeeRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException("user by id " + id + " not found")));
    }
    public Boolean deleteEmployeeById(Long id)
    {
        employeeRepo.deleteById(id);
        return true;
    }
}
