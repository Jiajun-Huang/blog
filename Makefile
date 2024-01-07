.PHONY: backend
backend:
	mvn -f .\backend\pom.xml compile && mvn -f .\backend\pom.xml spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"
.PHONY: backend-build
backend-build:
	mvn -f .\backend\pom.xml clean -Dmaven.test.skip=true

.PHONY: frontend
frontend:
	npm --prefix .\frontend run dev

.PHONY: frontend-build
frontend-build:
	npm --prefix .\frontend run build

.PHONY: docker-build
docker-build:
	docker-compose up --build -d


	