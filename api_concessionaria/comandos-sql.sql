INSERT INTO CLIENTE(NOME, TELEFONE) VALUES ("", "");
SELECT * FROM CLIENTE;
UPDATE CLIENTE SET NOME = "", TELEFONE = "", STATUS = true WHERE ID = 1;
DELETE FROM CLIENTE WHERE ID = 1;

INSERT INTO VEICULO(MODELO, MARCA, ANO, PRECO) VALUES ("", "", 0, 0.00);
SELECT * FROM VEICULO;
UPDATE VEICULO SET MODELO = "", MARCA = "", ANO = 0, PRECO = 0.00 WHERE ID = 1;
DELETE FROM VEICULO WHERE ID = 1;

INSERT INTO PEDIDO(ID_CLIENTE, ID_VEICULO, QUANTIDADE, TOTAL) VALUES ("", "", 0, 0.00);
SELECT * FROM PEDIDO;
UPDATE PEDIDO SET QUANTIDADE = 0, TOTAL = 0.00 WHERE ID = 1;
DELETE FROM PEDIDO WHERE ID = 1;
