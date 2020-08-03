package com.unewej.questengine.repository;

import com.unewej.questengine.model.ContainerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContainerRepository extends JpaRepository<ContainerEntity, Long> {
}
