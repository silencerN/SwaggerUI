@ echo off

set "json=..\public\Swagger\swagger.json"

color 06 
echo ������˵�� V1��
echo *���������ļ���ͨ��Swagger CodeGen �Զ�������ش��룻
echo *��������ģ����CoeveryCodegen�ļ����£������÷���ο������������в��ԣ�
echo *��ǰ�汾֧��Models��API���ɣ�������Ҫ���������
echo *Ĭ�ϵ�Json��Դ���ļ����µ� swagger.json,��������URL��Ҳ����������·����
echo *�����Ŀ¼��services��


java -cp coeveryCodegen-swagger-codegen-1.0.0-jar-with-dependencies.jar;swagger-codegen-cli.jar  io.swagger.codegen.SwaggerCodegen generate -l coeveryCodegen -i %json% -o ..\services

