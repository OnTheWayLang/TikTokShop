# TikTokShop
# 1、创建目录安装tomcat
mkdir -p /app/shop
cd /app/shop
wget https://dlcdn.apache.org/tomcat/tomcat-11/v11.0.0-M24/bin/apache-tomcat-11.0.0-M24.tar.gz
wget https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.94/bin/apache-tomcat-9.0.94.tar.gz
# 2、添加java变量
nano /etc/profile
export PATH=$PATH:/www/server/java/jdk1.8.0_371/bin
# 3、启动tomcat
cd apache-tomcat-9.0.94
bin/startup.sh  # 启动
bin/shutdown.sh  #停止
tail -f logs/catalina.out  # 查看日志应该
ps -ef|grep tomcat

# 4、添加HTML项目后台网站配置域名并确认能正常访问默认页面 google key \ supper google key
# 后台域名不要开SSL

# 5、安装zookeeper
mkdir -p /app/zookeeper/data && cd /app/zookeeper/data && echo 1 > myid
docker run -p 2181:2181 -p 2888:2888 -p 3888:3888 -v /app/zookeeper/data:/data/ --name zookeeper --restart always -d zookeeper
# 6、上传并导入数据库
# 7、编译后台config.properties文件，并打包上传：admin.war、api.war、data.war
AWS-S3域名：
alangaess3.s3.us-west-2.amazonaws.com
ID：
密钥：

# 8、上传3个文件后停止tomcat，删掉webapps下所有文件，将上面3个文件放到webapps目录下，并将admin.war改成ROOT.war.然后启动tomcat
# 9、编译并打包mall-tools并上传，基于mall-tools.jar新建java项目网，端口8010
# 10、使用前端域名添加HTML项目网站，配置SSL、nginx文件
# 11、编译前端，每个项目分别安装依赖并设置变量：
npm install  # 安装依赖
export NODE_OPTIONS=--openssl-legacy-provider
npm install --legacy-peer-deps



# 12、分别构建每个页面并打包上传
app-pc  用户pc 构建:npm run build:Tik   打包 dist目录
app-h5  用户h5 构建:npm run build:TikTok-Wholesale   打包 wap目录    成功
sj-pc   商家pc 构建:npm run build:TikTok-Wholesale    打包 www目录   成功
sj-h5   商家h5 构建:npm run build --mode tiktok-wholesale    打包 ww目录 
zsrz    招商入驻前端 构建:npm run build:Tik  打包 promote目录    成功
# 一共7个包：dist.zip、wap.zip、www.zip、ww.zip、promote.zip、chat.zip、download.zip
# 全部上传并解压到前端域名网站根目录
