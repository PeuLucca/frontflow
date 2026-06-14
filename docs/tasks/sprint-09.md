# Sprint 09 - Rivalidade, Duelos e Personagens Estrela

## Goal

Transformar a temporada em uma disputa mais emocional e memorável.

Atualmente os eventos mostram apenas o resultado entre agências.

O objetivo desta sprint é fazer o jogador sentir que está enfrentando Miranda Voss diretamente e que cada personagem importa.

---

## Context

Hoje a temporada funciona assim:

```txt
Front Row 2 x 1 Velvet House
```

Isso funciona, mas é abstrato.

O jogador não cria conexão emocional com o resultado.

Queremos que os eventos pareçam confrontos reais entre personagens.

---

# Feature 1 - Sistema de Duelo Direto

## Objetivo

Substituir parte da lógica visual de:

```txt
Front Row vs Velvet House
```

por:

```txt
Personagem vs Personagem
```

Exemplo:

```txt
Gigi Hadid
VS
Kendall Jenner
```

ou

```txt
Anitta
VS
Rihanna
```

---

## Regras

Durante cada evento:

* Selecionar representantes das duas agências.
* Mostrar as duas personagens em destaque.
* Exibir suas imagens.
* Exibir nome.
* Exibir categoria.

Depois mostrar:

```txt
Gigi Hadid venceu o duelo.
```

e atualizar o placar da temporada.

---

## Resultado Visual

Antes:

```txt
Front Row 2 x 1 Velvet House
```

Depois:

```txt
Gigi Hadid
VS
Kendall Jenner

🏆 Gigi Hadid venceu

Front Row 1 x 0 Velvet House
```

---

## Acceptance Criteria

* Eventos mostram personagens.
* Imagens aparecem.
* Resultado do duelo é claro.
* Placar geral continua existindo.

---

# Feature 2 - Provocações da Miranda

## Objetivo

Dar personalidade para Miranda Voss.

Atualmente ela existe apenas como rival.

Ela deve reagir constantemente.

---

## Regras

Sempre que o jogador fizer uma escolha no draft:

* Mostrar o avatar da Miranda.
* Mostrar um balão de fala curto.

Exemplo:

```txt
"Hm..."
```

```txt
"Foi essa a sua escolha?"
```

```txt
"Interessante."
```

```txt
"Eu teria escolhido outra."
```

```txt
"Corajosa."
```

---

## Quando o jogador escolher uma estrela

Exemplos:

```txt
"Eu sabia que você escolheria ela."
```

```txt
"Uma escolha previsível."
```

```txt
"Ela é boa. Admito."
```

---

## Quando a Miranda vencer um evento

Exemplos:

```txt
"Como esperado."
```

```txt
"A temporada ainda é minha."
```

```txt
"Você ainda tem muito o que aprender."
```

---

## Quando a Miranda perder

Exemplos:

```txt
"..."
```

```txt
"Sorte."
```

```txt
"Isso não muda nada."
```

---

## Acceptance Criteria

* Avatar da Miranda aparece durante o draft.
* Balão de fala aparece.
* Frases variam aleatoriamente.
* Sistema suporta expansão futura.

---

# Feature 3 - Sistema de Estrelas

## Objetivo

Criar personagens especiais.

O jogador deve sentir emoção ao encontrá-las.

---

## Regras

Somente 7 personagens possuem status:

```txt
⭐ ESTRELA
```

---

## Estrelas Iniciais

```txt
⭐ Georgina Rodríguez
⭐ Antonela Roccuzzo
⭐ Gigi Hadid
⭐ Kendall Jenner
⭐ Rihanna
⭐ Anitta
⭐ Victoria Beckham
```

---

## Características

Uma estrela:

* Possui atributos muito equilibrados.
* Raramente possui pontos fracos.
* Tem vantagem em vários eventos.
* Não é invencível.

---

## Visual

Na carta:

```txt
⭐ ESTRELA
```

Adicionar:

* brilho leve
* borda diferenciada
* selo visual

Sem exageros.

---

## Draft

Quando uma estrela aparece:

* destacar visualmente.
* manter elegância.
* não transformar o jogo em cassino.

---

## Reações da Miranda

Quando uma estrela aparece:

```txt
"Ah..."
```

```txt
"Agora ficou interessante."
```

```txt
"Ela pode mudar uma temporada."
```

---

## Acceptance Criteria

* Apenas 7 estrelas.
* Destaque visual claro.
* Miranda reage às estrelas.
* Estrelas não quebram o balanceamento.

---

# Definition of Done

Sprint completa quando:

* Eventos mostram duelos diretos.
* Miranda provoca durante o draft.
* Sistema de estrelas existe.
* As 7 estrelas estão configuradas.
* Build passa.
* Mobile continua funcionando.
* Todos os textos permanecem em português.
