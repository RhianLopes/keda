# keda

## Running rancher localhost

docker run -d --restart=unless-stopped   -p 80:80 -p 443:443   --privileged   rancher/rancher:latest

## Install keda with helm

helm repo add kedacore https://kedacore.github.io/charts

helm repo update

helm install keda kedacore/keda --namespace keda --create-namespace

## Install Apache Kafka with helm

helm repo add azure-marketplace https://marketplace.azurecr.io/helm/v1/repo

helm install kafka azure-marketplace/kafka -n kafka --create-namespace
## Build and run locally kafka-consumer-app 

docker build -t rhianlopes/kafka-consumer-app:v1 .

docker run -p 3000:3000 -d rhianlopes/kafka-consumer-app:v1

docker push rhianlopes/kafka-consumer-app:v1
