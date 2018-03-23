@ echo off

set "json=..\public\Swagger\swagger.json"

color 06 
echo 批处理说明 V1：
echo *本批处理文件是通过Swagger CodeGen 自动生成相关代码；
echo *代码生成模板在CoeveryCodegen文件夹下，具体用法请参考官网资料自行补脑；
echo *当前版本支持Models和API生成，如有需要可提出来；
echo *默认的Json来源是文件夹下的 swagger.json,可以输入URL，也可以是物理路径；
echo *输出的目录是services；


java -cp coeveryCodegen-swagger-codegen-1.0.0-jar-with-dependencies.jar;swagger-codegen-cli.jar  io.swagger.codegen.SwaggerCodegen generate -l coeveryCodegen -i %json% -o ..\services

