package com.unewej.questengine.repository;

import com.unewej.questengine.model.RoleEntity;
import com.unewej.questengine.model.enumeration.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    Optional<RoleEntity> findByName(RoleName roleName);
}