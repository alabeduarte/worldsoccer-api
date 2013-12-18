env = PATH=$$PATH:node_modules/.bin
mongopid = /tmp/.mongo.pid

install:;@npm install

run:;@$(env) foreman start -e .env -f Procfile.dev

test:
	@mongod --pidfilepath $(mongopid) --fork > /dev/null 2>&1
	@$(env) foreman run -e test.env npm test
	@kill -9 `cat $(mongopid)` && rm $(mongopid)

seeds:;@$(env) foreman run ./bin/seed