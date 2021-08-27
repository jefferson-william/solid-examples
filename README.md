# solid-examples

![image](https://user-images.githubusercontent.com/2935122/131062548-a50acad7-c921-4852-8ec3-0944775c8db5.png)

Exemplos práticos e didáticos sobre SOLID.

## Como consumir este repositório

Rode `yarn install` e dentro de cada exemplo `yarn install ; yarn test`.

## Como funciona os exemplos

Alguns são evoluções de exemplos anteriores.

Note que cada um tem um README sobre ele dividido pelo seguinte:

- Configuração do projeto;
- Passos a seguir no desenvolvimento;
- Problema a ser resolvido;
- Regras;
- Objetivos;
- Ilustração;
- Abstrações;
- Roteiro (talvez).

## Princípios do SOLID

Os princípios SOLID para programação e design orientados a objeto são de autoria de Robert C. Martin
(mais conhecido como Uncle Bob) e datam do início de 2000.

A palavra SOLID é um acróstico onde cada letra significa a sigla de um princípio: SRP, OCP, LSP, ISP e DIP.

| Sigla | Nome                            | Descrição                                                                        |
| ----- | ------------------------------- | -------------------------------------------------------------------------------- |
| SRP   | Single Responsibility Principle | Uma classe deve ter um, e somente um, motivo para mudar.                         |
| OCP   | Open Closed Principle           | Você deve ser capaz de estender um comportamento de uma classe, sem modificá-lo. |
| LSP   | Liskov Substitution Principle   | As classes derivadas devem poder substituir suas classes bases.                  |
| ISP   | Interface Segregation Principle | Muitas interfaces específicas são melhores do que uma interface geral.           |
| DIP   | Dependency Inversion Principle  | Dependa de uma abstração e não de uma implementação.                             |

Os princípios SOLID devem ser aplicados no desenvolvimento de software de forma que o software produzido tenha as seguintes características:

- Seja fácil de manter, adaptar e se ajustar às constantes mudanças exigidas pelos clientes;
- Seja fácil de entender e testar;
- Seja construído de forma a estar preparado para ser facilmente alterado com o menor esforço possível;
- Seja possível de ser reaproveitado;
- Exista em produção o maior tempo possível;
- Que atenda realmente as necessidades dos clientes para o qual foi criado.

A utilização dos princípios SOLID tem o objetivo de evitar:

- Erros, Falhas e defeitos
- Estrutura de código ruim
- Código insustentável (difícil de manter)
- Desempenho sofrível
- Código de difícil compreensão

## Single Responsibility Principle

![1-single-responsibility-principle](https://user-images.githubusercontent.com/2935122/131062451-fe72e322-7d15-48fe-a3a8-a997e748e502.png)

### Uma entidade deveria ser responsável por apenas uma atividade

Utilizando esse principio você poderá garantir que qualquer alteração que venha a acontecer no código irá impactar somente seus dependentes diretos.

## Open Closed Principle

![2-open-close-principle](https://user-images.githubusercontent.com/2935122/131062461-bb5fc519-5c50-40e6-bc8d-4467de29b8c3.png)

### As entidades de (classes, módulos, funções) devem estar abertas para extensão, entretanto fechado para modificação

Utilizando esse princípio podemos garantir que as alterações sendo realizadas através de extensão da entidade base,
nada será afetado no contexto dos códigos que utilizam a classe original.

## Liskov Substitution Principle

![3-liskov-substitution-principle](https://user-images.githubusercontent.com/2935122/131062468-133f6de1-2df9-42ad-ac09-9ce78a3d886a.png)

### O objetivo desse princípio é verificar que uma subclasse poderá ser substituída pela sua super classe sem quebrar a aplicação

Se Cigar/Beer/Water é subclasse de Product, os objetos do tipo Product podem ser substituidos por instâncias de Cigar/Beer/Water.

## Interface Segregation Principle

![4-interface-segregation-principle](https://user-images.githubusercontent.com/2935122/131062477-4943ffa4-e6d6-4b38-8816-38a7433591ef.png)

### Crie interfaces refinadas e específicas, porque elas são melhores que interfaces genéricas

Não devemos ser forçados a depender das interfaces que não iremos utilizar.
Esse princípio lida com as desvantagens da implementação de grandes interfaces únicas.

## Dependency Inversion Principle

![5-dependency-inversion-principle](https://user-images.githubusercontent.com/2935122/131062479-49769bd1-ede2-4814-b7d1-894263dc48e7.png)

### Depender das abstrações que recebe e não das implementações feitas internamente

Separe os locais que tem forte acoplamento. Até um `new AlgumaCoisa()` pode gerar acoplamento.
Sempre que possível e fazer sentido, passe uma implementação abstraída em um método ou classe por parâmetro até onde ela será utilizada.

## Referências

- https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898
- http://www.macoratti.net/11/05/pa_solid.htm
