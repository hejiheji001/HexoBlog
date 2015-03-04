title: "解决Navicat将sql文件导入MySQL时出错的问题"
date: 2015-03-03 17:23:36
tags: MySQL
---

一直用导航猫 不得不说是个好软件w  界面美观大方 新版的还是扁平化设计 感觉挺好看的

但是一直以来都有一个导入sql文件会失败的问题

查阅了很多资料后 发现还是最原始的办法好用 使用以下命令即可（暂未发现失败的情况）

mysql -uusername -ppassword --default-character-set=utf8 database_name < "path/to/file.sql"

以前木有博客 这篇文章就当是Hello World吧~