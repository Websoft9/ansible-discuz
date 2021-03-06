# 更新升级

网站技术日新月异，**更新升级**是维护工作之一，长时间不升级的程序，就如长时间不维护的建筑物一样，会加速老化、功能逐渐缺失直至无法使用。  

这里注意更新与升级这两词的差异（[延伸阅读](https://support.websoft9.com/docs/faq/zh/tech-upgrade.html#更新-vs-升级)），例如：  

- 操作系统打个补丁常称之为**更新**，Ubuntu16.04 变更为 Ubuntu18.04，称之为**升级**
- MySQL5.6.25-->MySQL5.6.30 常称之为**更新**，MySQL5.6->MySQL5.7 称之为**升级**

Discuz 完整的更新升级包括：系统级更新（操作系统和运行环境）和 Discuz 程序升级两种类型

## 系统级更新

运行一条更新命令，即可完成系统级更新：

``` shell
#For Centos&Redhat
yum update -y

#For Ubuntu&Debian
apt update && apt upgrade -y
```
> 本部署包已预配置一个用于自动更新的计划任务。如果希望去掉自动更新，请删除对应的Cron

## DiscuzQ 升级

官方提供可视化界面和命令行两种升级工具，详情参考官方文档：[DiscuzQ 升级](https://discuz.com/docs/%E5%B8%B8%E8%A7%84%E9%83%A8%E7%BD%B2%E5%8D%87%E7%BA%A7.html#%E4%BD%BF%E7%94%A8-dl-php-%E8%87%AA%E5%8A%A8%E5%8D%87%E7%BA%A7%E6%96%B9%E5%BC%8F-%E6%8E%A8%E8%8D%90)

下面介绍可视化升级的主要步骤：  

1. 使用 SFTP 工具连接服务器，删除 `/data/wwwroot/discuz/public/dl.php.lock` 文件

2. 本地浏览器访问： *http://服务器公网IP/dl.php* 进入升级界面
   ![可视化界面升级方式](https://libs.websoft9.com/Websoft9/DocsPicture/zh/discuz/discuzq-installgui-websoft9.png)

3. 根据升级向导完成升级

## Discuz 升级

Discuz 需要手工上传升级包方可升级，也就是说升级对普通用户来说有点难。  

Discuz官方提供了一个简易的升级方案，[查看详情](https://gitee.com/Discuz/DiscuzX/wikis/%E5%8D%87%E7%BA%A7%E6%96%B9%E6%B3%95?sort_id=9978)

