# Pharma Inc

Sistema desenvolvido para empresa *Pharma Inc* para facilitar a gestão e visualização das informações de seus pacientes.

challenge by coodesh

### lista de pacientes
![image](https://user-images.githubusercontent.com/3596786/135016114-d959e2b8-f10e-4500-8bc8-2ff1e73e47c6.png)

### visualizar paciente
![image](https://user-images.githubusercontent.com/3596786/135015974-7682c198-1597-45bd-bd8b-6f3e455ab3ba.png)

### responssive
![image](https://user-images.githubusercontent.com/3596786/135017947-7371eff4-5ea4-483e-bc5d-9d7a5501990a.png)



challenge by coodesh

# Frameworks Utilizados

 - [Angular v12](https://angular.io/)
 - [Primeng 12](https://www.primefaces.org/primeng/)
 - [Animate css](https://animate.style/) 
 - [NodeJS V16](https://nodejs.org/en/)
 - [Random User](https://randomuser.me/)

# Como usar

### dev: instalar localmente
- Necessário nodejs 12+
- Baixe o repositório no seu computador
- Na raiz do repositório digite:
- `npm install`
- Após a finalização digite:
- `ng serve`
- Abra no seu navegador a url:
- `http://localhost:4200/`
- Pronto !

### dev: usando docker
Testando utilizando docker v20 e docker compose 1.29.2.

- Baixe o repositório no seu computador
- Digite na raiz:
- `docker-compose up`

### deploy
- Levando em consideração que você construiu o ambiente docker para desenvolvimento usando docker-compose, execute o comando abaixo para compilar a aplicação e gerar o diretório dist:
- `docker exec -it pharmaweb npx ng build --prod`
- Ou se você utiliza o angular instalado localmente:
- `npx ng build --prod`
- Após a finalização da build, construa o container de produção:
- ` docker build -t pharmadeploy .`
- Agora inicialize o container:
- `docker run -p 8080:80 -t pharmadeploy`
