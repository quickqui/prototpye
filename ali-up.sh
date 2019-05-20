# TODO 直接用docker-compose在本地up会报错。
# nielinjies-Temp-bookPro:propotype nielinjie$ sh ./ali-up.sh 
# Creating network "propotype_default" with the default driver
# ERROR: The network driver must be specified.
#
#

export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://master2g1.cs-cn-zhangjiakou.aliyun.com:20069"
export DOCKER_CERT_PATH=~/ali/docker
docker-compose -f docker-compose-ali.yml up