-- Active: 1687818145662@@127.0.0.1@3306
CREATE TABLE books(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    page_count INTEGER,
    price REAL NOT NULL
);

SELECT * FROM books;

DROP TABLE books;

INSERT INTO books (id, name, author, page_count, price) 
VALUES 
('b001', 'O Quinze', 'Ranchel de Queiroz', 208, 25.95),
('b002', 'Dom Casmurro', 'Machado de Assis', '' , 46.77);

UPDATE books
SET
	page_count = 463
WHERE id = 'b002';

DELETE FROM books
WHERE id = 'b001';

-- criar tabela tarefas
CREATE TABLE tarefas (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    tarefa TEXT NOT NULL,
    hora REAL NOT NULL
);

-- deletar tabela INTEIRA
DROP TABLE tarefas;

-- visualizar tabela tarefas
SELECT * FROM tarefas;

-- adicionar dentro da tabela tarefas
INSERT INTO tarefas (id, tarefa, hora)
    VALUES 
        ('t001', 'Estudar', 18);

-- adicionar tarefa
UPDATE tarefas
SET
    tarefa = 'Ver mozao'
WHERE ID = 't003';

-- deletar tarefa
DELETE FROM tarefas
WHERE ID = 't001';
