@echo off
REM A command line tool to start front-end server, back-end server, or admin server based on the parameter

REM Check if the parameter is empty
if "%1"=="" (
    call :show_usage
    goto :eof
)

REM Start the appropriate server based on the parameter
if /i "%1"=="frontend" (
    call :start_frontend
) else if /i "%1"=="backend" (
    call :start_backend
) else if /i "%1"=="admin" (
    call :start_admin
) else if /i "%1"=="all" (
    call :start_all_servers
) else (
    call :show_usage
)

goto :eof

:show_usage
echo Usage: %0 [front^|back^|admin^|all]
echo.
echo frontend - Start front-end server
echo backend  - Start back-end server
echo admin    - Start admin server
echo all      - Start all servers
goto :eof

:start_all_servers
call :start_frontend
call :start_backend
call :start_admin
goto :eof

:start_admin
echo Starting admin server...
npm --prefix .\admin run dev
goto :eof

:start_frontend
echo Starting front-end server...
npm --prefix .\frontend run dev
goto :eof

:start_backend
echo Starting back-end server...
mvn -f .\backend\pom.xml compile && mvn -f .\backend\pom.xml spring-boot:run
goto :eof
