// src/screens/EducacaoScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, StatusBar, Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius } from '../theme';

const topicos = [
  {
    id: 'violencia_genero',
    titulo: 'O que é violência de gênero?',
    resumo: 'Entenda as diferentes formas de violência que afetam meninas e mulheres.',
    icon: 'alert-circle',
    color: '#E74C3C',
    bg: '#FDF2F2',
    conteudo: [
      {
        tipo: 'texto',
        texto: 'Violência de gênero é qualquer ato que cause dano físico, sexual ou psicológico baseado no gênero da pessoa. Ela pode acontecer em casa, na rua, na escola ou online.',
      },
      {
        tipo: 'topicos',
        itens: [
          '🤛 Violência física: tapas, empurrões, bater.',
          '😔 Violência psicológica: humilhações, ameaças, controle.',
          '🔞 Violência sexual: qualquer ato sexual sem consentimento.',
          '💬 Assédio verbal: comentários sobre seu corpo sem sua permissão.',
          '📱 Cyberbullying: ofensas e ameaças online.',
        ],
      },
      {
        tipo: 'destaque',
        texto: 'Nenhuma dessas situações é culpa sua. Você tem o direito de denunciar.',
      },
    ],
  },
  {
    id: 'consentimento',
    titulo: 'Consentimento: o que significa?',
    resumo: 'Aprenda sobre o direito ao seu próprio corpo e como reconhecer violações.',
    icon: 'hand-left',
    color: '#8E44AD',
    bg: '#F5EEF8',
    conteudo: [
      {
        tipo: 'texto',
        texto: 'Consentimento significa dizer SIM com vontade, sem pressão, medo ou manipulação. Não é consentimento quando a pessoa está bêbada, com medo, dormindo ou com menos de 14 anos (no Brasil).',
      },
      {
        tipo: 'destaque',
        texto: '"Não" significa não. "Talvez" também significa não. Silêncio também significa não.',
      },
      {
        tipo: 'topicos',
        itens: [
          '✅ Pode ser dado e retirado a qualquer momento.',
          '✅ Precisa ser claro, consciente e voluntário.',
          '❌ Pressão, chantagem ou ameaça anulam o consentimento.',
        ],
      },
    ],
  },
  {
    id: 'machismo',
    titulo: 'Machismo e seus impactos',
    resumo: 'Como o machismo se manifesta no dia a dia e dentro das escolas.',
    icon: 'warning',
    color: '#E67E22',
    bg: '#FEF5E7',
    conteudo: [
      {
        tipo: 'texto',
        texto: 'Machismo é um sistema de crenças que coloca homens em posição de superioridade sobre mulheres. Ele pode ser sutil (comentários "inocentes") ou explícito (agressões físicas).',
      },
      {
        tipo: 'topicos',
        itens: [
          '📚 Na escola: piadas sobre meninas não saberem de matemática.',
          '👗 No cotidiano: culpar a vítima pela roupa que usava.',
          '💪 Expressões: "chora que nem homem", "lugar de mulher é...".',
          '📱 Online: compartilhar fotos sem consentimento.',
        ],
      },
      {
        tipo: 'destaque',
        texto: 'Reconhecer o machismo é o primeiro passo para combatê-lo.',
      },
    ],
  },
  {
    id: 'saude_mental',
    titulo: 'Saúde mental e bem-estar',
    resumo: 'Cuidar de si é essencial. Saiba quando buscar ajuda.',
    icon: 'heart',
    color: '#1ABC9C',
    bg: '#E8F8F5',
    conteudo: [
      {
        tipo: 'texto',
        texto: 'Situações de violência causam impactos profundos na saúde mental. É normal sentir medo, vergonha, raiva ou tristeza. Buscar ajuda é um ato de coragem, não de fraqueza.',
      },
      {
        tipo: 'topicos',
        itens: [
          '💚 Sinais de alerta: ansiedade excessiva, isolamento, tristeza prolongada.',
          '📞 CVV: ligue 188 — apoio emocional gratuito 24h.',
          '🏫 Psicólogo escolar: se sua escola tiver, você pode buscar apoio.',
          '👩‍👧 Adulto de confiança: uma professora, um familiar.',
        ],
      },
      {
        tipo: 'destaque',
        texto: 'Você merece cuidado e apoio. Nunca está sozinha.',
      },
    ],
  },
  {
    id: 'dados',
    titulo: 'Dados sobre violência escolar',
    resumo: 'Números do 4º Boletim Escola que Protege (MEC, 2025).',
    icon: 'bar-chart',
    color: '#2980B9',
    bg: '#EBF5FB',
    conteudo: [
      {
        tipo: 'texto',
        texto: 'O 4º Boletim Técnico do Programa Escola que Protege (MEC/MDHC, 2025) revela dados alarmantes sobre violência em escolas brasileiras:',
      },
      {
        tipo: 'topicos',
        itens: [
          '📊 15.759 notificações de violência interpessoal em escolas em 2024.',
          '📈 Aumento de 353% nos registros entre 2013 e 2024.',
          '👧 57,9% das vítimas eram do sexo feminino.',
          '😢 12,6% dos casos eram violências autoprovocadas.',
          '🏫 67,5% dos diretores relataram ao menos 1 caso de bullying em 2023.',
          '📱 Ameaças online cresceram 360% entre 2021 e 2025.',
        ],
      },
      {
        tipo: 'destaque',
        texto: 'Esses números mostram que a violência é real e precisa ser denunciada.',
      },
    ],
  },
];

function TopicoDetalhe({ topico, onClose }) {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: spacing.md }}>
      <TouchableOpacity style={styles.backRow} onPress={onClose}>
        <Ionicons name="arrow-back" size={20} color={topico.color} />
        <Text style={[styles.backText, { color: topico.color }]}>Voltar</Text>
      </TouchableOpacity>

      <View style={[styles.detHeader, { backgroundColor: topico.bg, borderColor: topico.color + '44' }]}>
        <View style={[styles.detIcon, { backgroundColor: topico.color }]}>
          <Ionicons name={topico.icon} size={28} color="#fff" />
        </View>
        <Text style={[styles.detTitulo, { color: topico.color }]}>{topico.titulo}</Text>
      </View>

      {topico.conteudo.map((bloco, i) => {
        if (bloco.tipo === 'texto') {
          return (
            <Text key={i} style={styles.detTexto}>{bloco.texto}</Text>
          );
        }
        if (bloco.tipo === 'topicos') {
          return (
            <View key={i} style={styles.detTopicos}>
              {bloco.itens.map((item, j) => (
                <Text key={j} style={styles.detItem}>{item}</Text>
              ))}
            </View>
          );
        }
        if (bloco.tipo === 'destaque') {
          return (
            <View key={i} style={[styles.detDestaque, { backgroundColor: topico.color + '18', borderLeftColor: topico.color }]}>
              <Text style={[styles.detDestaqueText, { color: topico.color }]}>{bloco.texto}</Text>
            </View>
          );
        }
        return null;
      })}

      <View style={{ height: spacing.xl }} />
    </ScrollView>
  );
}

export default function EducacaoScreen({ navigation }) {
  const [abrindo, setAbrindo] = useState(null);

  if (abrindo) {
    return (
      <SafeAreaView style={styles.safe}>
        <TopicoDetalhe topico={abrindo} onClose={() => setAbrindo(null)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />

      <View style={[styles.header, { backgroundColor: colors.secondary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Se Informe</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.md }}>
        <Text style={styles.pageTitle}>Conteúdo educativo</Text>
        <Text style={styles.pageSub}>Toque em um tópico para saber mais.</Text>

        {topicos.map((t) => (
          <TouchableOpacity
            key={t.id}
            style={[styles.card, { backgroundColor: t.bg, borderColor: t.color + '44' }]}
            onPress={() => setAbrindo(t)}
            activeOpacity={0.85}
          >
            <View style={[styles.cardIcon, { backgroundColor: t.color }]}>
              <Ionicons name={t.icon} size={22} color="#fff" />
            </View>
            <View style={styles.cardBody}>
              <Text style={[styles.cardTitulo, { color: t.color }]}>{t.titulo}</Text>
              <Text style={styles.cardResumo}>{t.resumo}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={t.color} />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.linkCard}
          onPress={() => Linking.openURL('https://lunetas.com.br/violencia-contra-meninas-nas-escolas/')}
        >
          <Ionicons name="open-outline" size={18} color={colors.primary} />
          <Text style={styles.linkText}>Leia mais: Violência contra meninas nas escolas — Lunetas</Text>
        </TouchableOpacity>

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
  pageSub: { fontSize: 14, color: colors.textSecondary, marginBottom: spacing.lg },
  card: {
    flexDirection: 'row', alignItems: 'center',
    borderRadius: radius.lg, padding: spacing.md,
    marginBottom: spacing.sm, borderWidth: 1,
  },
  cardIcon: {
    width: 44, height: 44, borderRadius: radius.md,
    justifyContent: 'center', alignItems: 'center',
    marginRight: spacing.md, flexShrink: 0,
  },
  cardBody: { flex: 1 },
  cardTitulo: { fontSize: 15, fontWeight: '700', marginBottom: 3 },
  cardResumo: { fontSize: 13, color: colors.textSecondary, lineHeight: 18 },
  linkCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#EBF1FF', borderRadius: radius.md,
    padding: spacing.md, gap: spacing.sm, marginTop: spacing.sm,
    borderWidth: 1, borderColor: '#AED6F1',
  },
  linkText: { fontSize: 13, color: colors.primary, flex: 1, fontWeight: '500' },
  // Detalhe
  backRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs, marginBottom: spacing.md },
  backText: { fontSize: 15, fontWeight: '600' },
  detHeader: {
    borderRadius: radius.lg, padding: spacing.lg,
    alignItems: 'center', marginBottom: spacing.lg,
    borderWidth: 1,
  },
  detIcon: {
    width: 56, height: 56, borderRadius: radius.lg,
    justifyContent: 'center', alignItems: 'center', marginBottom: spacing.sm,
  },
  detTitulo: { fontSize: 20, fontWeight: '700', textAlign: 'center' },
  detTexto: { fontSize: 15, color: colors.text, lineHeight: 23, marginBottom: spacing.md },
  detTopicos: {
    backgroundColor: '#fff', borderRadius: radius.md,
    padding: spacing.md, marginBottom: spacing.md,
    borderWidth: 1, borderColor: colors.border,
  },
  detItem: { fontSize: 14, color: colors.text, lineHeight: 22, marginBottom: spacing.xs },
  detDestaque: {
    borderLeftWidth: 4, borderRadius: radius.sm,
    padding: spacing.md, marginBottom: spacing.md,
  },
  detDestaqueText: { fontSize: 15, fontWeight: '600', lineHeight: 22 },
});
