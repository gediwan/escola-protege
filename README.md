# Escola que Protege

Aplicativo mobile desenvolvido em React Native com Expo voltado à conscientização, prevenção e apoio em situações de violência no ambiente escolar.

Projeto desenvolvido como parte da Atividade Extensionista do curso de Análise e Desenvolvimento de Sistemas — UNINTER.

**Aluno:** Gedivan Santana de Jesus
**RU:** 4552028
**Tema do Projeto:** Dando um debug na desigualdade de gênero em ambiente escolar

---

## Sobre o projeto

O aplicativo foi desenvolvido com a proposta de oferecer um canal acessível de orientação, apoio e encaminhamento para estudantes em situações de vulnerabilidade ou violência no contexto escolar.

A aplicação reúne informações educativas, canais oficiais de atendimento e protocolos básicos de atuação diante de diferentes situações relacionadas à violência, bullying, assédio e discriminação.

O projeto busca utilizar recursos tecnológicos como instrumento de apoio à conscientização e à promoção de um ambiente escolar mais seguro.

---

## Funcionalidades

* Registro de denúncias anônimas
* Central de ajuda com contatos oficiais
* Conteúdo educativo e informativo
* Orientações de como agir em diferentes situações
* Interface mobile acessível e intuitiva

---

## Tecnologias utilizadas

* React Native
* Expo SDK
* React Navigation
* JavaScript
* Node.js

---

## Estrutura do projeto

```text
escola-protege/
├── App.js
├── app.json
├── package.json
├── babel.config.js
└── src/
    ├── theme.js
    └── screens/
        ├── HomeScreen.js
        ├── DenunciaScreen.js
        ├── AjudaScreen.js
        ├── EducacaoScreen.js
        └── ComoAgirScreen.js
```

---

## Execução do projeto

### Pré-requisitos

* Node.js instalado
* Expo Go instalado no dispositivo Android

---

### Clonar o repositório

```bash
git clone https://github.com/gediwan/escola-protege.git
cd escola-protege
```

---

### Instalar dependências

```bash
npm install
```

---

### Executar o projeto

```bash
npx expo start
```

Após iniciar o servidor, basta abrir o aplicativo Expo Go e escanear o QR Code exibido no terminal.

---

## Geração de APK

Para geração da versão Android utilizando EAS Build:

```bash
eas build --platform android --profile preview
```

Após o processamento, será disponibilizado um link para download do APK.

---

## Referências utilizadas

* Programa Escola que Protege — MEC
* Lei nº 14.811/2024
* Boletins Técnicos Escola que Protege
* Materiais institucionais do Ministério da Educação
* Conteúdos informativos sobre violência escolar e proteção de estudantes

---

## Objetivos relacionados aos ODS


* ODS 5 — Igualdade de Gênero
* ODS 10 — Redução das Desigualdades


---

## Repositório do projeto

https://github.com/gediwan/escola-protege

---

## Finalidade

Projeto desenvolvido exclusivamente para fins acadêmicos.
