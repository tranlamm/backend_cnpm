- Step 1: git clone https://github.com/tranlamm/backend_cnpm.git
- Step 2: move to backend_cnpm (cd backend_cnpm) and run npm install
- Step 3: create database named "backend_cnpm" and config database like src/config/config.json (development)
- Step 4: move to src (cd src) and run "npx sequelize-cli db:migrate" (run "npx sequelize-cli db:migrate:undo:all" first if error)
- Step 5: run "npx sequelize-cli db:seed:all"
- Step 6: run "npm start" and enjoy the api

(Make sure you have installed git, npm, xampp, ...)
