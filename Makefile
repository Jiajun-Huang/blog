.PHONY: backend
backend:
	mvn -f ./backend/pom.xml compile && mvn -f ./backend/pom.xml spring-boot:run -Dspring-boot.run.profiles=dev

.PHONY: backend-build
backend-build:
	mvn -f ./backend/pom.xml clean -Dmaven.test.skip=true -Dspring-boot.run.profiles=pro package

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
	docker compose up -d
