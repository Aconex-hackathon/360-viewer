package com.aconex.viewer.repository;

import com.aconex.viewer.model.Area;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AreaRepository extends JpaRepository<Area, Integer> {
    Area findByAreaId(int areaId);
}
