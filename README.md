If you are using windows os, then please open me with notepad2.exe or editplus.exe or notepad++.exe    

don't use notepad.exe! You'll see garbled characters~    

windows用户请用比较高级的文本编辑器打开此说明文件，记事本什么的out了。

#### 使用说明:

* 开启 ssi、htaccess 支持
  Linux Distro, 可以使用
```shell
   sudo a2enmod include;sudo a2enmod rewrite
```
* 增加Apache  配置：
```shell
   AddType text/html .shtml
   AddOutputFilter INCLUDES .shtml
```
* 将文件放置在网站根目录即可。

#### 针对Apache 2.4.* 新的ap_expr 语法，针对header.shtml 对 mobile 变量的判断方法做了修改

```shtml
   <!--#if expr='-n v("mobile")'-->
           <link rel="stylesheet" type="text/css" href="/include/css/mobile.css" />
	<!--#endif-->
   
```
####  参考资料：

http://httpd.apache.org/docs/current/mod/mod_include.html
http://httpd.apache.org/docs/current/expr.html

感谢原作者：http://www.ksyoulee.org/apache-modified-htaccess-download-list-style-landscaping/
