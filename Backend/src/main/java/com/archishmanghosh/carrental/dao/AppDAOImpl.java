package com.archishmanghosh.carrental.dao;

import com.archishmanghosh.carrental.entity.Customer;
import com.archishmanghosh.carrental.entity.Person;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

@Repository
public class AppDAOImpl implements AppDAO{
    private EntityManager entityManager;

    public AppDAOImpl(EntityManager entityManager) {
        this.entityManager=entityManager;
    }

    @Override
    public void save(Person person) {
        entityManager.persist(person);
    }

    @Override
    public void save(Customer customer) {
        entityManager.persist(customer);
    }
}
