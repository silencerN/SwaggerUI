# CoeveryCodegen 使用说明

### 如何运行
> 双击 run-local.bat 运行批处理文件，根据提示输入json路径，可以是磁盘上路径也可以是URL，格式必须正确才能正常运行。也可以替换swagger.json,提示输入json路径时直接跳过。<strong>windows命令行不支持路径有空格，所以json路径中不要有空格，可以使用相对路径引用本工程下的json，http://bbs.csdn.net/topics/370120920</strong>

### 如何使用自己的配置？ 更改 config.json 中的配置。
> 配置说明
> * outputFolder 代码输出路径
> * templateDir 模板文件存放路径
> * packageName 包名（命名空间）
> * apiPackage  packageName + . + apiPackage = api的命名空间 （这里是java的目录结构，会根据命名空间（包名）生成文件夹），仅仅作为生成文件夹用。
> * modelPackage packageName + . + modelPackage = model的命名空间，作用同上。
> * additionalProperties 模板中使用的变量，代码生成模板中直接通过value替换key。
> * modelTemplateFiles Model生成的模板文件入口，key为文件名，value是输出的文件扩展名，可以是多个。
> * apiTemplateFiles API生成的模板文件入口，同上。
> * supportingFiles swagger中的 supporting 暂未使用


