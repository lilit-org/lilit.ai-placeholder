.PHONY: install dev build prod lint clean

install:
	yarn install

server:
	yarn dev

build:
	yarn build

prod: build
	yarn start

lint:
	yarn next lint

clean:
	rm -rf .next
	rm -rf node_modules
	rm -rf out
	rm -rf .vercel
	rm -f .env.local
	rm -f .env.development.local
	rm -f .env.test.local
	rm -f .env.production.local
	rm -f yarn.lock
	rm -f package-lock.json
	rm -f *.tsbuildinfo
