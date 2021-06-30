### SSH免密登录设置

1.生成ssh秘钥对

```shell
ssh-keygen -t rsa
```

生成的秘钥对一般存放在 ~/.ssh/中,其中id_rsa是秘钥,id_rsa.pub是公钥,保存私钥到你需要登录的机器

2.将公钥放在指定文件中

```shell
cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
```

3.修改ssh配置文件

```shell
# 编辑 sshd_config 文件 
vi /etc/ssh/sshd_config

# 禁用密码验证 
PasswordAuthentication no
# 启用密钥验证 
RSAAuthentication yes
PubkeyAuthentication yes
# 指定公钥数据库文件 
AuthorsizedKeysFile .ssh/authorized_keys
```

4.重启sshd服务

```shell
service sshd restart # 或者 /etc/init.d/ssh restart
# centos7 启动不同
systemctl restart sshd.service
```

5.可以使用xshell或者mobaxterm 添加私钥登录

![image-20210122153251839](http://imgs.gnodgl.xyz/images/image-20210122153251839.png)