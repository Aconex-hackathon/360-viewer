package com.aconex.viewer.repository;

import com.aconex.viewer.model.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssetRepository extends JpaRepository<Asset, Integer> {
    Asset findById(int assetId);
}
