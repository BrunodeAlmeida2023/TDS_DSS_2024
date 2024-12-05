-- CLIENTE;
--CRUD
INSERT INTO CLIENTE(NOME, TELEFONE) VALUES ("","");
SELECT * FROM CLIENTE;
UPDATE CLIENTE SET NOME = "", TELEFONE= "", STATUS=true WHERE ID = 1;
DELETE FROM CLIENTE WHERE ID = 1;

-- PRODUTO;
--CRUD
INSERT INTO PRODUTO(NOME, PRECO) VALUES ("","");
SELECT * FROM PRODUTO;
UPDATE PRODUTO SET NOME = "", PRECO= 0.59 WHERE ID = 1;
DELETE FROM PRODUTO WHERE ID = 1;

-- PEDIDO;
--CRUD
INSERT INTO PEDIDO(ID_CLIENTE, ID_PRODUTO, QUANTIDADE, TOTAL) 
    VALUES ("","");
SELECT * FROM PEDIDO;
UPDATE PEDIDO SET QUANTIDADE = 1 WHERE ID = 1;
DELETE FROM PEDIDO WHERE ID = 1;


INSERT INTO mercado.produto (nome, preco, status) VALUES
('Arroz Branco', 5.99, TRUE),
('Feijão Preto', 7.49, TRUE),
('Macarrão Espaguete', 3.89, TRUE),
('Óleo de Soja', 8.29, TRUE),
('Café em Pó', 12.50, TRUE),
('Açúcar Cristal', 4.20, TRUE),
('Alface', 2.50, TRUE),
('Tomate', 3.99, TRUE),
('Cebola', 2.80, FALSE),  -- Produto descontinuado
('Leite Integral', 3.69, TRUE),
('Manteiga', 6.10, TRUE),
('Queijo Mussarela', 15.75, TRUE);

INSERT INTO mercado.cliente (nome, telefone, status) VALUES
('João Silva', '(11) 98765-4321', TRUE),
('Maria Oliveira', '(21) 99876-5432', TRUE),
('Pedro Santos', '(31) 91234-5678', TRUE),
('Ana Souza', '(41) 92345-6789', FALSE),  -- Cliente inativo
('Carlos Pereira', '(51) 93456-7890', TRUE),
('Fernanda Costa', '(61) 94567-8901', TRUE),
('Ricardo Almeida', '(71) 95678-9012', TRUE),
('Patrícia Lima', '(81) 96789-0123', TRUE),
('Lucas Martins', '(91) 97890-1234', FALSE),  -- Cliente inativo
('Beatriz Rocha', '(85) 98901-2345', TRUE);
