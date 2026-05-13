// src/screens/DenunciaScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius } from '../theme';

const categorias = [
  { id: 'fisica', label: 'Violência Física', icon: 'hand-left', color: '#E74C3C' },
  { id: 'psicologica', label: 'Violência Psicológica', icon: 'sad', color: '#8E44AD' },
  { id: 'sexual', label: 'Violência Sexual', icon: 'warning', color: '#E67E22' },
  { id: 'assedio_professor', label: 'Assédio de Professor', icon: 'person-remove', color: '#C0392B' },
  { id: 'bullying', label: 'Bullying / Discriminação', icon: 'people', color: '#2980B9' },
  { id: 'outro', label: 'Outro', icon: 'ellipsis-horizontal', color: '#7F8C8D' },
];

export default function DenunciaScreen({ navigation }) {
  const [step, setStep] = useState(1); // 1: categoria, 2: detalhes, 3: confirmação
  const [selected, setSelected] = useState(null);
  const [relato, setRelato] = useState('');
  const [local, setLocal] = useState('');

  const handleEnviar = () => {
    // Em produção: enviar para backend seguro sem dados pessoais
    Alert.alert(
      '✅ Denúncia registrada',
      'Sua denúncia foi enviada de forma anônima. Obrigada pela coragem. Você não está sozinha.',
      [{ text: 'OK', onPress: () => { setStep(1); setSelected(null); setRelato(''); setLocal(''); navigation.goBack(); } }]
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.danger} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Denúncia Anônima</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Banner de anonimato */}
      <View style={styles.anonBanner}>
        <Ionicons name="lock-closed" size={16} color={colors.secondary} />
        <Text style={styles.anonText}>
          100% anônimo — nenhum dado pessoal é coletado
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: spacing.md }}>

        {step === 1 && (
          <>
            <Text style={styles.stepTitle}>Passo 1 de 2</Text>
            <Text style={styles.title}>O que aconteceu?</Text>
            <Text style={styles.subtitle}>Selecione a categoria que melhor descreve a situação:</Text>

            {categorias.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[styles.catCard, selected === cat.id && { borderColor: cat.color, backgroundColor: cat.color + '11' }]}
                onPress={() => setSelected(cat.id)}
                activeOpacity={0.8}
              >
                <View style={[styles.catIcon, { backgroundColor: cat.color }]}>
                  <Ionicons name={cat.icon} size={20} color="#fff" />
                </View>
                <Text style={[styles.catLabel, selected === cat.id && { color: cat.color, fontWeight: '700' }]}>
                  {cat.label}
                </Text>
                {selected === cat.id && (
                  <Ionicons name="checkmark-circle" size={22} color={cat.color} style={{ marginLeft: 'auto' }} />
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[styles.btnNext, !selected && styles.btnDisabled]}
              disabled={!selected}
              onPress={() => setStep(2)}
            >
              <Text style={styles.btnText}>Continuar</Text>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.stepTitle}>Passo 2 de 2</Text>
            <Text style={styles.title}>Conte o que aconteceu</Text>
            <Text style={styles.subtitle}>
              Descreva a situação com o máximo de detalhes que se sentir confortável.
              Não precisa se identificar.
            </Text>

            <Text style={styles.fieldLabel}>Onde aconteceu? (opcional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: sala de aula, corredor, pátio..."
              value={local}
              onChangeText={setLocal}
              placeholderTextColor={colors.textSecondary}
            />

            <Text style={styles.fieldLabel}>O que aconteceu?</Text>
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Descreva o ocorrido. Quanto mais detalhes, melhor..."
              value={relato}
              onChangeText={setRelato}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              placeholderTextColor={colors.textSecondary}
            />

            <View style={styles.warningBox}>
              <Ionicons name="information-circle" size={18} color={colors.primary} />
              <Text style={styles.warningText}>
                Não inclua seu nome, número de telefone ou qualquer dado que possa te identificar.
              </Text>
            </View>

            <View style={styles.rowBtns}>
              <TouchableOpacity style={styles.btnBack} onPress={() => setStep(1)}>
                <Ionicons name="arrow-back" size={18} color={colors.primary} />
                <Text style={styles.btnBackText}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.btnSend, !relato.trim() && styles.btnDisabled]}
                disabled={!relato.trim()}
                onPress={handleEnviar}
              >
                <Ionicons name="send" size={18} color="#fff" />
                <Text style={styles.btnText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
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
    backgroundColor: colors.danger,
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: spacing.md, paddingVertical: spacing.md,
    justifyContent: 'space-between',
  },
  back: { padding: spacing.xs },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#fff' },
  anonBanner: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#EAFAF1', paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm, gap: spacing.xs,
    borderBottomWidth: 1, borderColor: '#A9DFBF',
  },
  anonText: { fontSize: 13, color: '#1E8449', fontWeight: '500' },
  stepTitle: { fontSize: 12, color: colors.textSecondary, marginBottom: spacing.xs, textTransform: 'uppercase', letterSpacing: 1 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  subtitle: { fontSize: 14, color: colors.textSecondary, marginBottom: spacing.lg, lineHeight: 20 },
  catCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: radius.md,
    padding: spacing.md, marginBottom: spacing.sm,
    borderWidth: 1.5, borderColor: colors.border,
  },
  catIcon: {
    width: 38, height: 38, borderRadius: 10,
    justifyContent: 'center', alignItems: 'center', marginRight: spacing.md,
  },
  catLabel: { fontSize: 15, color: colors.text },
  btnNext: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.danger, borderRadius: radius.full,
    paddingVertical: spacing.md, gap: spacing.sm, marginTop: spacing.lg,
  },
  btnDisabled: { backgroundColor: colors.border },
  btnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  fieldLabel: { fontSize: 14, fontWeight: '600', color: colors.text, marginBottom: spacing.xs },
  input: {
    backgroundColor: '#fff', borderRadius: radius.md,
    borderWidth: 1, borderColor: colors.border,
    padding: spacing.md, fontSize: 15, color: colors.text,
    marginBottom: spacing.md,
  },
  textarea: { minHeight: 130 },
  warningBox: {
    flexDirection: 'row', alignItems: 'flex-start',
    backgroundColor: '#EBF5FB', borderRadius: radius.md,
    padding: spacing.md, gap: spacing.sm, marginBottom: spacing.lg,
  },
  warningText: { fontSize: 13, color: colors.primary, flex: 1, lineHeight: 18 },
  rowBtns: { flexDirection: 'row', gap: spacing.sm },
  btnBack: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    borderRadius: radius.full, paddingVertical: spacing.md,
    borderWidth: 1.5, borderColor: colors.primary, gap: spacing.xs,
  },
  btnBackText: { fontSize: 16, fontWeight: '600', color: colors.primary },
  btnSend: {
    flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.danger, borderRadius: radius.full,
    paddingVertical: spacing.md, gap: spacing.sm,
  },
});
