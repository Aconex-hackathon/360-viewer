package com.aconex.viewer.Controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class RestDocDownloadController {
    @RequestMapping(value = "/download/{fileName:.+}", method = RequestMethod.GET, produces = "application/pdf")
    public ResponseEntity<InputStreamResource> downloadDocument(@PathVariable String fileName) throws IOException{
        ClassPathResource resource = new ClassPathResource("/static/"+fileName );
        return ResponseEntity
                .ok()
                .contentLength(resource.contentLength())
                .contentType(
                        MediaType.parseMediaType("application/octet-stream"))
                .header("Content-Disposition", "inline; filename=" +fileName)
                .body(new InputStreamResource(resource.getInputStream()));
    }
}
