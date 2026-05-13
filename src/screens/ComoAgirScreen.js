// src/screens/ComoAgirScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius } from '../theme';

const protocolos = [
  {
    id: 'sofri',
    titulo: 'Sofri violência na escola',
    icon: 'heart-dislike',
    color: '#E74C3C',
    passos: [
      { n: '1', texto: 'Saia do local se for seguro fazer isso.' },
      { n: '2', texto: 'Procure um adulto de confiança (professor, diretor, familiar).' },
      { n: '3', texto: 'Se houver ferimentos físicos, vá ao SAMU (192) ou UPA mais próxima.' },
      { n: '4', texto: 'Registre o ocorrido: anote data, hora, local e o que aconteceu.' },
      { n: '5', texto: 'Faça uma denúncia anonimamente por este app ou pelo Disque 100.' },
      { n: '6', texto: 'Guarde evidências: prints de mensagens, fotos de lesões.' },
    ],
    aviso: 'Você não é culpada. Você tem direito à proteção.',
  },
  {
    id: 'testemunhei',
    titulo: 'Testemunhei uma violência',
    icon: 'eye',
    color: '#E67E22',
    passos: [
      { n: '1', texto: 'Não intervenha fisicamente se houver risco para você.' },
      { n: '2', texto: 'Chame um adulto responsável imediatamente.' },
      { n: '3', texto: 'Se possível, registre (foto, vídeo) sem se colocar em risco.' },
      { n: '4', texto: 'Ofereça apoio à vítima — pergunte como ela está.' },
      { n: '5', texto: 'Denuncie: use este app ou o Disque 100 (anonimamente).' },
      { n: '6', texto: 'Não compartilhe imagens da violência nas redes sociais.' },
    ],
    aviso: 'Testemunhar e denunciar é um ato de coragem.',
  },
  {
    id: 'online',
    titulo: 'Sofri violência online (cyberbullying)',
    icon: 'phone-portrait',
    color: '#8E44AD',
    passos: [
      { n: '1', texto: 'Tire prints de tudo: mensagens, perfis, publicações.' },
      { n: '2', texto: 'Bloqueie e denuncie o perfil na plataforma (Instagram, TikTok, etc.).' },
      { n: '3', texto: 'Não responda às provocações — isso pode piorar.' },
      { n: '4', texto: 'Conte para um adulto de confiança.' },
      { n: '5', texto: 'Denuncie à SaferNet: safernet.org.br ou pelo Escola Segura.' },
      { n: '6', texto: 'Se houver ameaças reais, vá à delegacia com os prints.' },
    ],
    aviso: 'Cyberbullying é crime desde 2024 (Lei 14.811/2024).',
  },
  {
    id: 'professor',
    titulo: 'O agressor é um professor ou funcionário',
    icon: 'person-remove',
    color: '#C0392B',
    passos: [
      { n: '1', texto: 'Conte para outro adulto de confiança na escola (diretora, coordenadora).' },
      { n: '2', texto: 'Se não se sentir segura na escola, fale com um familiar.' },
      { n: '3', texto: 'Denuncie ao Disque 100 — isso é investigado com prioridade.' },
      { n: '4', texto: 'Registre um Boletim de Ocorrência na delegacia.' },
      { n: '5', texto: 'Procure o Conselho Tutelar da sua cidade (para menores de 18 anos).' },
    ],
    aviso: 'Abuso de autoridade é crime. Você tem o direito de denunciar.',
  },
];

function Protocolo({ p, onClose }) {
  return (
    <ScrollView contentContainerStyle={{ padding: spacing.md }}>
      <TouchableOpacity style={styles.backRow} onPress={onClose}>
        <Ionicons name="arrow-back" size={20} color={p.color} />
        <Text style={[styles.backText, { color: p.color }]}>Voltar</Text>
      </TouchableOpacity>

      <View style={[styles.protoHeader, { backgroundColor: p.color + '15', borderColor: p.color + '44' }]}>
        <View style={[styles.protoIcon, { backgroundColor: p.color }]}>
          <Ionicons name={p.icon} size={28} color="#fff" />
        </View>
        <Text style={[styles.protoTitulo, { color: p.color }]}>{p.titulo}</Text>
      </View>

      <Text style={styles.passosLabel}>Siga estes passos:</Text>

      {p.passos.map((passo) => (
        <View key={passo.n} style={styles.passoRow}>
          <View style={[styles.passoNum, { backgroundColor: p.color }]}>
            <Text style={styles.passoNumText}>{passo.n}</Text>
          </View>
          <Text style={styles.passoTexto}>{passo.texto}</Text>
        </View>
      ))}

      <View style={[styles.avisoBox, { backgroundColor: p.color + '15', borderLeftColor: p.color }]}>
        <Ionicons name="information-circle" size={18} color={p.color} />
        <Text style={[styles.avisoText, { color: p.color }]}>{p.aviso}</Text>
      </View>

      <View style={{ height: spacing.xl }} />
    </ScrollView>
  );
}

export default function ComoAgirScreen({ navigation }) {
  const [aberto, setAberto] = useState(null);

  if (aberto) {
    return (
      <SafeAreaView style={styles.safe}>
        <Protocolo p={aberto} onClose={() => setAberto(null)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.accent} />

      <View style={[styles.header, { backgroundColor: colors.accent }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Como Agir</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.md }}>
        <Text style={styles.pageTitle}>Protocolos de atuação</Text>
        <Text style={styles.pageSub}>Selecione a situação que mais se encaixa no que você viveu:</Text>

        {protocolos.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={[styles.card, { backgroundColor: p.color + '12', borderColor: p.color + '44' }]}
            onPress={() => setAberto(p)}
            activeOpacity={0.85}
          >
            <View style={[styles.cardIcon, { backgroundColor: p.color }]}>
              <Ionicons name={p.icon} size={22} color="#fff" />
            </View>
            <Text style={[styles.cardTitulo, { color: p.color }]}>{p.titulo}</Text>
            <Ionicons name="chevron-forward" size={20} color={p.color} style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        ))}

        <View style={styles.refBox}>
          <Text style={styles.refTitulo}>Sobre este conteúdo</Text>
          <Text style={styles.refTexto}>
            Os protocolos foram baseados nas orientações da Operação Escola Segura (MJSP),
            do Programa Escola que Protege (MEC/SNAVE) e do 4º Boletim Técnico Escola que
            Protege (2025).
          </Text>
        </View>

        <View style={{ height: spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
safe: {
  flex: 1,
  backgroundColor: colors.background,
  paddingTop: StatusBar.currentHeight,
},
  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: spacing.md, paddingVertical: spacing.md,
    justifyContent: 'space-between',
  },
  back: { padding: spacing.xs },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#fff' },
  pageTitle: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  pageSub: { fontSize: 14, color: colors.textSecondary, marginBottom: spacing.lg, lineHeight: 20 },
  card: {
    flexDirection: 'row', alignItems: 'center',
    borderRadius: radius.lg, padding: spacing.md,
    marginBottom: spacing.sm, borderWidth: 1,
  },
  cardIcon: {
    width: 44, height: 44, borderRadius: radius.md,
    justifyContent: 'center', alignItems: 'center',
    marginRight: spacing.md,
  },
  cardTitulo: { fontSize: 15, fontWeight: '700', flex: 1 },
  refBox: {
    backgroundColor: '#fff', borderRadius: radius.lg,
    padding: spacing.md, marginTop: spacing.md,
    borderWidth: 1, borderColor: colors.border,
  },
  refTitulo: { fontSize: 14, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  refTexto: { fontSize: 13, color: colors.textSecondary, lineHeight: 19 },
  // Protocolo detalhe
  backRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs, marginBottom: spacing.md },
  backText: { fontSize: 15, fontWeight: '600' },
  protoHeader: {
    borderRadius: radius.lg, padding: spacing.lg,
    alignItems: 'center', marginBottom: spacing.lg, borderWidth: 1,
  },
  protoIcon: {
    width: 56, height: 56, borderRadius: radius.lg,
    justifyContent: 'center', alignItems: 'center', marginBottom: spacing.sm,
  },
  protoTitulo: { fontSize: 19, fontWeight: '700', textAlign: 'center' },
  passosLabel: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.md },
  passoRow: {
    flexDirection: 'row', alignItems: 'flex-start',
    marginBottom: spacing.md, gap: spacing.md,
  },
  passoNum: {
    width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', flexShrink: 0,
  },
  passoNumText: { fontSize: 14, fontWeight: '800', color: '#fff' },
  passoTexto: { fontSize: 15, color: colors.text, flex: 1, lineHeight: 22, paddingTop: 4 },
  avisoBox: {
    flexDirection: 'row', alignItems: 'flex-start',
    borderLeftWidth: 4, borderRadius: radius.sm,
    padding: spacing.md, gap: spacing.sm, marginTop: spacing.md,
  },
  avisoText: { fontSize: 14, fontWeight: '600', flex: 1, lineHeight: 20 },
});
