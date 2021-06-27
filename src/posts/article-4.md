#### 📺Jellyfin

```shell
docker run -d -p 8096:8096 \
-v /data/jellyfin/config:/config \
-v "/data/transmission/downloads/complete/TV series:/data/tvshows" \
-v /data/transmission/downloads/complete/movies:/data/movies \
--env TZ=Asia/Shanghai \
--env PUID=1000 \
--env PGID=1000 \
--name jellyfin  \
--restart unless-stopped \
linuxserver/jellyfin 
```

带硬件直通

```shell
docker run \
-p 8096:8096 \
-v /data/jellyfin/config:/config \
-v /data/jellyfin/cache:/cache \
-v /data/transmission/downloads/complete/movies:/media \
-v /data/transmission/downloads/complete/tvshows:/media2 \
-v /data/transmission/downloads/complete/av:/media3 \
-v /data/transmission/downloads/complete/music:/media4 \
--name jellyfin \
-u 1000:1000 \
-d \
--restart always \
--device /dev/dri/card0:/dev/dri/card0 --device /dev/dri/renderD128:/dev/dri/renderD128 \
jellyfin/jellyfin 
```

