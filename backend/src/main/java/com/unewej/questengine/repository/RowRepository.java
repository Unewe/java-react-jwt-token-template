package com.unewej.questengine.repository;

import com.unewej.questengine.model.RowEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RowRepository extends JpaRepository<RowEntity, Long> {
}
