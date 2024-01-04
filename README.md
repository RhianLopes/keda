# KEDA

## Install rancher, kafka, zookeeper and kafka ui with docker

```shell
docker compose up -d
```

- Rancher: http://localhost:80/
- Kafka UI: http://localhost:8080/

```shell
docker logs rancher 2>&1 | grep "Bootstrap Password:"
```

```shell
code ~/.kube/config
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

## Get kafka container ip

```shell
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' kafka
```

## Build and run locally kafka-consumer-app 

```shell
cd kafka-consumer
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
cd ..
```

```shell
helm upgrade --install kafka-consumer helm-charts/worker -f helm-charts/worker/values.yaml --namespace dev-kafka-consumer --create-namespace
```
