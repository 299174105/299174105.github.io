## RabbitMQ

```shell
docker run -d \
--hostname myRabbit \
--name myrabbit \
-p 5672:5672 \
-p 15672:15672 \
-e RABBITMQ_DEFAULT_USER=root \
-e RABBITMQ_DEFAULT_PASS=root \
--restart always \
rabbitmq:management
```

