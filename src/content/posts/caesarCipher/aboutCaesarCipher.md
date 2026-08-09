---
  title: "Sobre o projeto Caesar Cipher"
  description: "Neste artigo, descrevo o contexto do desenvolvimento do projeto caesar cipher"

  published: 2026-08-04
  draft: false

  category: Technology
  tags:
    - C
    - tech
    - project
    - encryption
    - history

  image: "./banner.webp"
  pinned: false
---
A fim de tornar esse artigo mais leve, vou contar todo o contexto de criação deste método de criptografia, então teremos uma parte mais histórica e outra mais técnica, sinta-se à vontade para ler o que quiser! O projeto está em: [caesarCipher](https://github.com/rick-os/caesarCipher)  

---  

## História da cifra de César:
### O que ela é?
  Consiste em trocar uma letra do alfabeto por outra que esteja a x casas à frente, por exemplo, digamos que a chave (x) seja 3, então:
  - A -> D
  - B -> E
  - C -> F
  - ...  

  E assim por diante. Note que, 26 é o número de chaves possíveis, pois se você pegar 27, você dará um giro no alfabeto e vai pra próxima letra, resultando no mesmo que a chave 1.  

### Por que tem esse nome?
  A cifra de César leva esse nome devido ao seu uso pelo imperador romano Júlio César. Não se sabe se foi ele quem criou tal cifra, mas é conhecido que ele usou-a para comunicação com oficiais de guerra.

### Ela foi eficiente?
  Ela parece ter sido bem eficiente, pois a maioria dos seus inimigos eram analfabetos ou achavam que a mensagem estava em uma língua desconhecida então desistiam de ler. Apesar disso, diversos estudiosos da época eram capazes de quebrar a cifra, agora imagine hoje em dia, quebrá-la é brincadeira de criança. Os métodos de descriptografia são:
  - Brute force — Testar todas as 26 chaves e ver qual texto faz mais sentido (é útil para textos pequenos)
  - Análise de Frequência — Existe algo chamado frequência de aparição de letras, as quais cada língua possuí sua própria, se você combinar isso com uma contagem de repetição das letras do texto criptografado e analisar as duas frequências, você consegue descobrir a chave. Em outras palvras, você compara a letra que mais aparece na língua com a letra que mais apareceu no texto criptografado, depois de comparar vc faz uma conta básica com os índices e descobre a chave. Vale ressaltar que esse método só funciona com precisão se o texto for longo o suficiente.  

---   

## Sobre o algoritmo
### Como foi criado?
  Decidi usar a linguagem C, pois estou acostumado a usá-la e gostaria de treinar para o segundo semestre da faculdade. Além disso, ela dispoe de todos os recursos necessários para o desenvolvimento desse projeto.  
  Por fim, decidi modularizar o código em diversas funções menores, se você ficou interessado pode ver no repositório do projeto: [Repositório](https://github.com/rick-os/caesarCipher/)

### Por que existem três arquivos?
  Decidi criar 3 arquivos para organizar de maneira mais limpa o projeto. Resultando na seguinte estrutura:
  - `main.c` — Entrada e saída de dados.
  - `caesarCipher.c` — Todo o algoritmo de criptografia e descriptografia está aqui.
  - `caesarCipher.h` — Este é um arquivo de cabeçalho, podemos entendê-lo como uma ponte entre as funções completas do arquivo `caesarCipher.c` e o arquivo `main.c`. Em outras palavras ele diz tira a função do `caesarCipher.c` e coloca no `main.c` sem copiar o texto.  

### Como funciona?
  - #### Funções elementares:
    Primeiro, vou descrever algumas funções importantes do código:  
    1. Temos a função de encriptar um caracter:
    ```c
    static char encryptChar(char old, int key)
    {
      if(old >= 'A' && old <= 'Z')
      {
        return 'A' + (old - 'A' + key) % 26;
      }
      else if(old >= 'a' && old <= 'z')
      {
        return 'a' + (old - 'a' + key) % 26;
      }
      return old;
    }
    ```
    Essa função faz o seguinte: recebe um caractere, verifica se ele é maiúsculo ou minúsculo, em cada caso, utiliza o valor inteiro — que é obtido na tabela ASCII — para calcular qual é o caractere encriptado. Por exemplo, imagine que old = 'B' e que a chave é 3, temos então:
    - B é maiúsculo, então vamos entrar no primeiro if
    - O retorno será: `'A' + ('B' - 'A' + 3) % 26`
    - Na linguagem C, os caracteres podem ser usados como inteiros, e o seu valor está na [Tabela ASCII](https://www.ascii-code.com/pt), por hora, basta saber que 'A' = 65 e 'B' = 66
    - Se trocarmos os caracteres por inteiros, temos: `65 + (66 - 65 + 3) % 26`
    - Fazendo a conta: `65 + 4 % 26 => 65 + 4 => 69`
    - Se olharmos na tabela, 69 representa a letra 'E', então o retorno da função vai ser a letra 'E'  

    2. Análogamente, temos a função de decriptção:
    ```c 
    static char decryptChar(char encryptedChar, int key)
    {
      if(encryptedChar >= 'A' && encryptedChar <= 'Z')
      {
        return 'A' + (encryptedChar - 'A' - key + 26) % 26;
      }
      else if(encryptedChar >= 'a' && encryptedChar <= 'z')
      {
        return 'a' + (encryptedChar - 'a' - key + 26) % 26;
      }
      return encryptedChar;
    }
    ```
    Ela utiliza da mesma lógica da outra função, mas aqui fazemos o caminho inverso. Você pode estar se perguntando por que somar 26 dentro dos parênteses, fiz isso para excluir valores negativos, assim garanto que o resultado sempre será um deslocamento positivo.  

    3. Por fim, temos a função de análise de frequência:
    ```c
    static void englishKeyFinder(int sortedVec[], int possibleKey[])
    {
      int i;
      int englishFreqSortedVec[26] = {4, 19, 0, 14, 8, 13, 18, 7, 17, 3, 11, 2, 20, 12, 22, 5, 6, 24, 15, 1, 21, 10, 9, 23, 16, 25};
                                    // e, t, a, o, i, n, s, h, r, d, l, c, u, m, w, f, g, y, p, b, v, k, j, x, q, z

      for(i=0; i < 26; i++)
      {
        possibleKey[i] = (26 + sortedVec[0] - englishFreqSortedVec[i]) % 26;
      }
    }
    ```
    Essa função faz o seguinte:
    - Compara a letra que mais ocorreu no texto criptografado com a letra que mais ocorre na língua inglesa, até que tenha comparado a todas as letras.
    - Com base nisso, preenche um vetor com as chaves mais prováveis em ordem decrescente.

  - #### Função de Encriptação de texto:
    A função que apresentarei aqui, tem como objetivo fazer a encriptação de cada uma das letras de um texto, então ela fará a aplicação da função elementar diversas vezes.
    ```c
    int caesarEncrypt(char textInput[], char textOutput[])
    {
      int i = 0;
      int key = generateKey();

      while(textInput[i] != '\0')
      {
        if((textInput[i] >= 'a' && textInput[i] <= 'z') || (textInput[i] >= 'A' && textInput[i] <= 'Z'))
        {
          textOutput[i] = encryptChar(textInput[i], key);
        }
        else
        {
          textOutput[i] = textInput[i];
        }
        i++;
      } 
      textOutput[i] = '\0';

      return key;
    }
    ```
    Note que, ela só chama a função de encriptação individual para cada letra que temos no texto, caso não seja letra, ela copia o caractere.  

  - #### Função de Decriptação de texto:
    A função de decriptação funciona de forma análoga, mas essa exige que você saiba a chave.
    ```c
    void caesarDecrypt(char textInput[], char textOutput[], int key)
    {
      int i = 0;

      while(textInput[i] != '\0')
      {
        if((textInput[i] >= 'a' && textInput[i] <= 'z') || (textInput[i] >= 'A' && textInput[i] <= 'Z'))
        {
          textOutput[i] = decryptChar(textInput[i], key);
        }
        else
        {
          textOutput[i] = textInput[i];
        }
        i++;
      }
      textOutput[i] = '\0';
    }
    ```
    Se você olhar bem, ela é o mesmo que a outra, apenas mudando a função que você chama.

  - #### Função de quebra de criptografia de textos curtos:
    Essa é um pouco mais legal, usamos ela quando não sabemos qual é a chave de encriptação e o texto é pequeno ( <250 caracteres):
    ```c
    void breakCaesarEncryptingShortText(char encryptedText[], char decryptedText[])
    {
      // this is just an simple case, I need to improve using BoW, but I will first 
      // implement a simple logic.

      int n = 26, i;
      int possibleKey[n], sortedVec[n], alphabetCounter[n];
 
      charOccurrence(encryptedText, alphabetCounter);     // counting char occurrence
      printf("'a' freq (idx 0): %d\n", alphabetCounter[0]);
      sortCharOccurrenceVec(alphabetCounter, sortedVec);  // sorting it
      printf("Most freq index (sortedVec[0]): %d\n", sortedVec[0]);
      englishKeyFinder(sortedVec, possibleKey);          // finding possible keys

      printf("Text is too short, trying brute force.\n");
      for(i=0; i < 26; i++)
      {
        caesarDecrypt(encryptedText, decryptedText, possibleKey[i]);
        printf("%d \t->\t %s.\n\n", possibleKey[i], decryptedText);
      }
    }
    ```
    Ela usa um método misto, usando brute force com as chaves que possuem a  maior chance de serem corretas primeiro — essas chaves vêm da terceira função elementar.  
    Você pode estar se perguntando, mas e as outras funções que você chamou, o que fazem? Elas são funções simples, você pode conferi-las no repositório do projeto, optei por não colocar aqui a fim de não estender muito o artigo.  
    
  - #### Função de quebra de criptografia de textos longos: 
    Essa é a função para textos longos, em que a análise de frequência se torna confiável:
    ```c
    int breakCaesarEncryptingLongText(char encryptedText[], char decryptedText[])
    {
      // this is just an simple case, I need to improve using BoW, but I will first 
      // implement a simple logic.

      int n = 26;
      int possibleKey[n], sortedVec[n], alphabetCounter[n];

      charOccurrence(encryptedText, alphabetCounter);
      printf("'a' freq (idx 0): %d\n", alphabetCounter[0]);

      sortCharOccurrenceVec(alphabetCounter, sortedVec);
      printf("Most freq index (sortedVec[0]): %d\n", sortedVec[0]);

      englishKeyFinder(sortedVec, possibleKey);
      printf("First calculated key (possibleKey[0]): %d\n", possibleKey[0]);

      caesarDecrypt(encryptedText, decryptedText, possibleKey[0]);

      return possibleKey[0];
    }
    ```
    Ela faz o mesmo que a outra, mas usa apenas a primeira chave, pois ela é a correta em quase 100% dos casos, só não será correta se o texto não seguir a frequência de letras da língua em que foi escrito.  

### Essa criptografia é útil nos dias atuais?
  Certamente que não, mas você pode usá-la pra descontrair ou fazer um enigma simples. Ela não funciona pois é muito fácil implementar um algoritmo que quebre ela com precisão, você só precisa adicionar um sistema de pontuação com base em palavras conhecidas, e então terá um descriptografador de cifras de César perfeito.  

---  
Esse foi o artigo, espero que tenham gostado, escrevi assim para documentar um pouco meu projeto, e também por estar sem muita coisa pra fazer. Dito isso, muito obrigado por ler até aqui!
