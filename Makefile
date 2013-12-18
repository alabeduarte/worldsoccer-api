env = PATH=$$PATH:node_modules/.bin
mongopid = /tmp/.mongo.pid

install:;@npm install

run:;@$(env) nf start -j Procfile.dev

test: .mongo.start
	@$(env) NODE_ENV=test npm test
	@$(MAKE) .mongo.stop

seeds: .mongo.start
	@$(env) nf run ./bin/seed
	@$(MAKE) .mongo.stop

clean:;@git clean -Xfdq

.mongo.start:;@mongod --pidfilepath $(mongopid) --fork > /dev/null 2>&1
.mongo.stop:;@kill -9 `cat $(mongopid)` && rm $(mongopid)