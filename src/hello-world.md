# Primeiro Programa

Todo mundo começa com um clássico: **Hello, World!**

Vamos escrever nosso primeiro programa em **SkyL**. Ele vai simplesmente exibir uma mensagem na tela — mas é o primeiro passo para coisas muito maiores.

Abra seu editor de código favorito (pode ser um simples editor de texto ou uma IDE mais completa) e crie um arquivo chamado `hello_world.skyl` dentro da pasta `src` do seu projeto. Dentro desse arquivo, adicione o seguinte código:

```skyl
import std.io;

def main() -> void {
    print("Hello World");
}
```

Esse código faz exatamente o que parece: define uma função `main`, o ponto de entrada do nosso programa, e imprime a frase "Hello World" no terminal.

Agora vamos compilar e executar.

No terminal, dentro da raiz do seu projeto, execute:

```sh
skyl -c Sky.toml
```

Esse comando lê o arquivo de configuração `Sky.toml` e compila os arquivos `.skyl`. O resultado será um arquivo bytecode com extensão `.skyc`.

Para executar o programa compilado, digite:

```sh
skyl -e hello_world.skyc
```

Se tudo der certo, você verá a mensagem:

```
Hello World
```

Parabéns! Você acabou de rodar seu primeiro programa em SkyL 🎉

Agora vamos entender a estrutura deste programa. Ufa, parece bastante coisa para um começo — mas vamos por partes.

A primeira linha:

```skyl
import std.io;
```

traz o módulo `io` da biblioteca padrão (`std`) para o nosso arquivo, permitindo que a gente use funções de entrada e saída — como a `print`, que usamos logo em seguida.

Na sequência, temos a definição da função `main`:

```skyl
def main() -> void {
    print("Hello World");
}
```

Essa função é o ponto de entrada do programa — é onde a execução começa.  
A sintaxe `def nome() -> tipo` define uma função. No nosso caso, `main` não recebe parâmetros e retorna `void`, ou seja, nada.

Dentro da função, chamamos `print("Hello World")`, que escreve a mensagem no terminal. Como usamos `import std.io`, temos acesso à função `print` da biblioteca padrão.

Simples, né?

Nos próximos capítulos, vamos explorar variáveis, tipos, controle de fluxo e muito mais. Mas por agora, respire fundo: você já escreveu, compilou e executou um programa completo em SkyL.

Nada mal para um primeiro passo 🚀

Ah, e aqui vai uma dica interessante: na verdade, você **não precisa** escrever a linha `import std.io;`.

Isso acontece porque o módulo `std.io` faz parte do *prelude* da linguagem — um conjunto de funções, tipos e módulos que são automaticamente importados em todo programa SkyL. Isso significa que funções como `print` já estão disponíveis por padrão, sem a necessidade de `import`.

Ou seja, o exemplo anterior funcionaria perfeitamente mesmo assim:

```skyl
def main() -> void {
    print("Hello World");
}
```

A gente colocou o `import std.io` apenas para mostrar como seria feito caso fosse necessário, e também para te familiarizar com a sintaxe de importação. Mas no dia a dia, pode ficar tranquilo: o básico já está ao seu alcance sem esforço 😊
