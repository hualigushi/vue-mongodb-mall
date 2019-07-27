# vue-mongodb-mall

### Get全栈技能点 Vue2.0/Node.js/MongoDB 打造商城系统

http://imooc.51purse.com

##### 技术栈

前端: vue-router + axios + vuex

后端: Node.js + express + MongoDB

效果图: 查看images文件夹

##### 项目启动

1.npm install

2.启动Mongodb: 

cmd 以管理员身份运行

> d:\MongoDB\Server\bin>mongod --dbpath "D:\MongoDB\data\db" --logpath "D:\MongoDB\log\MongoDB.log" --install --serviceName "MongoDB"

NET START MongoDB

3.导入mongodb数据库数据

mongorestore -h localhost:27017 -d dumall /dir (dumall文件中)

4.后端启动: node server/bin/www

5.前端启动: npm run serve

地址:localhost:4000
