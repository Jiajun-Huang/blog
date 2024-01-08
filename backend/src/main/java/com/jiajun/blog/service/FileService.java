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
    private static final Path BASE_PATH = Paths.get(System.getProperty("user.dir"), "uploads");

    public String uploadFile(MultipartFile file, String relativePath) {
        // Save file to file system
        Path targetLocation = Paths.get(BASE_PATH.toString(), relativePath, file.getOriginalFilename())
                .toAbsolutePath()
                .normalize();
        // make sure the target path is under the base path
        if (!targetLocation.startsWith(BASE_PATH)) {
            return null;
        }

        try {
            Files.createDirectories(targetLocation.getParent());
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            return null;
        }
        return UriUtils.encode(Paths.get(relativePath).resolve(file.getOriginalFilename()).toString(), "UTF-8");

    }


    public Resource loadFileAsResource(Path relativePath) {

        Path filePath = Paths.get(BASE_PATH.toString(), relativePath.toString()).toAbsolutePath().normalize();
        // make sure the target path is under the base path
        if (!filePath.startsWith(BASE_PATH)) {
            return null;
        }
        Resource resource;
        try {
            resource = new ByteArrayResource(Files.readAllBytes(filePath));
        } catch (IOException e) {
            return null;
        }

        return resource;
    }

    public Resource loadFileAsResource(String relativePath) {

        Path filePath = Paths.get(BASE_PATH.toString(), relativePath).toAbsolutePath().normalize();
        // make sure the target path is under the base path
        if (!filePath.startsWith(BASE_PATH)) {
            return null;
        }
        Resource resource;
        try {
            resource = new ByteArrayResource(Files.readAllBytes(filePath));
        } catch (IOException e) {
            return null;
        }

        return resource;
    }

    public boolean deleteFile(Path relativePath) {
        Path filePath = Paths.get(BASE_PATH.toString(), relativePath.toString()).toAbsolutePath().normalize();
        // make sure the target path is under the base path
        if (!filePath.startsWith(BASE_PATH)) {
            return false;
        }
        try {
            Files.delete(filePath);
        } catch (IOException e) {
            return false;
        }
        return true;
    }

    public boolean deleteFile(String relativePath) {
        Path filePath = Paths.get(BASE_PATH.toString(), relativePath).toAbsolutePath().normalize();
        // make sure the target path is under the base path
        if (!filePath.startsWith(BASE_PATH)) {
            return false;
        }
        try {
            Files.delete(filePath);
        } catch (IOException e) {
            return false;
        }
        return true;
    }

}
