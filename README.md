<h1>Gellies</h1>
Animated gelly web buddies!
Live demo at [gellies.io](https://gellies.io)

## Quick Start

First, install git, docker, and docker-compose.

[git installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)<br>
[docker installation](https://docs.docker.com/get-docker/)<br>
[docker-compose installation](https://docs.docker.com/compose/install/)

Clone into the directory where you want your project to live:

```bash
git clone https://github.com/reese-allison/gellies.git
```

In your project directory, create a .env file like the example.env

```bash
ENV=development
HOST=gellies.io
SECRET_KEY={ SESSION SECRET KEY }

GOOGLE_CLIENT_ID={ YOUR GOOGLE CLIENT ID }
GOOGLE_CLIENT_SECRET={ YOUR GOOGLE CLIENT SECRET }

MONGO_INITDB_ROOT_USERNAME={ YOUR MONGODB ROOT USER }
MONGO_INITDB_ROOT_PASSWORD={ YOUR MONGODB ROOT PASSWORD }
```

After your environment variables are set

```bash
docker-compose build
docker-compose up
```

After the containers are up, your project should be live on [localhost](http://localhost)
