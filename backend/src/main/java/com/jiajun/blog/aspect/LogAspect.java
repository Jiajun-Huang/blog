package com.jiajun.blog.aspect;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LogAspect {
    // 切面 
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Pointcut("execution(* com.jiajun.blog.*.*(..))") // define a pointcut for all methods in controller package 
    public void log() {
    }

    @Before("log()") // execute log() before the pointcut
    public void doBefore() {
        // get the request
       logger.info("----------doBefore----------");
    }

    @After("log()") // execute log() after the pointcut
    public void doAfter() {
        logger.info("----------doAfter----------");
    }

    @AfterReturning(returning = "result", pointcut = "log()") // execute log() after the pointcut and return the result
    public void doAfterReturn(Object result) {
        logger.info("Result: {}", result);
    }

}
