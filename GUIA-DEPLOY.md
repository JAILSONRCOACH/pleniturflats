# 🚀 GUIA RÁPIDO DE DEPLOY

Como publicar o site Beach Haus na internet em 5 minutos

---

## 🎯 MÉTODO 1: NETLIFY (Mais Fácil e Rápido)

### Tempo: 3 minutos
### Custo: Gratuito
### Domínio: seu-site.netlify.app (pode personalizar depois)

### Passo a passo:

1. **Acesse:** [netlify.com](https://www.netlify.com)

2. **Crie uma conta** (pode usar Google/GitHub)

3. **Clique em "Add new site" > "Deploy manually"**

4. **Arraste a pasta PLENITUR completa** para a área de upload

5. **Aguarde 30 segundos**

6. **✅ PRONTO!** Site publicado instantaneamente

### URL Final:
`https://seu-site-aleatorio.netlify.app`

### Personalizar URL:
- Site settings > Domain settings
- Mude para: `beach-house-jp.netlify.app` (ou outro nome)

### Configurar Domínio Próprio:
- Compre domínio (Registro.br, GoDaddy, etc.)
- Adicione nas configurações do Netlify
- Configure DNS conforme instruções

---

## 🎯 MÉTODO 2: VERCEL (Rápido e Profissional)

### Tempo: 5 minutos
### Custo: Gratuito
### Domínio: seu-site.vercel.app

### Passo a passo:

1. **Acesse:** [vercel.com](https://vercel.com)

2. **Crie conta** com GitHub/GitLab/Email

3. **Clique em "Add New Project"**

4. **Selecione "Import"**

5. **Arraste a pasta ou conecte GitHub**

6. **Deploy automático**

7. **✅ Site no ar!**

---

## 🎯 MÉTODO 3: GITHUB PAGES (Técnico)

### Tempo: 10 minutos
### Custo: Gratuito
### Domínio: seu-usuario.github.io/beach-house

### Passo a passo:

1. **Crie conta no GitHub** (github.com)

2. **Crie novo repositório:**
   - Nome: `beach-house` (ou qualquer nome)
   - Público
   - Sem README

3. **Upload dos arquivos:**
   - Clique em "uploading an existing file"
   - Arraste todos os arquivos da pasta PLENITUR
   - Commit

4. **Ativar GitHub Pages:**
   - Settings > Pages
   - Source: Branch "main" / folder "root"
   - Save

5. **✅ Site publicado em:**
   `https://seu-usuario.github.io/beach-house`

---

## 🎯 MÉTODO 4: HOSTINGER / HOSTGATOR (Domínio Próprio)

### Tempo: 30 minutos
### Custo: Pago (R$ 8-30/mês)
### Domínio: www.beachhouse.com.br

### Quando usar:
- Já tem hospedagem contratada
- Quer domínio profissional (.com.br)
- Precisa email profissional (contato@beachhouse.com.br)

### Passo a passo:

1. **Contrate hospedagem + domínio**
   - Hostinger (~R$ 15/mês)
   - HostGator (~R$ 20/mês)
   - UOL Host (~R$ 30/mês)

2. **Acesse painel de controle (cPanel)**

3. **Encontre "Gerenciador de Arquivos"**

4. **Vá para pasta `public_html`**

5. **Delete arquivos padrão** (index.html, etc.)

6. **Upload da pasta PLENITUR:**
   - Selecione todos os arquivos
   - Upload
   - Aguarde conclusão

7. **✅ Site acessível em:** www.seudominio.com.br

---

## ✅ CHECKLIST PRÉ-DEPLOY

Antes de publicar, verifique:

### Conteúdo:
- [ ] Todas as 6 imagens foram adicionadas?
- [ ] Fotos otimizadas (comprimidas)?
- [ ] Textos revisados (sem erros)?
- [ ] Links do WhatsApp funcionando?
- [ ] Link do Instagram correto?
- [ ] Link do Google Maps funcionando?

### Funcionalidades:
- [ ] Menu mobile funciona?
- [ ] Botão WhatsApp flutuante aparece?
- [ ] Todos os links abrem em nova aba?
- [ ] Scroll suave funciona?
- [ ] Animações aparecem?

### Responsividade:
- [ ] Testado no celular?
- [ ] Testado no tablet?
- [ ] Testado no desktop?
- [ ] Todas as seções aparecem corretamente?

### Performance:
- [ ] Imagens carregam rápido?
- [ ] Site abre em menos de 3 segundos?
- [ ] Sem erros no console (F12)?

---

## 📊 PÓS-DEPLOY

Depois de publicar:

### 1. Google Search Console
- Cadastre seu site
- Envie sitemap
- Monitore indexação

### 2. Google Analytics
- Crie conta gratuita
- Adicione código de rastreamento
- Acompanhe visitas

**Como adicionar:**
Cole antes do `</head>` no index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=SEU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'SEU-ID-AQUI');
</script>
```

### 3. Facebook/Instagram Pixel
- Crie Pixel no Facebook Business
- Cole código no site
- Rastreie conversões para anúncios

### 4. Google My Business
- Cadastre o Beach Haus
- Adicione fotos
- Vincule ao site
- Incentive avaliações

---

## 🔧 ATUALIZAÇÕES FUTURAS

### Como atualizar o site depois de publicado:

**Netlify/Vercel:**
- Arraste nova versão da pasta
- Deploy automático

**GitHub Pages:**
- Commit novos arquivos no repositório
- Aguarde rebuild (2-5 min)

**Hostinger/HostGator:**
- Acesse cPanel > Gerenciador de Arquivos
- Substitua arquivos alterados

---

## 🌐 SUGESTÕES DE DOMÍNIO

Se for comprar domínio próprio:

### Primeira Escolha:
- `beachhouse.com.br`
- `beachhousejp.com.br` (JP = João Pessoa)

### Alternativas:
- `pleniturflats.com.br`
- `beachhousejoaopessoa.com.br`
- `flatsbeachhouse.com.br`

### Onde Comprar:
- **Registro.br** (mais barato, só .br)
- **GoDaddy** (internacional)
- **HostGator** (junto com hospedagem)
- **Hostinger** (junto com hospedagem)

**Dica:** Domínios .com.br custam ~R$ 40/ano

---

## 📱 REDES SOCIAIS

### Instagram
- Usuário: @plenitur_flats_joaopessoa
- Bio: Link do site
- Stories com fotos do flat
- Reels mostrando ambientes

### Facebook
- Página: Beach Haus Plenitur Flats
- Categoria: Aluguel por Temporada
- Link do site
- Fotos da piscina/ambientes

### Google Meu Negócio
- Nome: Beach Haus - Plenitur Flats
- Categoria: Apart-hotel
- Endereço completo
- Fotos
- Link do site

---

## 💰 ANÚNCIOS (OPCIONAL)

### Google Ads
**Budget inicial:** R$ 20-30/dia
**Palavras-chave:**
- "flat joão pessoa temporada"
- "hospedagem praia joão pessoa"
- "beach house joão pessoa"

### Facebook/Instagram Ads
**Budget inicial:** R$ 15-25/dia
**Segmentação:**
- Idade: 25-55 anos
- Localização: Capitais do Nordeste + Sul
- Interesses: Viagens, praia, turismo

---

## 📈 MÉTRICAS PARA ACOMPANHAR

### Semanalmente:
- Número de visitas ao site
- Tempo médio na página
- Taxa de rejeição
- Cliques no WhatsApp

### Mensalmente:
- Leads gerados (contatos)
- Reservas concretizadas
- Origem do tráfego
- Palavras-chave que trouxeram visitas

---

## 🆘 PROBLEMAS COMUNS

### "Site não carrega as imagens"
**Solução:** Verifique se as imagens estão na pasta `images/` com nomes corretos

### "Links não funcionam"
**Solução:** Teste todos os links, corrija no index.html

### "Site lento"
**Solução:** Comprima imagens no TinyPNG.com

### "Não aparece no Google"
**Solução:** Cadastre no Google Search Console, aguarde 7-14 dias

---

## ✅ CHECKLIST FINAL PRÉ-LANÇAMENTO

- [ ] Site publicado e acessível
- [ ] Todas as imagens carregando
- [ ] WhatsApp testado e funcionando
- [ ] Instagram linkado
- [ ] Google Maps abrindo
- [ ] Responsivo em todos os dispositivos
- [ ] Google Analytics instalado
- [ ] Google Search Console configurado
- [ ] Redes sociais atualizadas com link
- [ ] Google Meu Negócio criado

---

## 🎉 PRÓXIMO NÍVEL

Quando quiser evoluir o site:

1. **Adicionar sistema de reservas online**
   - Calendário de disponibilidade
   - Pagamento integrado

2. **Blog**
   - Dicas de João Pessoa
   - Melhor SEO

3. **Múltiplos idiomas**
   - Inglês/Espanhol
   - Atrair turistas internacionais

4. **Chat ao vivo**
   - Resposta imediata
   - Maior conversão

5. **Galeria expandida**
   - Tour virtual 360°
   - Vídeos

---

**Boa sorte com o lançamento!** 🚀🏖️

**Dúvidas?** WhatsApp: (83) 99409-9595
