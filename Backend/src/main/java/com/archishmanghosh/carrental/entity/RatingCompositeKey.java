package com.archishmanghosh.carrental.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class RatingCompositeKey implements Serializable {
    @Column(name = "customer_id")
    private int customerId;

    @Column(name = "point_id")
    private int pointId;

    @Column(name = "payment_id")
    private int paymentId;
}
