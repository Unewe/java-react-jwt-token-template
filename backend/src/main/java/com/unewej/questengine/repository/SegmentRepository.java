package com.unewej.questengine.repository;

import com.unewej.questengine.model.SegmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SegmentRepository extends JpaRepository<SegmentEntity, Long> {
}
