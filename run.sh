cd /home/ubuntu/mojis
docker-compose build --no-cache
docker-compose up -d
docker system prune -f
