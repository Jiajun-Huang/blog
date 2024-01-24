# Full stack blog website and management system with separated backend and frontend

> This project is not completed, I only spent less than two weeks so far learning Nextjs, Springboot, Negix, and Docker on the fly
> The term is started so I may not have that much time to do this project, but I will try to keep updating this bit by bit every day.

## How to start this project

1. Have docker on your machine
2. Go to `backend\src\main\resources\` create a new file called `application-pro.yml`
3. Copy everything in `application-dev.yml` and change the setting about `SQL` in your `application-pro.yml`
4. Go to `docker\` create a folder called `secrets`, create `db_password.txt` and `db_root_password.txt` and add your password. The password needs to match what you set in `application-pro.yml`
5. Go to `frontend-next\src\api\openapi\runtime.ts`, change the `BASE_PATH` to `BASE_PATH="http://springboot:8080"`
6. Go back to the project root directory. On your terminal, run `make docker-build` after it success then run `make docker-up`

After these steps, I hope the project runs on `localhost:80`. Since I have add the admin to the docker-compose, you need to start the admin project using `npm --prefix .\admin run dev` or modify the SQL database and `backend\uploads\` manually

## Why I build this project

- I learned a lot in University and faced a lot of problems. To retain what I learned, and how I solve problems, I decided to note everything done, and I think it is pretty cool to share those with others.
- I think every programmer needs a personal website
- I want to learn about web development

## Tech stack

Springboot is used for the backend, and JPA to manipulate to Mysql database.
Swagger generates Openapi documentation based on Java API definition (benefit of strong type language). And use the [openapi-cli](https://openapi-generator.tech/) to generate frontend request code.
~~Nextjs is used for the frontend and admin pages.~~
Nextjs is used for the Frontend. Admin page is built with React with Vite

Negix is used as a proxy for serving the Frontend.
Docker is used for deploying the services, where each frontend, backend, database, and Negix will be in different docker containers and linked with docker-compose.

## Initial design specification

![](design/BlogWebsite.png)

## Challenges

- Changing DTO to Entity and Entity to VO, currently, the conversion logic is in the service layer, but it is better to new constructor for Entity VOs and DTOs.
- Spend a lot of time checking backend api and covent data on frontend. Solve by using [Swagger](https://www.baeldung.com/spring-rest-openapi-documentation) and[openapi-cli](https://openapi-generator.tech/)
- Server render markdown. Initially, I was spending a lot of time configuring [MDX](https://nextjs.org/docs/pages/building-your-application/configuring/mdx) which is recommended by Nextjs, but it doesn't work well for remote markdown with plugin and [react markdown](https://github.com/remarkjs/react-markdown) is all you need.
- Nextjs will fetch data from the backend in build time. Since I am using `docker-compose` the springboot, when building images for nextjs, springboot is not running during that time. So `docker-compose build` will not build the Nextjs image successfully. I have tried `depends` configuriation on the `docker-compose` file, and [dockerize](https://github.com/jwilder/dockerize), but these seem don't work. I make the Nextjs work by configuring every page to `"force-dynamic";` which Nextjs will not cache data. Later I discovered that I could build Springboot first, run Springboot, and build Nextjs after. But I think those are not elegant solutions, so a better solution needs to be found.
- Correctly set up the volume, secrets, and remote build and deploy for `docker-compose.yml`. It was a lot of try and error. The problem I encountered was SQL docker password doesn't now match the secrets with the volume setup; the volume path must match the remote server path; Negix docker exit somehow during `docker-compose up`
## What is done

### Admin page

- crate, list blogs and edit with markdown
- basic admin login (with session) and basic route pretection. Need to improve the implementation later, and will use Token or JWT

### Backend

- Have API to save, list, and delete blogs;
- Have API to save, list, delete, and change tags and categories.
- File upload and download (used to serve images and markdown content)
- Basic user login

### Frontend

- display on the home page and articles page
- display all tags and categories on the tag page and categories on the tags page and categories page
- server renders markdown content on single blog page support [gfm](https://github.github.com/gfm/), latex equations, code highlighting, and loading images from the server.
- Set up the UI for website info such as view counts
- 

### Deploy

- docker file and docker-compose to build docker images
- Automated CI process that builds the entire project and deploys to the remote server 
- Negix config to proxy frontend content

## What needs to be done

### Backend

- Refactor backend Entity conversion logic
- Change user authentication logic, remove the use of session (break the RESTful spec), and implement the proper way to handle protection in admin and backend
- Implement backend API for the blog update
- Add various searching and filtering APIs for the blog on the backend
- Add a column for blog introduction for display on the database and backend
- User registers API
- Comment related API
  - add, delete, find
- API for counting view numbers and number
- API for counting site visit numbers or using third-party service

### Frontend

- Table of contents on the sidebar
- Display site visit on the home page sidebar
- Display all tags and categories on the home page sidebar
- Finish the About page
- Change theme

### Admin page

- Add a page to edit an existing blog
- Style the add blog page
- Add pages to manage tags and categories
- Add a page to manage users
- Add a page to manage comments

### Deploy

- GitHub action for deployment to cloud VPS
- Automatic database syncing from the database on the cloud and database at home.
- Use [minio](https://github.com/minio/minio)
