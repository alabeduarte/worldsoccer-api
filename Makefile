env = PATH=$$PATH:node_modules/.bin

install:;@npm install

run:;@$(env) foreman start -e .env -f Procfile.dev

test:
	@mongod --fork
	@$(env) foreman run -e test.env npm test
	@kill -2 `ps aux | grep [m]ongo* | awk '{ print $2 }'`

seeds:;@$(env) foreman run ./bin/seed