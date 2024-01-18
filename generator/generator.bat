@echo off
setlocal

REM Get the directory of the batch file
set "batchDir=%~dp0"

REM Define the input and output paths
set "inputSpec=http://localhost:8080/v3/api-docs"
set "outputDir=%batchDir%..\frontend-next\src\api\openapi"

REM Run the OpenAPI Generator CLI
openapi-generator-cli generate -i "%inputSpec%" -o "%outputDir%" -g typescript-fetch

endlocal
