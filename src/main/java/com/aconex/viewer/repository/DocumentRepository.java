package com.aconex.viewer.repository;

import com.aconex.viewer.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Integer> {
    @Query("SELECT doc FROM Document doc WHERE doc.asset.id = :assetId")
    List<Document> findByAssetId(@Param("assetId") int assetId);
}
