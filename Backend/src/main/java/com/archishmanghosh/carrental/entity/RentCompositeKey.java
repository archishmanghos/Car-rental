package com.archishmanghosh.carrental.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class RentCompositeKey implements Serializable {
    @Column(name = "customer_id")
    private int customerId;

    @Column(name = "manager_id")
    private int managerId;

    @Column(name = "payment_id")
    private int paymentId;
}
