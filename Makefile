dev:
	yarn start
start:
	nuxt build
install:
	yarn install --ignore-engines
restart:
	docker compose restart dcardenascom-web
log:
	docker compose logs dcardenascom-web -f --tail 20
