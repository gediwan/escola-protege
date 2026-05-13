// src/screens/AjudaScreen.js
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius } from '../theme';

const contatos = [
  {
    id: 'disque100',
    nome: 'Disque 100',
    descricao: 'Canal oficial para denúncias de violações de direitos humanos. Gratuito, funciona 24h.',
    numero: '100',
    tipo: 'call',
    color: colors.primary,
    bg: '#EBF1FF',
    icon: 'call',
  },
  {
    id: 'escola_segura',
    nome: 'Operação Escola Segura',
    descricao: 'Canal do MJSP para ameaças e ataques contra escolas. Denúncias anônimas por WhatsApp.',
    numero: '61996110100',
    tipo: 'whatsapp',
    color: '#25D366',
    bg: '#E8F8EF',
    icon: 'logo-whatsapp',
  },
  {
    id: 'ligue180',
    nome: 'Ligue 180',
    descricao: 'Central de Atendimento à Mulher. Para casos de violência doméstica e contra a mulher.',
    numero: '180',
    tipo: 'call',
    color: '#E91E8C',
    bg: '#FDE8F4',
    icon: 'call',
  },
  {
    id: 'cvv',
    nome: 'CVV – Centro de Valorização da Vida',
    descricao: 'Apoio emocional e prevenção ao suicídio. Gratuito, 24 horas.',
    numero: '188',
    tipo: 'call',
    color: '#F39C12',
    bg: '#FEF9E7',
    icon: 'heart',
  },
  {
    id: 'samu',
    nome: 'SAMU',
    descricao: 'Serviço de Atendimento Móvel de Urgência. Para emergências médicas.',
    numero: '192',
    tipo: 'call',
    color: '#E74C3C',
    bg: '#FDF2F2',
    icon: 'medkit',
  },
  {
    id: 'policia',
    nome: 'Polícia Militar',
    descricao: 'Para situações de perigo imediato ou flagrante.',
    numero: '190',
    tipo: 'call',
    color: '#2C3E50',
    bg: '#F2F3F4',
    icon: 'shield',
  },
];

const handlePress = (contato) => {
  if (contato.tipo === 'whatsapp') {
    const msg = encodeURIComponent('Olá, preciso fazer uma denúncia sobre ameaça a escola.');
    Linking.openURL(`whatsapp://send?phone=55${contato.numero}&text=${msg}`);
  } else {
    Linking.openURL(`tel:${contato.numero}`);
  }
};

export default function AjudaScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Central de Ajuda</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.md }}>
        <View style={styles.emergBox}>
          <Ionicons name="warning" size={20} color={colors.danger} />
          <View style={{ flex: 1 }}>
            <Text style={styles.emergTitle}>Em perigo imediato?</Text>
            <Text style={styles.emergSub}>Ligue 190 (Polícia) ou 192 (SAMU) agora.</Text>
          </View>
          <TouchableOpacity
            style={styles.emergBtn}
            onPress={() => Linking.openURL('tel:190')}
          >
            <Text style={styles.emergBtnText}>190</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Canais de apoio e denúncia</Text>
        <Text style={styles.sectionSub}>
          Todos os canais abaixo são gratuitos. Toque para ligar ou acessar.
        </Text>

        {contatos.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={[styles.card, { backgroundColor: c.bg, borderColor: c.color + '33' }]}
            onPress={() => handlePress(c)}
            activeOpacity={0.8}
          >
            <View style={[styles.cardIcon, { backgroundColor: c.color }]}>
              <Ionicons name={c.icon} size={22} color="#fff" />
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardRow}>
                <Text style={[styles.cardName, { color: c.color }]}>{c.nome}</Text>
                <View style={[styles.numBadge, { backgroundColor: c.color }]}>
                  <Text style={styles.numText}>{c.numero}</Text>
                </View>
              </View>
              <Text style={styles.cardDesc}>{c.descricao}</Text>
              <View style={styles.cardAction}>
                <Ionicons
                  name={c.tipo === 'whatsapp' ? 'logo-whatsapp' : 'call'}
                  size={14}
                  color={c.color}
                />
                <Text style={[styles.cardActionText, { color: c.color }]}>
                  {c.tipo === 'whatsapp' ? 'Abrir WhatsApp' : 'Ligar agora'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>💡 O que informar na denúncia?</Text>
          <Text style={styles.infoItem}>• Local da ameaça ou ocorrência</Text>
          <Text style={styles.infoItem}>• Dados do suspeito (se souber)</Text>
          <Text style={styles.infoItem}>• Print de mensagens em redes sociais</Text>
          <Text style={styles.infoItem}>• Data e horário aproximados</Text>
          <Text style={styles.infoNote}>Você não precisa se identificar.</Text>
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
    backgroundColor: colors.primary,
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: spacing.md, paddingVertical: spacing.md,
    justifyContent: 'space-between',
  },
  back: { padding: spacing.xs },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#fff' },
  emergBox: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#FDF2F2', borderRadius: radius.lg,
    padding: spacing.md, marginBottom: spacing.lg,
    borderWidth: 1.5, borderColor: '#F5B7B1', gap: spacing.sm,
  },
  emergTitle: { fontSize: 15, fontWeight: '700', color: colors.danger },
  emergSub: { fontSize: 12, color: '#922B21', marginTop: 2 },
  emergBtn: {
    backgroundColor: colors.danger, borderRadius: radius.full,
    paddingHorizontal: spacing.md, paddingVertical: spacing.sm,
  },
  emergBtnText: { fontSize: 16, fontWeight: '800', color: '#fff' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  sectionSub: { fontSize: 13, color: colors.textSecondary, marginBottom: spacing.md },
  card: {
    flexDirection: 'row', borderRadius: radius.lg,
    padding: spacing.md, marginBottom: spacing.sm,
    borderWidth: 1,
  },
  cardIcon: {
    width: 46, height: 46, borderRadius: radius.md,
    justifyContent: 'center', alignItems: 'center',
    marginRight: spacing.md, flexShrink: 0,
  },
  cardBody: { flex: 1 },
  cardRow: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs, gap: spacing.sm },
  cardName: { fontSize: 14, fontWeight: '700', flex: 1 },
  numBadge: { borderRadius: radius.full, paddingHorizontal: 10, paddingVertical: 3 },
  numText: { fontSize: 13, fontWeight: '800', color: '#fff' },
  cardDesc: { fontSize: 13, color: colors.textSecondary, lineHeight: 18, marginBottom: spacing.sm },
  cardAction: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  cardActionText: { fontSize: 13, fontWeight: '600' },
  infoBox: {
    backgroundColor: '#EBF5FB', borderRadius: radius.lg,
    padding: spacing.md, marginTop: spacing.md,
    borderWidth: 1, borderColor: '#AED6F1',
  },
  infoTitle: { fontSize: 15, fontWeight: '700', color: colors.primary, marginBottom: spacing.sm },
  infoItem: { fontSize: 14, color: colors.text, marginBottom: spacing.xs },
  infoNote: { fontSize: 13, fontWeight: '600', color: colors.secondary, marginTop: spacing.sm },
});
