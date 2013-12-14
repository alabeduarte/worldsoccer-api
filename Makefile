env = PATH=$$PATH:node_modules/.bin

install:
	@npm install

run:;@$(env) nf start -f Procfile.dev

test:
	#@mongod --fork
	@$(env) mocha specs --recursive --reporter spec
	#@kill -2 `ps aux | grep [m]ongo* | awk '{ print $2 }'`