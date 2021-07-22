#### 🔒Bitwarden 

-----

1.启动容器

```shell
docker run -d --name bitwarden \
-v /www/wwwroot/bitwarden:/data/ \
-p 9099:80 \
bitwardenrs/server:latest
```

2.注册用户

3.重启容器或者修改容器环境变量(关闭用户注册)

```shell
docker run -d --name bitwarden \
-e SIGNUPS_ALLOWED=false \
-e INVITATIONS_ALLOWED=false \
-v /www/wwwroot/bitwarden/:/data/ \
-p 9099:80 \
--restart=always \
bitwardenrs/server:latest
```



