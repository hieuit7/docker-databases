FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.2
WORKDIR /usr/share/elasticsearch
# RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install --batch repository-s3
# RUN /usr/share/elasticsearch/bin/elasticsearch-keystore create -p
# RUN echo "minio" | /usr/share/elasticsearch/bin/elasticsearch-keystore add --stdin s3.client.default.access_key
# RUN echo "minio123" | /usr/share/elasticsearch/bin/elasticsearch-keystore add --stdin s3.client.default.secret_key
# RUN echo " " | bin/elasticsearch-keystore add --stdin s3.client.default.secret_key
COPY elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml
