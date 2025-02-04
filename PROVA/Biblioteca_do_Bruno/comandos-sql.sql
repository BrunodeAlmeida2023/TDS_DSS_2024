INSERT INTO AUTORES(NOME, NACIONALIDADE) VALUES ("","");
SELECT * FROM AUTORES;
UPDATE AUTORES SET NOME = "", NACIONALIDADE = "" WHERE ID = 1;
DELETE FROM AUTORES WHERE ID = 1;

INSERT INTO LIVROS(TITULO, GENERO) VALUES ("","");
SELECT * FROM LIVROS;
UPDATE LIVROS SET NOME = "", GENERO = "" WHERE ID = 1;
DELETE FROM LIVROS WHERE ID = 1;

INSERT INTO BIBLIOTECA.AUTORES (nome, nacionalidade) VALUES 
('J.K. Rowling', 'Britânica'),
('George R.R. Martin', 'Americano'),
('J.R.R. Tolkien', 'Britânico'),
('Agatha Christie', 'Britânica'),
('Isaac Asimov', 'Russo-Americano');

INSERT INTO BIBLIOTECA.LIVROS (titulo, id_autor, genero) VALUES
('Harry Potter e a Pedra Filosofal', 1, 'Fantasia'),
('Harry Potter e o Cálice de Fogo', 1, 'Fantasia'),
('A Guerra dos Tronos', 2, 'Fantasia'),
('O Senhor dos Anéis: A Sociedade do Anel', 3, 'Fantasia'),
('O Senhor dos Anéis: As Duas Torres', 3, 'Fantasia'),
('Assassinato no Expresso do Oriente', 4, 'Mistério'),
('E Não Sobrou Nenhum', 4, 'Mistério'),
('Fundação', 5, 'Ficção Científica'),
('Eu, Robô', 5, 'Ficção Científica'),
('O Hobbit', 3, 'Fantasia');