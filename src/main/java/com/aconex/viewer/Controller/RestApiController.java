package com.aconex.viewer.Controller;

import com.aconex.viewer.model.Area;
import com.aconex.viewer.model.Asset;
import com.aconex.viewer.model.Document;
import com.aconex.viewer.model.Floor;
import com.aconex.viewer.model.Project;
import com.aconex.viewer.repository.AreaRepository;
import com.aconex.viewer.repository.AssetRepository;
import com.aconex.viewer.repository.DocumentRepository;
import com.aconex.viewer.repository.FloorRepository;
import com.aconex.viewer.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RestApiController {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private FloorRepository floorRepository;

    @Autowired
    private AreaRepository areaRepository;

    @Autowired
    private AssetRepository assetRepository;

    @Autowired
    private DocumentRepository documentRepository;

    @RequestMapping(value = "/projects", method = RequestMethod.GET)
    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    @RequestMapping(value = "/floors", method = RequestMethod.GET)
    public List<Floor> getAllFloors(){
        return floorRepository.findAll();
    }

    @RequestMapping(value = "/areas", method = RequestMethod.GET)
    public List<Area> getAllAreas(){
        return areaRepository.findAll();
    }

    @RequestMapping(value = "/assets", method = RequestMethod.GET)
    public List<Asset> getAllAssets(){
        return assetRepository.findAll();
    }

    @RequestMapping(value = "/documents", method = RequestMethod.GET)
    public List<Document> getAllDocuments(){
        return documentRepository.findAll();
    }

    /*@RequestMapping(value = "/documents/{assetId}", method = RequestMethod.GET)
    public List<Document> getDocumentsByAsset(@PathVariable int assetId){
        return documentRepository.
    }*/


}
