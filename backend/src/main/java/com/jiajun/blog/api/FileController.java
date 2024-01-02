package com.jiajun.blog.api;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jiajun.blog.service.FileService;

@RestController
@RequestMapping("/file")
public class FileController {

    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<List<String>> uploadFile(@RequestPart MultipartFile[] files,
            @RequestPart String path)
            throws IOException {
        List<String> filePath = new ArrayList<>();
        for (MultipartFile file : files) {
            filePath.add(fileService.uploadFile(file, path));
        }
        return ResponseEntity.ok(filePath);
    }

    @GetMapping("/download")
    public ResponseEntity<Resource> downloadFile(@RequestParam("path") String dir) throws IOException {
        Path path = Paths.get(dir);
        Resource resource = fileService.loadFileAsResource(path);
        return ResponseEntity.ok().contentLength(resource.contentLength())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header("Content-Disposition", "inline; filename=\"" + path.getFileName().toString() + "\"")
                .body(resource);
    }

}
