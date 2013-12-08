env = PATH=$$PATH:node_modules/.bin

install:
	@npm install

run:;@nf start

test:;@$(env) mocha specs --reporter spec
