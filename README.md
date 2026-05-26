Markdown
# 📱 Escola que Protege — App Mobile

Projeto de Atividade Extensionista (UNINTER) para o curso de Análise e Desenvolvimento de Sistemas.  
**Título:** Dando um debug na desigualdade de gênero em ambiente escolar  
**Aluno:** Gedivan Santana de Jesus | **RU:** 4552028

---

## Sobre o Projeto

Aplicativo mobile desenvolvido em **React Native (Expo)** para auxiliar no combate à violência de gênero no ambiente escolar. O foco do app é permitir que alunas relatem situações de violência de forma anônima, além de centralizar canais de denúncia e conteúdos informativos.

### Funcionalidades principais
* **Denúncia Anônima:** Formulário categorizado sem coleta de dados do usuário.
* **Central de Emergência:** Acesso rápido para discagem direta (180, 100, 190, etc).
* **Conteúdo Educativo:** Textos informativos sobre consentimento, cyberbullying e saúde mental.
* **Protocolos de Ação:** Guia passo a passo sobre como agir em situações de risco.

### Embasamento técnico e legal
* 1º e 4º Boletim Técnico Escola que Protege (MEC/MDHC/FBSP)
* Lei nº 14.811/2024 (Criminalização do bullying e cyberbullying)
* Decreto nº 12.006/2024 (Programa Escola que Protege)

---

## Como Rodar o Projeto

### Pré-requisitos
* Node.js (v18 ou superior)
* Expo Go instalado no smartphone (Android)

### Instalação e execução
```bash
# Clone o repositório
git clone [https://github.com/gediwan/escola-protege.git](https://github.com/gediwan/escola-protege.git)
cd escola-protege

# Instale as dependências
npm install

# Inicie o Expo
npx expo start
Agora basta abrir o aplicativo Expo Go no celular e escanear o QR Code gerado no terminal.

Build para Android (APK)
Para gerar o arquivo de instalação final, você pode optar pelo build local ou via EAS.

Via EAS Build (Recomendado)
Bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
Via Android Studio (Local)
Bash
npx expo run:android
Estrutura de Arquivos
escola-protege/
├── App.js                    # Configuração de rotas e navegação
├── app.json                  # Manifesto do Expo
├── package.json              # Dependências do projeto
└── src/
    ├── theme.js              # Variáveis de cores globais
    └── screens/              # Telas do aplicativo
        ├── HomeScreen.js
        ├── DenunciaScreen.js
        ├── AjudaScreen.js
        ├── EducacaoScreen.js
        └── ComoAgirScreen.js
Alinhamento com os ODS (ONU)
O projeto atende diretamente aos seguintes Objetivos de Desenvolvimento Sustentável:

ODS 4: Educação de Qualidade

ODS 5: Igualdade de Gênero

ODS 10: Redução das Desigualdades

ODS 16: Paz, Justiça e Instituições Eficazes

UNINTER • 2026
