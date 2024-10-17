CREATE DATEBASE mercado;

CREATE TABLE mercado.produtos{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) not null,
    preco DECIMAL(9,2),
    status BOOLEAN DEFAULT TRUE
};

CREATE TABLE mercado.cliente{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) not null,
    telefone varchar(25) not null,
    status BOOLEAN DEFAULT TRUE
};

CREATE TABLE mercado.pedido{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente int not null,
    PRIMARY KEY(id_cliente),
    FOREIGN KEY(id_cliente) REFERENCES cliente(id)
};