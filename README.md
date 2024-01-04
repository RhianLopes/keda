# KEDA

## Running rancher localhost

```shell
docker run -d --restart=unless-stopped   -p 80:80 -p 443:443   --privileged   rancher/rancher:latest
```

## Install keda with helm

```shell
helm repo add kedacore https://kedacore.github.io/charts
```

```shell
helm repo update
```

```shell
helm install keda kedacore/keda --namespace keda --create-namespace
```

> https://github.com/rancher/local-path-provisioner Opcional

## Install kafka, zookeeper and kafka ui with docker

```shell
docker compose up -d
```

## Get kafka container ip

```shell
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' kafka
```

## Build and run locally kafka-consumer-app 

```shell
cd kafka-consumer-app
```

```shell
docker build -t rhianlopes/kafka-consumer:latest .
```

```shell
docker run -p 3000:3000 -d rhianlopes/kafka-consumer:latest
```

```shell
docker push rhianlopes/kafka-consumer:latest
```

## Deploy Consumer with Helm

```shell
helm upgrade --install kafka-consumer helm-charts/worker -f helm-charts/worker/values.yaml
```
