.PHONY: backend
backend:
	mvn -f ./backend/pom.xml compile && mvn -f ./backend/pom.xml spring-boot:run -Dspring-boot.run.profiles=dev

.PHONY: backend-build
backend-build:
	mvn -f ./backend/pom.xml install

.PHONY: frontend
frontend:
	npm --prefix frontend-next run dev

.PHONY: frontend-build
frontend-build:
	npm --prefix ./frontend-next run build

.PHONY: admin
admin:
	npm --prefix ./admin run dev

.PHONY: docker-build
docker-build: backend-build
	docker compose -f ./docker/docker-compose.yml build springboot
	docker compose -f ./docker/docker-compose.yml up -d mysql
	docker compose -f ./docker/docker-compose.yml up -d springboot
	docker compose -f ./docker/docker-compose.yml build
	docker compose -f ./docker/docker-compose.yml down

.PHONY: docker-up
docker-up:
	docker compose -f ./docker/docker-compose.yml up -d

.PHONY: docker-down
docker-down:
	docker compose -f ./docker/docker-compose.yml down

docker-deploy:
	ssh amazon "sudo service docker start"
	docker-compose -H "ssh://amazon" -f ./docker/docker-compose-deploy.yml down
	docker-compose -H "ssh://amazon" -f ./docker/docker-compose-deploy.yml build springboot
	docker-compose -H "ssh://amazon" -f ./docker/docker-compose-deploy.yml up -d mysql
	docker-compose -H "ssh://amazon" -f ./docker/docker-compose-deploy.yml up -d springboot
	docker-compose -H "ssh://amazon" -f ./docker/docker-compose-deploy.yml build
	docker-compose -H "ssh://amazon" -f ./docker/docker-compose-deploy.yml up -d
	docker-compose -H "ssh://amazon" -f ./docker/docker-compose-deploy.yml up -d nginx # something nginx is not starting
 