build:
	docker build -t kodon_page .

run:
	docker run -d --name kodon_page_container -p 8080:80 kodon_page

stop:
	docker stop kodon_page_container || true
	docker rm kodon_page_container || true

restart: stop build run

logs:
	docker logs -f kodon_page_container