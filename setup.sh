sudo apt-get install docker.io -y
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
sudo service docker start
sudo usermod -a -G docker ubuntu
sudo chmod 666 /var/run/docker.sock
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo service docker start
