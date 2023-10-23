package com.archishmanghosh.carrental.dao;

import com.archishmanghosh.carrental.entity.Customer;
import com.archishmanghosh.carrental.entity.Person;

public interface AppDAO {
    void save(Person person);
    void save(Customer customer);
}
