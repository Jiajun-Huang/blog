.PHONY: backend
backend:
	mvn -f ./backend/pom.xml compile && mvn -f ./backend/pom.xml spring-boot:run
.PHONY: backend-build
backend-build:
	mvn -f ./backend/pom.xml clean -Dmaven.test.skip=true

.PHONY: frontend
frontend:
	npm --prefix ./frontend-next run dev

.PHONY: frontend-build
frontend-build:
	npm --prefix ./frontend-next run build

.PHONY: admin
admin:
	npm --prefix ./admin run dev

.PHONY: docker-build
docker-build:
	docker-compose up --build -d


	