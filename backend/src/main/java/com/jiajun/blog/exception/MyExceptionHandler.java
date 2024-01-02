package com.jiajun.blog.exception;

import org.slf4j.Logger;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.http.HttpServletRequest;

// global exception handler

// @Controller
// public class MyExceptionHandler {

//     Logger logger = org.slf4j.LoggerFactory.getLogger(getClass());

//     @ExceptionHandler(Exception.class)  
//     public ModelAndView exceptionHandler(HttpServletRequest request, Exception e) throws Exception {
//         logger.error("Request URL: {}, Exception: {}", request.getRequestURL(), e.getMessage());
        
//         // if the exception is annotated with @ResponseStatus, rethrow it and let the framework handle it
//         if(AnnotationUtils.findAnnotation(getClass(), ResponseStatus.class) != null) {
//             throw e;
//         }
        
//         ModelAndView mv = new ModelAndView();
//         mv.addObject("url", request.getRequestURL());
//         mv.addObject("exception", e);
//         mv.setViewName("error/error");

//         return mv;
//     }

// }