## redis

```shell
#持久化数据
docker run -idt \
-p 6379:6379 \
-v /docker/redis:/data \
--name redis \
--restart always \
redis redis-server \
--appendonly yes 
```


