# 📱 Escola que Protege — App

> Projeto de Atividade Extensionista — UNINTER  
> Curso: CST em Análise e Desenvolvimento de Sistemas  
> Título: *Dando um debug na desigualdade de gênero em ambiente escolar*  
> Aluno: Gedivan Santana de Jesus | RU: 4552028

---

## 📋 Sobre o projeto

Aplicativo mobile desenvolvido com **React Native + Expo** voltado para combater a violência de gênero no ambiente escolar. Permite que meninas denunciem situações de violência de forma **anônima e segura**, acessem conteúdo educativo e canais de ajuda.

### Funcionalidades

- 🔴 **Denúncia Anônima** — Categorias de violência, relato seguro sem coleta de dados pessoais
- 📞 **Central de Ajuda** — Disque 100, WhatsApp Escola Segura, Ligue 180, CVV, SAMU e Polícia
- 📚 **Módulo Educativo** — Conteúdo sobre violência de gênero, consentimento, machismo, saúde mental e dados estatísticos
- 🛡️ **Como Agir** — Protocolos passo a passo para diferentes situações de violência

### Fontes utilizadas

- 4º Boletim Técnico Escola que Protege (MEC/MDHC/FBSP, 2025)
- 1º Boletim Técnico Escola que Protege (MEC/MDHC/FBSP, 2024)
- Lunetas — Violência contra meninas nas escolas
- Programa Escola que Protege / SNAVE (Decreto nº 12.006/2024)
- Lei nº 14.811/2024 (tipificação do bullying e cyberbullying)

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+ instalado: https://nodejs.org
- Expo Go instalado no celular Android: https://expo.dev/go

### Passo 1 — Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/escola-protege.git
cd escola-protege
```

### Passo 2 — Instalar dependências

```bash
npm install
```

### Passo 3 — Iniciar o servidor

```bash
npx expo start
```

### Passo 4 — Abrir no celular

1. Abra o **Expo Go** no seu celular Android
2. Escaneie o **QR Code** que aparece no terminal
3. O app será carregado no seu celular ✅

---

## 📦 Gerar APK para distribuição

### Opção 1 — APK local (sem conta EAS)

```bash
npx expo run:android
```
> Requer Android Studio instalado

### Opção 2 — APK via EAS Build (recomendado, gratuito)

```bash
# Instalar EAS CLI
npm install -g eas-cli

# Login na conta Expo (criar em expo.dev)
eas login

# Configurar o projeto
eas build:configure

# Gerar APK
eas build --platform android --profile preview
```

Após o build, você receberá um link para baixar o APK e instalar diretamente em qualquer Android.

---

## 🗂️ Estrutura do projeto

```
escola-protege/
├── App.js                    # Navegação principal
├── app.json                  # Configurações do Expo
├── package.json              # Dependências
├── babel.config.js
└── src/
    ├── theme.js              # Cores, espaçamentos, tipografia
    └── screens/
        ├── HomeScreen.js     # Tela inicial
        ├── DenunciaScreen.js # Denúncia anônima
        ├── AjudaScreen.js    # Central de ajuda / contatos
        ├── EducacaoScreen.js # Módulo educativo
        └── ComoAgirScreen.js # Protocolos de atuação
```

---

## 🎨 Identidade visual

Paleta baseada no Programa Escola que Protege (MEC):

| Cor | Uso |
|-----|-----|
| `#1A3A6B` Azul escuro | Header, cor primária |
| `#27AE60` Verde | Ações seguras, anonimato |
| `#F39C12` Laranja/Amarelo | Atenção, Como Agir |
| `#E74C3C` Vermelho | Denúncia, urgência |

---

## 📌 ODS Relacionados

- **ODS 4** — Educação de qualidade
- **ODS 5** — Igualdade de gênero
- **ODS 10** — Redução das desigualdades
- **ODS 16** — Paz, justiça e instituições eficazes

---

## 📞 Canais de ajuda integrados

| Canal | Número | Tipo |
|-------|--------|------|
| Disque 100 | 100 | Ligação gratuita |
| Operação Escola Segura | (61) 9961-0100 | WhatsApp |
| Ligue 180 | 180 | Ligação gratuita |
| CVV | 188 | Ligação gratuita |
| SAMU | 192 | Ligação gratuita |
| Polícia Militar | 190 | Ligação gratuita |

---

*Projeto acadêmico — UNINTER 2025*
