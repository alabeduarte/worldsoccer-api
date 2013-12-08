env = PATH=$$PATH:node_modules/.bin

install:
	@npm install

run:;@$(env) nf start

test:;@$(env) mocha specs --reporter spec
