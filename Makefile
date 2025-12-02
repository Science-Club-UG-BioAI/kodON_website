build:
	docker build -t kodon_page .

run:
	docker run -p 3000:80 kodon_page