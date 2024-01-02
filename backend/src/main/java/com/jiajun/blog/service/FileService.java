package com.jiajun.blog.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriUtils;

@Service
public class FileService {

    // ...
    private static final String BASE_PATH = "uploads";

    public String uploadFile(MultipartFile file, String relativePath) throws IOException {
        // Save file to file system
        String systemPath = System.getProperty("user.dir");

        Path targetLocation = Paths.get(systemPath, BASE_PATH, relativePath, file.getOriginalFilename())
                .toAbsolutePath()
                .normalize();
        // copy file to target location
        Files.createDirectories(targetLocation.getParent());
        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
        return UriUtils.encode(Paths.get(relativePath).resolve(file.getOriginalFilename()).toString(), "UTF-8");

    }

    // ...

    public Resource loadFileAsResource(Path relativePath) throws IOException {
        String systemPath = System.getProperty("user.dir");
        Path filePath = Paths.get(systemPath, BASE_PATH, relativePath.toString()).toAbsolutePath().normalize();
        // load file as Resource
        Resource resource = new ByteArrayResource(Files.readAllBytes(filePath));
        

        return resource;
    }

}
